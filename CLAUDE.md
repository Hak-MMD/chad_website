# chad_website — Project Context for Claude

React frontend for ChadAI. Built with **Vite** (not CRA). Run with `npm start` on port 3000.
Backend API lives in `../chadai_server` on port 3001.

---

## Tech Stack

- React 18, React Router DOM v6
- **Vite** build tool (vite.config.js at project root)
- **Tailwind CSS** v3 — available globally via `@tailwind` directives in App.css. PostCSS config in postcss.config.js.
- Axios — HTTP client, centralized instance at `src/api/axios.js`
- react-icons — icon library
- react-slick + slick-carousel — carousel (imported in Home but currently commented out)

---

## Environment Variables

Defined in `.env` (see `.env.example` for documentation):

```
VITE_API_URL=http://localhost:3001       # Backend base URL
VITE_BYPASS_AUTH=true                    # Skip auth guard in development
```

Vite env vars use `import.meta.env.VITE_*` syntax (not `process.env.REACT_APP_*`).
Set `VITE_BYPASS_AUTH=false` (or remove it) before deploying to production.

---

## Directory Map

```
chad_website/
├── index.html                           # Vite entry HTML (project root, not public/)
├── vite.config.js                       # Vite config — port 3000, JSX in .js files
├── tailwind.config.js
├── postcss.config.js
├── .env                                 # Local env vars (gitignored)
├── .env.example                         # Env var documentation
└── src/
    ├── App.js                           # Router + AuthProvider wrapper
    ├── App.css                          # Global styles + Tailwind directives + shared utilities
    ├── index.js                         # ReactDOM.createRoot entry (no reportWebVitals)
    ├── api/
    │   └── axios.js                     # Centralized Axios instance (auth interceptors)
    ├── context/
    │   └── AuthContext.js               # Global auth state — AuthProvider + useAuth()
    ├── components/
    │   ├── header/       Header.js      # Nav — reads from useAuth(), no isSignedIn prop
    │   ├── footer/       Footer.js      # Footer — ChadAI branding, ES import for logo
    │   ├── card/         FeedbackCard.js # Testimonial card (commented out on Home)
    │   ├── ProtectedRoute.js            # Redirects to /signin if not logged in
    │   └── PublicRoute.js               # Redirects to /dashboard if already logged in
    └── pages/
        ├── home/         Home.js        # Landing — waitlist form, image slider
        ├── about/        About.js       # Static
        ├── policy/       Policy.js      # Static
        ├── error/        Error.js       # 404 catch-all
        ├── login/        Signin.js      # Wired — POST /api/v2/auth/login
        ├── register/     Signup.js      # Wired — POST /api/v2/auth/register
        ├── verify/       verifyEmail.js # Wired — POST /api/v2/auth/verify-email
        ├── oauth/        OAuthSuccess.js # Handles Google OAuth redirect (?token=)
        ├── products/     Products.js    # Public pricing page (/plans) — 4 real plans
        ├── dashboard/    Dashboard.js   # Protected — GET /api/v2/auth/me
        ├── profile/      Profile.js     # Protected — GET /api/v2/auth/me
        ├── subscriptions/ Subscriptions.js # Protected — Stripe checkout + portal
        ├── billing/
        │   ├── Success.js               # /billing/success — Stripe redirects here on success
        │   ├── Cancel.js                # /billing/cancel — Stripe redirects here on cancel
        │   └── billing.css
        ├── pricing/      Pricing.js     # Redirects to /plans (legacy, do not use)
        └── images/                      # Static assets (icon.png, text_img.png, etc.)
```

---

## Route Map (App.js)

```
/                   → Home                     (public)
/about              → About                    (public)
/plans              → Products                 (public pricing page)
/policy             → Policy                   (public)
/oauth-success      → OAuthSuccess             (public — Google OAuth callback)

/signin             → SignIn    [PublicRoute]   (redirects to /dashboard if logged in)
/signup             → SignUp    [PublicRoute]   (redirects to /dashboard if logged in)
/verify-email       → VerifyEmail              (public — no guard, email passed via state)

/dashboard          → Dashboard [ProtectedRoute]
/profile            → Profile   [ProtectedRoute]
/subscriptions      → Subscriptions [ProtectedRoute]
/billing/success    → BillingSuccess [ProtectedRoute]
/billing/cancel     → BillingCancel  [ProtectedRoute]

*                   → Error (404)
```

---

## Auth System

### AuthContext (`src/context/AuthContext.js`)

Wraps the entire app (inside BrowserRouter in App.js). Provides:

```js
const { user, accessToken, loading, login, logout, refresh } = useAuth()
```

- `user` — `{ id, email, plan, role }` or `null`
- `loading` — `true` during initial silent refresh on app load
- `login(userData, token)` — called after successful login/register
- `logout()` — calls `POST /api/v2/auth/logout`, clears state
- `refresh()` — calls `POST /api/v2/auth/refresh` using httpOnly cookie, returns new token

**On app load:** AuthContext attempts a silent refresh (`POST /api/v2/auth/refresh`) using the httpOnly cookie. If it succeeds, the user is restored without logging in again. If it fails, `user` stays `null`.

### Axios Instance (`src/api/axios.js`)

All API calls should use this instance, not bare `axios`:

```js
import api from '../../api/axios'
api.get('/api/v2/auth/me')
```

Features:
- `baseURL` set from `import.meta.env.VITE_API_URL`
- `withCredentials: true` — sends httpOnly refresh token cookie automatically
- **Request interceptor** — attaches `Authorization: Bearer <token>` header
- **Response interceptor** — on 401: auto-calls `/refresh`, retries original request; queues concurrent requests during refresh; redirects to `/signin` if refresh fails

### Route Guards

- **ProtectedRoute** — redirects to `/signin` with `state.from = location.pathname` so the user returns to the original page after login
- **PublicRoute** — redirects logged-in users to `/dashboard` (used on `/signin` and `/signup`)
- **Dev bypass** — `VITE_BYPASS_AUTH=true` skips both guards for local UI development

---

## Page-by-Page Status

### Home (`/`) — Complete
- Custom image slider (3 images, cloned ends for seamless loop, 9s auto-advance)
- Waitlist form: `GET /api/v1/web/getWaitlist` + `POST /api/v1/web/addToWaitlist`
- API base URL from `import.meta.env.VITE_API_URL` (no longer hardcoded)
- FeedbackCard slider and CounterCard block are commented out

### SignIn (`/signin`) — Wired
- `POST /api/v2/auth/login` → calls `login(user, token)` → redirects to `location.state.from || '/dashboard'`
- Google OAuth button → redirects to `VITE_API_URL/api/v2/auth/google`
- Shows `verified: true` banner when arriving from VerifyEmail

### SignUp (`/signup`) — Wired
- `POST /api/v2/auth/register` → navigates to `/verify-email` with `state.email`
- Google OAuth button → same redirect as SignIn

### VerifyEmail (`/verify-email`) — Wired
- 6-digit controlled inputs with auto-advance focus and paste support
- If no `state.email` (direct navigation), shows an email input field
- `POST /api/v2/auth/verify-email` → navigates to `/signin` with `state.verified`
- Resend button → `POST /api/v2/auth/resend-verification`

### OAuthSuccess (`/oauth-success`) — Wired
- Reads `?token=` from URL query string
- Decodes JWT payload to extract user object
- Calls `login(user, token)` → redirects to `/dashboard`

### Products (`/plans`) — Complete
- 4 plans with correct prices: Free, Basic ($4.25), Pro ($6.75), Unlimited ($17.76)
- "Choose Plan" → `/signup` (logged out) or `/subscriptions` (logged in)
- Shows "Current Plan" label for the user's active plan

### Dashboard (`/dashboard`) — Wired
- Fetches `GET /api/v2/auth/me` on mount
- Shows real daily/monthly usage and limits
- Shows current plan name and price
- Skeleton loader while fetching

### Profile (`/profile`) — Wired
- Fetches `GET /api/v2/auth/me` on mount
- Shows real name, email, plan, member-since date
- Avatar from `pravatar.cc` seeded by user ID
- Skeleton loader while fetching
- Delete Account button renders but has no handler yet

### Subscriptions (`/subscriptions`) — Wired
- Current plan from `useAuth()` user object (no extra fetch needed)
- **Upgrade** → `POST /api/v2/billing/create-checkout-session` → redirect to Stripe URL
- **Manage Billing / Cancel** → `POST /api/v2/billing/create-portal-session` → redirect to Stripe portal
- Downgrade (to lower paid plan) handled via portal button, not inline

### BillingSuccess (`/billing/success`) — Complete
- Stripe redirects here after successful checkout
- Calls `refresh()` after 2s delay (gives webhook time to process) to reload updated plan
- Shows updated plan name once refresh completes

### BillingCancel (`/billing/cancel`) — Complete
- Stripe redirects here when checkout is abandoned
- Static message, link back to `/subscriptions`

---

## Shared Components

### Header (`components/header/Header.js`)
- No `isSignedIn` prop — reads `user` from `useAuth()`
- Unauthenticated: shows Sign In + Try for Free links
- Authenticated: shows avatar dropdown (Dashboard, Profile, Subscriptions, Log Out)
- Log Out calls `logout()` then `navigate('/')`
- Logo uses ES import (not `require()`)
- Mobile hamburger via CSS checkbox trick

### Footer (`components/footer/Footer.js`)
- Logo uses ES import
- Social links: `chadai.support@gmail.com`, Instagram placeholder, TikTok placeholder
- Copyright: "© 2024 – 2026 ChadAI"

### ProtectedRoute / PublicRoute
See Auth System section above.

---

## Styling Conventions

- Each page/component has a co-located `.css` file for component-specific styles
- **Tailwind CSS is available** — use utility classes for new components
- Global styles in `App.css`: body font, background, shared utilities (`.auth-error`, `.auth-success`, `.link-btn`, `.skeleton-box`)
- Skeleton loader: `.skeleton-box` CSS class with shimmer animation — use inline `style` for width/height
- BEM-ish class naming for existing components (e.g., `dash-card`, `sub-plan-info`)
- Google Fonts loaded via `<link>` in `index.html`, not CSS `@import`

---

## API Integration Summary

| Page | Endpoint(s) |
|---|---|
| Home | `GET /api/v1/web/getWaitlist`, `POST /api/v1/web/addToWaitlist` |
| SignIn | `POST /api/v2/auth/login` |
| SignUp | `POST /api/v2/auth/register` |
| VerifyEmail | `POST /api/v2/auth/verify-email`, `POST /api/v2/auth/resend-verification` |
| OAuthSuccess | reads `?token=` from URL |
| Dashboard | `GET /api/v2/auth/me` |
| Profile | `GET /api/v2/auth/me` |
| Subscriptions | `POST /api/v2/billing/create-checkout-session`, `POST /api/v2/billing/create-portal-session` |
| BillingSuccess | calls `refresh()` from AuthContext |

---

## Not Yet Connected to Backend

- **Delete Account** button on Profile — no backend endpoint exists for this yet
- **Chat / AI interface** — no chat page exists in this frontend yet; AI interactions happen via the Chrome extension
- **Billing history** — Subscriptions page removed the hardcoded history; no backend endpoint returns transaction history
- **Avatar upload** — Profile "Change Photo" button is not implemented; Cloudinary upload exists on backend but no frontend flow
- **FeedbackCard slider** on Home — commented out, waiting for real testimonial data

---

## Known Gotchas

- **Vite JSX in .js files** — `vite.config.js` has `esbuild: { loader: 'jsx', include: /src\/.*\.js$/ }` to support JSX in `.js` files without renaming to `.jsx`
- **`require()` is not available in Vite** — all assets must use ES `import`. Any new image usage must be imported at the top of the file.
- **React Strict Mode is on** — effects run twice in dev. This is intentional; don't add workarounds.
- **`withCredentials: true`** on the Axios instance is required for the httpOnly refresh token cookie to be sent. The backend CORS config must allow the frontend origin with `credentials: true`.
- **`VITE_BYPASS_AUTH=true`** skips both ProtectedRoute and PublicRoute. Pages that call `api.get('/api/v2/auth/me')` will still fail and show error state if the backend is not running — the bypass only skips the route guard.
