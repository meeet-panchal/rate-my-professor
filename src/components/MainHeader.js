import { Link } from "react-router-dom";

const MainHeader = () => {
  return (
    <header>
      <div class="navigation" id="navigation">
        <i class="fa fa-times" onclick="hidemenu()"></i>
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
            <Link to="/contactus">CONTACT US</Link>
          </li>
          <li>
            <Link to="/abouts">ABOUT US</Link>
          </li>
          <li>
            <Link to="/register">REGISTER</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default MainHeader;
