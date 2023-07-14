//import image from "../../assets/images/house2.jpg";
import "./Header.css";

const Header = () => {
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <div>
          <p>Shutto Estate</p>
          {/*<img src={image} alt="header image" width={100} />*/}
        </div>

        <div className="flexCenter h-menu">
          <a href="">Residencies</a>
          <a href="">Our Value</a>
          <a href="">Contact Us</a>
          <a href="">Get Started</a>
          <button className="button">
            <a href="">Contact</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
