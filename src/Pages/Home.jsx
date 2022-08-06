import React from 'react'
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import Notification from "../assets/notification.svg";
import dp from '../assets/dp.png'
import Navbar from '../Components/Navbar'
import Content from '../Components/Content'
import Sidebar from '../Components/Sidebar';
const Home = () => {
  return (
    <>
    <Navbar className="divide-y" />
    
    <div className="grid-cols-12 flex flex-row">
        <div className="sidebar col-span-2 hidden lg:block"><Sidebar /></div>
        <div className="mainbar col-span-10">
            <Content />
        </div>
    </div>
    </>
    )
}

export default Home