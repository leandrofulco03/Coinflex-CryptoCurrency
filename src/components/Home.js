import React from 'react';
import { Button } from 'react-bootstrap';
import './Home.css';

function Home() {
  return (
    <section className='home-container'>
        <div className='home-banner'>
        <div className='home-title'>
            <h4>Built on ETH. Powered by you</h4>
            <h1>The Future Of Perpetuals Is Here</h1>
            <p>Praesent vitae pellentesque diam. Vestibulum vel neque porttitor, viverra sapien id, viverra augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.</p>
            <div className='home-banner-btn'>
                <Button className='btn_primary me-2'>Start Now</Button>
                <Button className='btn_secondary'>Earn 50% APY</Button>
            </div>
        </div>
        <div className='home-img'>
            <img src='/img/banner.png' alt='banner' />
        </div>
        </div>
        <div className='info-container s1'>
            <div className='info info-card-at'>
                <h5>All-time trade volume</h5>
                <h2>$3,900,888,317</h2>
            </div>
            <div className='info info-card-tt'>
                <h5>Total Trades</h5>
                <h2>9,348</h2>
            </div>
            <div className='info info-card-oi'>
                <h5>Open Interest</h5>
                <h2>$1 M</h2>
            </div>
        </div>
        <div id='s2' className='s2'>
            <div className='s2-wrapper'>
                <div className='s2-info-container'>
                    <h1>Take full control of your crypto</h1>
                    <p>Sed sed magna sem. Quisque pulvinar ex id felis egestas viverra. In aliquam libero sed metus volutpat eleifend. Suspendisse molestie sagittis risus, eu rutrum sem lacinia quis. Phasellus a elementum.</p>
                </div>
                <div className='s2-blocks-wrapper'>
                    <div className='row s2-blocks-container'>
                        <div className='col-12 col-lg-4 col-sm-12 col-md-6 col-xs-12 s2-block'>
                            <img src='/img/Graphic-Leverage.png' alt='block' width={150} />
                            <p className='my-3'>Lorem ipsum dolor sit.</p>
                        </div>
                        <div className='col-12 col-lg-4 col-sm-12 col-md-6 col-xs-12 s2-block'>
                            <img src='/img/Graphic-Execution.png' alt='block' width={150} />
                            <p className='my-3'>Lorem ipsum dolor sit.</p>
                        </div>
                        <div className='col-12 col-lg-4 col-sm-12 col-md-6 col-xs-12 s2-block'>
                            <img src='/img/Graphic-Fees.png' alt='block' width={150} />
                            <p className='my-3'>Lorem ipsum dolor sit.</p>
                        </div>
                        <div className='col-12 col-lg-4 col-sm-12 col-md-6 col-xs-12 s2-block'>
                            <img src='/img/Graphic-Oracle.png' alt='block' width={150} />
                            <p className='my-3'>Lorem ipsum dolor sit.</p>
                        </div>
                        <div className='col-12 col-lg-4 col-sm-12 col-md-6 col-xs-12 s2-block'>
                            <img src='/img/Graphic-Pools.png' alt='block' width={150} />
                            <p className='my-3'>Lorem ipsum dolor sit.</p>
                        </div>
                        <div className='col-12 col-lg-4 col-sm-12 col-md-6 col-xs-12 s2-block'>
                            <img src='/img/Graphic-Transactions.png' alt='block' width={150} />
                            <p className='my-3'>Lorem ipsum dolor sit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Home;