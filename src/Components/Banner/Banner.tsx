import "./Banner.css";
import Img from "../../assets/Images/Banner.jpg";
import Play from "../../assets/Images/Play.png";
import Info from "../../assets/Images/Info.png";
import Title from "../../assets/Images/Banner Title.png";

function Banner() {
  return (
    <div className="BannerDiv">
      <img src={Img} className="BannerImg" />
      <div className="BannerDesc">
        <img src={Title} className="BannerTitle" />
        <div className="BannerText">
          Venture into Earth's hidden realms and encounter extraordinary
          creatures in this captivating wildlife documentary.
        </div>
        <div className="BtnDiv">
          <button className="Btn Btn1">
            <img src={Play} className="BtnImg1" />
            <div className="flex">Play</div>
          </button>
          <button className="Btn Btn2">
            <img src={Info} className="BtnImg2" />
            <div className="flex">More Info</div>
          </button>
        </div>
      </div>
      <div className="Blend"></div>
    </div>
  );
}

export default Banner;
