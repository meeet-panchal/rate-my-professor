import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'


const NavigationBar = () => {
    const location = useLocation();
    const [loggedInStatus, setLoggedInStatus] = useState(true)
    const [userData, setUserData] = useState({})


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


    return (
        <nav className="navigation" id="navigation">
            <div className="logo">
                <Link to="/">

                    <span id="part1">Rate My</span>
                    <span id="part2"> Professor</span>

                </Link>
            </div>
            <header>
                <div className="navigation" id="navigation">

                    <ul>
                        {loggedInStatus && userData?.isStudent &&(
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
                        {loggedInStatus && <li>
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
            </header>
            {/* <i className="fa fa-bars" onClick="showmenu()"></i> */}
        </nav>
    )
}

export default NavigationBar