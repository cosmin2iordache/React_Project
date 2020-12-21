import React, {useState} from 'react';
import { FiLogOut} from 'react-icons/fi'; // last two letters from the name
import { BiSupport, BiDownArrow} from 'react-icons/bi'; // last two letters from the name
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';
import Menu from './Menu';



import Logo from '../../assets/img/logo.png';
import Avatar from '../../assets/img/avatar.png';



const Dashboard = () => {

    const [isOpenMenu, setOpenMenu] = useState(false);
    const [isOpenLogOutSupport, setOpenLogOutSupport] = useState(false);

    function handleOpenMenu() {
        setOpenMenu(!isOpenMenu)   
    }

    function handleOpenLogOutSupport() {
        setOpenLogOutSupport(!isOpenLogOutSupport)
    }

    
    return (
        
        <>
        <header>
            <div style={{height:"6vh" }} className="bg-gray-600 w-screen flex justify-between items-center py-3 px-3">
                <div className="logo" ><img src={Logo} alt="Logo" width="100" height="32"/></div>
                <div className="title">TITLE</div>
                <div className="icons-top flex space-x-4">
                    <div className="support" ><BiSupport color="red" size="25"/></div>
                    <div className="logout"><FiLogOut /></div>
                </div>

    <div className="hamburger md:hidden" onClick={handleOpenMenu} > {isOpenMenu ? <ImCross /> : <GiHamburgerMenu />}</div>
            </div>



            {isOpenMenu ?  <div className="md:hidden"> 
                
                <div className="signin flex flex-col text-gray-300">
                        <div className="flex bg-gray-600 border-t justify-between items-center">
                            <div className="logo flex items-center py-3 px-3 space-x-4">
                                <img src={Avatar} alt="user-photo" width="32"/>
                                <span className="">Welcome User </span>
                            </div>

                            <div className="expand px-3" onClick={handleOpenLogOutSupport}><BiDownArrow size="10"/> </div>
                        </div>

                        {isOpenLogOutSupport ? <div className="logOut bg-gray-600 border-b">
                            <p>Log Out</p>
                            <p><a href="#">Support</a></p>
                        </div> 
                                : null}
                
                </div> 
            
                <div className="menu flex flex-col bg-gray-600 text-gray-300">
                    <button className="flex focus:outline-none justify-start">Home</button>
                    <button className="flex focus:outline-none justify-start">My Profile</button>
                    <button className="flex focus:outline-none justify-start">My CV</button>
                    <button className="flex focus:outline-none justify-start">Policies</button>
                    <button className="flex focus:outline-none justify-start">My Training</button>
                    <button className="flex focus:outline-none justify-start">My DBS</button>
                    <button className="flex focus:outline-none justify-start">Ocupational Health</button>
                    <button className="flex focus:outline-none justify-start">My Shifts</button>
                </div> 
            
            </div>
                        : null}
            
            
        </header>

    
        <main className="flex sm:min-w-max" style={{height:"94vh" }} > 
            <Menu />

            <div className="mainContent bg-blue-500 w-full">
                Hello Derik

            </div>

        </main>
        </>
    )
}

export default Dashboard
