import { Link } from "react-router-dom";

const MainHeader = () => {
  return (
    <header>
      <div className="navigation" id="navigation">
        <ul>
          <li>
            <Link to="/ratings">RATINGS</Link>
          </li>
          <li>
            <Link to="/universities">UNIVERSITIES</Link>
          </li>
          <li>
            <Link to="/professors">PROFESSORS</Link>
          </li>
          <li>
            <Link to="/professorlist">LIST</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT US</Link>
          </li>
          <li>
            <Link to="/about-us">ABOUT US</Link>
          </li>
          <li>
            <Link to="/register">REGISTER</Link>
          </li>
          <li>
            <Link to="/login">LOGIN</Link>
          </li>
          <li>
            <Link to="/donation">DONATION</Link>
          </li>

          <li>
            <Link to="/newcontact">NEWCONTACT</Link>
          </li>
          <li>
            <Link to="/newabout">NEWABOUT</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default MainHeader;
