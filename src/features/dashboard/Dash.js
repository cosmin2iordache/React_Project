import React, { useState, useEffect } from 'react'
import logo from '../../assets/img/logo.png'
import { Link, useHistory } from 'react-router-dom'

//rtk_slice to indiv_component_switching

import { AiOutlineUp, AiOutlineDown } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import { ImCross } from 'react-icons/im'

import { BiSupport } from 'react-icons/bi'
import { RiLogoutBoxRLine } from 'react-icons/ri'




function Dash() {


 
    const [ishamburgerOpen, setHamburgerOpen] = useState(false)
    const [isUserOpen, setUserOpen] = useState(false)
    const [isMyProfileOpen, setMyProfileOpen] = useState(false)
    const [isCVOpen, setCVOpen] = useState(false)




    //dispatchers_to_switch_component

  


    return (
        <>

            <header className="bg-gray-900">{/*header starts here*/}
                <div className="bg-gray-900 p-4 flex  justify-between items-center">{/*logo and hamburger div  end*/}
                    <div className="flex space-x-8 items-center"><img src={logo} alt="logo" height='32' width='100' />{/*logo  div  start*/}

                    </div> {/*logo  div  end*/}

                    <div className="flex  space-x-12 "> <span className="text-gray-100 font-extrabold">My Portal</span>
                        <div className="hidden md:flex text-gray-100 space-x-4 "><button><BiSupport /></button><button className="focus:outline-none" ><RiLogoutBoxRLine /></button></div>
                    </div>

                    <div className="hamburger md:hidden flex items-center">{/*hamburger div start, right div*/}
                        <button onClick={() => setHamburgerOpen(!ishamburgerOpen)} className="text-gray-500 hover:text-white focus:outline-none">

                            {ishamburgerOpen ? <ImCross /> : <GiHamburgerMenu />}
                        </button>
                    </div>{/*hamburger div end, right div*/}
                </div>{/*logo and hamburger div  end*/}

                {ishamburgerOpen ? <div className='md:hidden  p-4  border-t  border-gray-700'>
                    <div className="flex justify-between  text-gray-500 items-center">
                        <div className="flex space-x-8  text-gray-500 items-center">
                            <img src='' alt="staff photo" className="object-cover object-center rounded-full" height='48' width='48' />
                            <span>Welcome </span>
                        </div>
                        <div className="flex  text-red-500 items-center">
                            {isUserOpen ? <button className="focus:outline-none" onClick={() => setUserOpen(!isUserOpen)} ><AiOutlineUp /></button> : <button className="focus:outline-none" onClick={() => setUserOpen(!isUserOpen)}><AiOutlineDown /></button>}
                        </div>
                    </div>
                    {isUserOpen ? <div className="flex flex-col text-gray-500 py-4">
                        <Link className='py-2' to='/support'>Support</Link>
                        <Link >Sign out</Link>
                    </div> : null}
                </div> : null}

                {ishamburgerOpen ? <div className="md:hidden  border-t  border-gray-700 flex flex-col text-gray-500  py-4">
                    {/*buttons-here*/}
                    <button  className="flex justify-start mx-4  mt-1 py-1 hover:text-white  focus:outline-none">Mobile Verification</button>
                    <button  className="flex justify-start mx-4  mt-1 py-1 hover:text-white  focus:outline-none">Register</button>
                </div> : null}

            </header>{/*header ends here*/}

            <main>
                <div className="flex w-screen h-screen" style={{height:"93vh" }}>{/*side bar starts here*/}
                    <div className="overflow-y-auto bg-red-900 w-72 border-t border-gray-500 h-full hidden md:flex flex-col   text-gray-500  py-4">
                        {/*buttons-here*/}
                        <button className="flex justify-start mx-4  mt-1 py-1 hover:text-white  focus:outline-none">Mobile Verification</button>
                        <button className="flex justify-start mx-4  mt-1 py-1 hover:text-white  focus:outline-none">Register</button>
                        <button className="flex justify-start mx-4  mt-1 py-1 hover:text-white  focus:outline-none">Registero</button>
                    </div>

                    <div id="freddieRouting" className="bg-blue-200 w-full h-full ">



                    Hello Derik

                      
                    </div>
                </div>
            </main>
        </>
    )
}

export default Dash
