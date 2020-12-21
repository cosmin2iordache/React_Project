import React from 'react'

function Menu() {
    return (
        <>
            <div className="asideMnu bg-gray-600 px-3 py-4 text-gray-300 hidden md:flex flex-col">
                    <button className="flex focus:outline-none justofy-start py-3">Home</button>
                    <button className="flex focus:outline-none justofy-start py-3">My Profile</button>
                    <button className="flex focus:outline-none justofy-start py-3">My CV</button>
                    <button className="flex focus:outline-none justofy-start py-3">Policies</button>
                    <button className="flex focus:outline-none justofy-start py-3">My Training</button>
                    <button className="flex focus:outline-none justofy-start py-3">My DBS</button>
                    <button className="flex focus:outline-none justofy-start py-3">Ocupational Health</button>
                    <button className="flex focus:outline-none justofy-start py-3">My Shifts</button>

            </div>
        </>
    )
}

export default Menu



