# chad_website — Detailed Context for Claude

React frontend for ChadAI (Create React App). Run with `npm start` on port 3000.
Backend API lives in `../chadai_server` on port 3001.

---

## Directory Map

```
chad_website/src/
├── App.js                           # Router — all page routes defined here
├── App.css                          # Global styles (font, body bg/color)
├── index.js                         # ReactDOM.createRoot entry
├── components/
│   ├── header/
│   │   ├── Header.js                # Shared nav — isSignedIn prop switches auth state
│   │   └── header.css
│   ├── footer/
│   │   ├── Footer.js                # Shared footer — nav + social links
│   │   └── footer.css
│   └── card/
│       ├── FeedbackCard.js          # Review card (name, feedback, star rating)
│       └── feedback.css             # Built but commented out on Home
└── pages/
    ├── home/         Home.js        # Landing page — waitlist form + image slider + feature blocks
    ├── about/        About.js       # Static about/mission page
    ├── policy/       Policy.js      # Static privacy policy page
    ├── error/        Error.js       # 404 catch-all
    ├── login/        Signin.js      # Sign-in UI shell (no logic yet)
    ├── register/     Signup.js      # Sign-up UI shell (no logic yet)
    ├── verify/       verifyEmail.js # Email verify UI shell (no logic yet)
    ├── products/     Products.js    # Public pricing page (/plans route)
    ├── dashboard/    Dashboard.js   # User dashboard — hardcoded data, no API yet
    ├── profile/      Profile.js     # User profile — hardcoded data, no API yet
    ├── subscriptions/ Subscriptions.js # Billing management — hardcoded data, no API yet
    ├── pricing/      Pricing.js     # EMPTY FILE — ignore, not used
    └── images/                      # Static assets (icon.png, icon-tr.png, icon-bg.png,
                                     #   icon2.png, headerlgr.png, text_img.png,
                                     #   image_chad.png, reply_chad.png,
                                     #   person1.jpg, person2.jpeg, person3.jpg)
```

---

## Route Map (App.js)

```
/               → Home
/about          → About
/signin         → SignIn
/signup         → SignUp
/verify-email   → VerifyEmail
/plans          → Products   (public pricing page)
/policy         → Policy
/dashboard      → Dashboard  (meant to be auth-protected — currently not guarded)
/profile        → Profile    (meant to be auth-protected — currently not guarded)
/subscriptions  → Subscriptions (meant to be auth-protected — currently not guarded)
*               → Error (404)
```

There are **no protected routes** yet. Anyone can navigate to `/dashboard`, `/profile`, `/subscriptions` without being logged in.

---

## Page-by-Page Status

### Home (`/`) — Most complete page
Real logic exists here:
- **Custom image slider** — manual implementation (not react-slick). 3 images (`text_img.png`, `image_chad.png`, `reply_chad.png`) with cloned first/last for seamless loop. Auto-advances every 9s. Loop resets via `useEffect` watching `currentIndex`.
- **Waitlist form** — two real `axios` calls to `https://chad-server.onrender.com/api/v1/web/` (old v1 API, hardcoded URL). `getWaitlist` on mount, `addToWaitlist` on form submit. `alert` state drives user feedback, cleared via `setTimeout`.
- `isSignedIn={false}` hardcoded to Header.
- FeedbackCard / react-slick slider section is **fully commented out**.
- Counter block (`CounterCard`) is **fully commented out**.
- `use` is imported from React but **not used** — harmless, can be removed.

### About (`/about`) — Complete
Static. No API calls. `isSignedIn` defaults to `false` in Header.

### Policy (`/policy`) — Complete
Static. Support emails: `chadai.support@gmail.com`, `chadai.app@gmail.com`. Last updated Sep 25, 2025.

### Error (`*`) — Complete
Static 404 page with "Go Home" link.

### SignIn (`/signin`) — UI shell only
- Form renders correctly (Google button, email input, password input, Sign In button).
- **No state, no handlers, no API call.** Inputs are uncontrolled. Button does nothing.
- Google OAuth button does nothing.
- Needs: form state, API call to `POST /api/v2/auth/login`, token storage, redirect on success.

### SignUp (`/signup`) — UI shell only
- Form renders (Google button, name/email/password inputs, Create Account button).
- **No state, no handlers, no API call.** Confirm Password field is commented out.
- Needs: form state, API call to `POST /api/v2/auth/register`, redirect to `/verify-email`.

### VerifyEmail (`/verify-email`) — UI shell only
- 6 separate `<input maxLength="1">` boxes for digit code entry.
- **No state, no auto-focus-next, no code assembly, no API call.**
- "Resend" link points to `#` (does nothing).
- Needs: controlled inputs with auto-advance, code assembly, `POST /api/v2/auth/verify-email`, resend via `POST /api/v2/auth/resend-verification`.

### Products / Pricing (`/plans`) — Static shell
- Shows Starter (Free), Pro ($3.75/mo), Enterprise ($9.75/mo).
- **Prices and limits do NOT match server's PLANS config** (server: basic=$4.25, pro=$6.75, unlimited=$17.76).
- "Choose Plan" buttons do nothing.
- `isSignedIn={true}` hardcoded (should be dynamic).
- Needs: dynamic plan data from `config/plans.js` logic, wire buttons to billing checkout.

### Dashboard (`/dashboard`) — UI shell, hardcoded data
All UI blocks exist and look good:
- Daily usage card, monthly usage card, cost card
- Current plan card with Upgrade button
- Usage breakdown (chat/image/analysis)
- Source breakdown (extension/website)
- **All data is hardcoded mock values** (dailyUsed: 42, monthlyUsed: 320, etc.)
- `isSignedIn={true}` hardcoded.
- Needs: real data from `GET /api/v2/auth/me` + `Usage` aggregation endpoint.

### Profile (`/profile`) — UI shell, hardcoded data
UI exists:
- Avatar (placeholder from `pravatar.cc`), "Change Photo" button
- Name, email, plan, member-since fields (all hardcoded "John Doe", "john@example.com", etc.)
- "Edit Profile" button, "Delete Account" button
- `isSignedIn={true}` hardcoded.
- Needs: data from `GET /api/v2/auth/me`, actual edit/save flow, avatar upload to Cloudinary.

### Subscriptions (`/subscriptions`) — UI shell, hardcoded data
UI exists:
- Current plan card (hardcoded "Pro Monthly, $3.75/mo, renews Feb 15 2026")
- Available plans mini-grid (Starter/Pro/Enterprise — hardcoded)
- Billing history list (hardcoded 3 entries)
- Cancel Subscription danger zone button
- `isSignedIn={true}` hardcoded.
- Needs: data from subscription API, wire Upgrade to `POST /api/v2/billing/create-checkout-session`, Cancel to Stripe portal via `POST /api/v2/billing/create-portal-session`.

---

## Shared Components

### Header (`components/header/Header.js`)
Props: `isSignedIn` (bool, default `false`), `userAvatar` (string URL, optional).

- **`isSignedIn = false`:** Shows "Sign In" and "Try for Free" nav buttons.
- **`isSignedIn = true`:** Shows user avatar (falls back to `pravatar.cc`). Hovering avatar reveals dropdown: Dashboard, Profile, Subscriptions, Log Out.
- Mobile: hamburger toggle via CSS checkbox trick (`<input type="checkbox" id="nav-toggle">`).
- **"Log Out" links to `/logout`** — this route does not exist in App.js. It will render the 404 Error page. Needs a real logout handler.
- **`isSignedIn` is hardcoded per-page** — not driven by real auth state. This needs to be replaced with a global auth context or token check.

### Footer (`components/footer/Footer.js`)
- Nav links: Home, Pricing (/plans), Policy.
- Social links: email (`betboost@gmail.com`), Instagram (`_betboost`), TikTok (`#`).
- **Old branding in Footer** — `betboost@gmail.com` and `@_betboost` Instagram are from a previous project name. Should be updated to ChadAI branding.
- Copyright: "© 2024 – 2026 ChadAI".

### FeedbackCard (`components/card/FeedbackCard.js`)
Props: `name`, `feedback`, `rating` (number, renders that many ★ stars).
Built and works. Currently **commented out** on the Home page along with the react-slick slider wrapper.

---

## Styling Conventions

- Each page/component has its own co-located `.css` file. No CSS modules, no styled-components, no Tailwind.
- Global font set in `App.css`: `font-family: monospace, sans-serif`. Google Font "Prompt" is imported but **commented out**.
- Global background: white (`#fff`), text: black (`#000`).
- Class naming: BEM-ish (e.g., `dash-card`, `dash-grid`, `sub-plan-info`).
- No CSS variables defined globally — colors/spacing are hardcoded per component.

---

## Dependencies

```
react, react-dom           — v18 (createRoot)
react-router-dom           — v6 (BrowserRouter, Routes, Route, Link)
axios                      — HTTP client
react-icons                — Icon library (Fi*, Io*, Ci*, Fa*, Hi* prefixes used)
react-slick                — Carousel (imported in Home, commented out)
slick-carousel             — CSS for react-slick (imported in Home)
```

No state management library (no Redux, no Zustand, no Context API). No TypeScript.

---

## Auth State — Current Situation

**There is no auth state management.** This is the biggest gap.

- No token is stored anywhere (no localStorage, no memory, no Context).
- No API calls for login/register/logout exist yet.
- `Header` receives `isSignedIn` as a static prop hardcoded in each page file.
- Protected pages (`/dashboard`, `/profile`, `/subscriptions`) are accessible by anyone.

**What needs to be built:**
1. Auth Context (or similar) that holds `{ user, accessToken }`, exposes `login()`, `logout()`, `refreshToken()`.
2. Access token storage — should stay in memory (not localStorage) since the backend uses httpOnly cookie for refresh token. Access token is returned in login JSON response.
3. `PrivateRoute` wrapper component to guard `/dashboard`, `/profile`, `/subscriptions`.
4. `Header` should derive `isSignedIn` from auth context, not props.
5. On app load: attempt a silent token refresh (`POST /api/v2/auth/refresh` using the httpOnly cookie) to restore session.
6. On 401 response from any API call: trigger refresh → retry → redirect to `/signin` if refresh fails.

---

## API Integration — What's Connected vs Not

| Page | API calls |
|---|---|
| Home | `GET /api/v1/web/getWaitlist`, `POST /api/v1/web/addToWaitlist` (hardcoded URL, old v1) |
| SignIn | None — shell only |
| SignUp | None — shell only |
| VerifyEmail | None — shell only |
| Dashboard | None — mock data |
| Profile | None — mock data |
| Subscriptions | None — mock data |
| Products | None — static |

**Base URL:** No central API base URL config exists yet. Home.js hardcodes `https://chad-server.onrender.com`. When wiring the remaining pages, define a central base URL (e.g., env var `REACT_APP_API_URL`) and use it everywhere.

---

## Known Issues & Inconsistencies

- **`/logout` route missing:** Header dropdown links to `/logout` but no route exists — renders 404.
- **Pricing mismatch:** Products page shows Pro at $3.75/mo; server has Pro at $6.75/mo and Basic at $4.25/mo. Plans need to be reconciled.
- **Footer old branding:** `betboost@gmail.com` and `@_betboost` Instagram — leftover from previous project name, should be ChadAI contacts.
- **`Pricing.js` is empty:** `pages/pricing/Pricing.js` has 1 line and is unused. The real pricing page is `pages/products/Products.js` at route `/plans`.
- **`use` imported but unused in Home.js:** `import { use } from "react"` — safe to remove.
- **Home hardcodes `isSignedIn={false}`** even when a user is logged in — header will show Sign In / Try Free to authenticated users until auth context is wired.
- **`Products.js` hardcodes `isSignedIn={true}`** — public pricing page shows the authenticated header to everyone.
- **No error boundaries** — unhandled JS errors will crash the whole page.
- **No loading states** on any page — when API calls are added, loading spinners/skeletons will need to be added.
- **React Strict Mode is on** (`index.js`) — effects run twice in dev. Don't add workarounds; this is correct behavior.

---

## What's Next (Logical Build Order)

1. **Auth system** — Context + token storage + silent refresh on load + PrivateRoute
2. **Wire SignIn / SignUp / VerifyEmail** — connect to backend auth endpoints
3. **Header `isSignedIn`** — derive from auth context across all pages
4. **Fix `/logout` route** — convert to a button that calls logout API + clears state
5. **Dashboard** — fetch real usage data
6. **Profile** — fetch real user data, enable edit/avatar upload
7. **Subscriptions** — fetch real subscription, wire Stripe checkout + portal
8. **Pricing page** — sync plan data with backend config, wire Choose Plan buttons
9. **Footer branding** — update email and social links to ChadAI accounts
10. **FeedbackCard slider** — uncomment and populate with real testimonials when ready
