import React from 'react'
import ManagerHeader from './ManagerHeader'
import Navbar from './Navbar'

const ManagerProfile = () => {
    return (
        <div className="h-[screen] flex">
            <Navbar />
            <div className="ml-14 w-screen">
                <ManagerHeader page="Profile" />

                
            </div>
        </div>
    )
}

export default ManagerProfile