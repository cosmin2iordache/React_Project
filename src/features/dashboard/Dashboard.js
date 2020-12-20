import React, {useState} from 'react';
import { FiLogOut} from 'react-icons/fi'; // last two letters from the name
import { BiSupport, BiDownArrow} from 'react-icons/bi'; // last two letters from the name
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';



import Logo from '../../assets/img/logo.png';
import Avatar from '../../assets/img/avatar.png';



const Dashboard = () => {

    const [isOpenMenu, setOpenMenu] = useState(false);

    function handleOpenMenu() {
        setOpenMenu(!isOpenMenu)   
    }


    return (
        
        <>
        <header>
            <div className="bg-gray-600 w-screen flex justify-between items-center py-3 px-3">
                <div className="logo" ><img src={Logo} alt="Logo" width="100" height="32"/></div>
                <div className="title">TITLE</div>
                <div className="icons-top flex space-x-4">
                    <div className="support" ><BiSupport color="red" size="25"/></div>
                    <div className="logout"><FiLogOut /></div>
                </div>

    <div className="hamburger" onClick={handleOpenMenu} > {isOpenMenu ? <ImCross /> : <GiHamburgerMenu />}</div>
            

            </div>

            {isOpenMenu ?  <div className="signin flex flex-col">
                <div className="flex justify-between items-center">
                    <div className="logo flex items-center py-3 px-3 space-x-4">
                        <img src={Avatar} alt="user-photo" width="32"/>
                        <span className="">Welcome User </span>
                    </div>

                    <div className="expand"> <BiDownArrow size="10"/> </div>
                </div>

                <div className="logOut">
                    <p>Log Out</p>
                    <p>Support</p>
                </div>





            </div> : null}
            
            




            <div className="menu flex-col">


            </div>









        </header>

        <main>



        </main>
        </>
    )
}

export default Dashboard
