import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from '../Pages/App/LandingPage'
import UserCard from '../Pages/BMC/UserCard'
import Home from '../Pages/Home'
import Contact from '../Pages/HomeContent/Contact'
import Policy from '../Pages/Policy'
import ScrollToTop from '../Pages/ScrollToTop'
import ProductShare from '../Pages/SharePage/ProductShare'
import ServiceShare from '../Pages/SharePage/ServiceShare'
import Terms from '../Pages/Terms'

const Routers = () => {
    return (
        <>
            <ScrollToTop>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/BMC/usercard/:id" element={<UserCard />} />
                    <Route path="/product/:id" element={<ProductShare />} />
                    <Route path="/service/:id" element={<ServiceShare />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/policy" element={<Policy />} />
                    <Route path="/contactus" element={<Contact />} />
                    <Route path="/app/*" element={<LandingPage />} />
                </Routes>
            </ScrollToTop>
        </>
    )
}

export default Routers