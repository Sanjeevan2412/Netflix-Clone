import "./Header.css";
import Logo from "../../assets/Images/Logo.png";
import Search from "../../assets/Images/Search.png";
import Bell from "../../assets/Images/Bell.png";
import Down from "../../assets/Images/Down.png";

function Header() {
  return (
    <div className="HeaderDiv">
      <div className="MenuDiv1">
        <img src={Logo} className="Logo"></img>
        <ul className="MenuList Inv1">
          <a className="MenuText" href="">
            Home
          </a>
          <a className="MenuText" href="">
            TV Shows
          </a>
          <a className="MenuText" href="">
            Movies
          </a>
          <a className="MenuText" href="">
            New & Popular
          </a>
          <a className="MenuText" href="">
            My List
          </a>
          <a className="MenuText" href="">
            Browse By Languages
          </a>
        </ul>
        <div className="BrowseDiv">
          <div className="BrowseText">Browse</div>
          <img src={Down} className="Arrow"></img>
        </div>
      </div>
      <div className="MenuDiv2">
        <div className="IconDiv SearchDiv">
          <img src={Search} className="Icon"></img>
        </div>
        <div className="IconDiv">
          <img src={Bell} className="Icon"></img>
          <span className="BellNo">2</span>
        </div>
        <div className="ProfileDiv">
          <div className="ProfilePicture"></div>
          <img src={Down} className="Arrow Inv1"></img>
        </div>
      </div>
    </div>
  );
}

export default Header;
