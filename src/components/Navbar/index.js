import { Link } from 'react-router-dom'

const NavigationBar = () => {
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
                        <li>
                            <Link to="/universities">UNIVERSITIES</Link>
                        </li>
                        <li>
                            <Link to="/professors">PROFESSORS</Link>
                        </li>
                        <li>
                            <Link to="/contact">CONTACT US</Link>
                        </li>
                        <li>
                            <Link to="/about-us">ABOUT US</Link>
                        </li>
                        <li>
                            <Link to="/donation">DONATE</Link>
                        </li>
                        <li>
                            <Link to="/login">LOGIN</Link>
                        </li>
                        <li>
                            <Link to="/register">REGISTER</Link>
                        </li>
                    </ul>
                </div>
            </header>
            {/* <i className="fa fa-bars" onClick="showmenu()"></i> */}
        </nav>
    )
}

export default NavigationBar