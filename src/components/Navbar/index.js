import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect,useRef } from 'react'
import { BiMenu, BiWindowClose } from "react-icons/bi";



const NavigationBar = () => {
    const location = useLocation();
    const [loggedInStatus, setLoggedInStatus] = useState(true)
    const [userData, setUserData] = useState({})
    let nav = useRef()

    useEffect(() => {
        const authToken = localStorage.getItem("token")
        const userInfo = JSON.parse(localStorage.getItem("userInfo"))

        if (authToken !== null) {
            setLoggedInStatus(true)
            setUserData(userInfo)
        } else {
            setLoggedInStatus(false)
            setUserData({})
        }

    }, [location])


    const showmenu = (e) => {nav.current.style.right = "0px"  
    console.log(e.target)}

    const hidemenu = (e) => {
        nav.current.style.right = "-200px"
        console.log(e.target)
    }


    return (
      <section>
     <nav>
            <div className="logo">
                <Link to="/">

                    <span id="part1">Rate My</span>
                    <span id="part2"> Professor</span>

                </Link>
            </div>
          
                <div className="navigation" id="navigation" ref={nav}>
                <BiWindowClose onClick={hidemenu} className=""/>
                    <ul>
                        {loggedInStatus && userData?.isStudent && (
                            <>
                                <li>
                                    <Link to="/universities">UNIVERSITIES</Link>
                                </li>
                                <li>
                                    <Link to="/professors">PROFESSORS</Link>
                                </li></>)}
                        <li>
                            <Link to="/contact">CONTACT US</Link>
                        </li>
                        <li>
                            <Link to="/about-us">ABOUT US</Link>
                        </li>
                        <li>
                            <Link to="/donation">DONATE</Link>
                        </li>
                        {loggedInStatus && <li style={{ color: "#fff" }}>
                            Hey {userData?.firstName} {userData.lastName}
                        </li>}
                        {loggedInStatus ? (<li>
                            <Link to="/logout">LOGOUT</Link>
                        </li>) : (<li>
                            <Link to="/login">LOGIN</Link>
                        </li>)}
                        {!loggedInStatus && (<li>
                            <Link to="/register">REGISTER</Link>
                        </li>)}
                    </ul>
                </div>
           <div className='togglebtn'>
            <BiMenu onClick={showmenu}/>
            </div>
            </nav>
            </section>
           
    )
}

export default NavigationBar