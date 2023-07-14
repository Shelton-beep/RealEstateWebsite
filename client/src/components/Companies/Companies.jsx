import "./Companies.css";
import image1 from "../../assets/images/company1.png";
import image2 from "../../assets/images/company2.png";
import image3 from "../../assets/images/company3.png";
import image4 from "../../assets/images/company4.png";

const Companies = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        <img src={image1} alt="logo1" />
        <img src={image2} alt="logo2" />
        <img src={image3} alt="logo3" />
        <img src={image4} alt="logo4" />
      </div>
    </section>
  );
};

export default Companies;
