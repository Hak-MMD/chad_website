import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer';
import './products.css';

function Products() {
  return (
   <>
      <Header />
      <div class="products-container flex">
        <div class="flex_content flex2">
            <h2 id='subs-h2'>Weekly</h2>
            <h4 id='subs-h4'>24.99$ / week</h4>
            <span id='subs-span'>All Betting Tips Included</span>
            <ul id='subs-ul'>
                <li id='subs-li'>Basketball(NBA) Tips</li>
                <li id='subs-li'>Soccer(Premier League, Bundesliga, LaLiga...) Tips</li>
            </ul>
            <button id='subs-btn'>
                Start Now
            </button>
          </div>
          <div class="flex_content">
              <h2 id='subs-h2'>Monthly</h2>
              <h4 id='subs-h4'>79.99$ / month</h4>
              <span id='subs-span'>All Betting Tips Included</span>
              <ul id='subs-ul'>
                  <li id='subs-li'>Basketball(NBA) Tips</li>
                  <li id='subs-li'>Soccer(Premier League, Bundesliga, LaLiga...) Tips</li>
              </ul>
              <button id='subs-btn'>
                  Start Now
              </button>
          </div>
      </div>

    <Footer />
    </>  )
}

export default Products