import React, { useState, useEffect } from 'react';
import MobileDetect from 'mobile-detect';
import logo from '../../img/logo/digrowfa.webp'
import { Link } from 'react-router-dom'
import '../HomeContent/Home.css'
import DownloadBtn from '../Includes/DownloadBtn/DownloadBtn'
import { firstBox, secondBox, thirdBox } from '../ImageApi/Api'
import { useNavigate } from "react-router-dom"
import { Helmet } from "react-helmet";

const LandingPage = () => {
    const [os, setOs] = useState('');
    useEffect(() => {
        const md = new MobileDetect(window.navigator.userAgent);
        const os = md.os();
        if (os === 'iOS') {
            window.location.href = 'https://apps.apple.com/in/app/digrowfa/id1667079351';
        } else if (os === 'AndroidOS') {
            window.location.href = 'https://play.google.com/store/apps/details?id=com.digrowfa.digrowfa';
        }
    }, [os]);
    return (
        <>
            <header className='homeHeader'>
                <Helmet>
                    <meta name="apple-itunes-app" content="app-id=1667079351, a app-argument=https://digrowfa.com/app" />
                </Helmet>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xl-7 col-lg-7 co-md-12 col-12 col-12' id="order2">
                            <div className='homeHeaderBg'>
                                <nav className='homeNavigation'>
                                    <ul>
                                        <li>
                                            <div className='homeLogo'>
                                                <Link to="/">
                                                    <img src={logo} alt="logo" className='img-fluid' />
                                                </Link>
                                            </div>
                                        </li>
                                    </ul>
                                </nav>
                                <div className='homeHeaderContent'>
                                    <h1>World's 1st Complete Digital Growth Platform </h1>
                                    <h4>"Accelerate your online success with our all-in-one growth platform."</h4>
                                    <div className='homeHeaderBtn'>
                                        <DownloadBtn />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-5 col-lg-5 co-md-12 col-12 col-12' id="order2">
                            <div className='homeHeaderSliderBg'>
                                <div className='homeHeaderSliderBgVideo'>
                                    {/* <video Autoplay="autoplay" muted loop>
                                        <source src={headerBgVideo} type="video/mp4" />
                                    </video> */}
                                </div>
                                <div className='homeHeaderSliderContent'>
                                    <div className='tagLine'>
                                        <h2>“ नए युग की नयी Technology ”</h2>
                                    </div>
                                    <div className='headerAnimationBox'>
                                        <div className='firstBox'>
                                            <div className='animationBox'>
                                                {firstBox.map(curElt => {
                                                    console.log("current", curElt)
                                                    return (
                                                        <>
                                                            <div className='animationImg'>
                                                                <img src={`../images/${curElt.src}.png`} alt="img1" className="img-fluid" />
                                                            </div>
                                                        </>
                                                    )
                                                })}

                                            </div>
                                        </div>
                                        <div className='secondBox'>
                                            <div className='animationBox'>
                                                {secondBox.map(curElt => {
                                                    console.log("current", curElt)
                                                    return (
                                                        <>
                                                            <div className='animationImg'>
                                                                <img src={`../images/${curElt.src}.png`} alt="img1" className="img-fluid" />
                                                            </div>
                                                        </>
                                                    )
                                                })}

                                            </div>
                                        </div>
                                        <div className='thirdBox'>
                                            <div className='animationBox'>
                                                {thirdBox.map(curElt => {
                                                    console.log("current", curElt)
                                                    return (
                                                        <>
                                                            <div className='animationImg'>
                                                                <img src={`../images/${curElt.src}.png`} alt="img1" className="img-fluid" />
                                                            </div>
                                                        </>
                                                    )
                                                })}

                                            </div>
                                            <div className='sliderAnimationOverlary'></div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </header>
        </>
    )
}

export default LandingPage