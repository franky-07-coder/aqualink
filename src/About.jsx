import HeroSection from "./components/HeroSection";
import aboutimg from './Images/aboutImg.jpg'
import './About.css'
const About = () => {


  const data = {
    name: "Aqualinc",
  };

  return (
    <>

      <h2>About US</h2>
      
      <div className="about" id="about">l
        <div className="sec1">
          <p>
            DANGI AQUALINK INDUSTRIES PRIVATE LIMITED is a KARNATAKA based PRIVATE ltd. Company Registered at dated 17-JUN-2019 on Ministry of Corporate Affairs(MCA), The Corporate Identification Number (CIN) of DANGI AQUALINK INDUSTRIES PRIVATE LIMITED is U15490KA2019PTC125265 and registration number is U15490KA2019PTC125265 It has been classified as COMPANY LIMITED BY SHARES and is registered under Registrar of Companies BANGALORE India. Authorized share capital of DANGI AQUALINK INDUSTRIES PRIVATE LIMITED is Rs. 1000000 and its paid up capital is Rs. 100000. It aspire to serve in FOOD PRODUCTS and BEVERAGES MANUFACTURING activities across the India.

            Its Annual General Meeting (AGM) was lastly conducted on and as per the records of Ministry of Corporate Affairs (MCA), its balance sheet was last filed on .

            The registered Email address of DANGI AQUALINK INDUSTRIES PRIVATE LIMITED is aqualinkbeverages@gmail.com and its registered address is 239, 2A, BEHIND BUS DEPOT, DIST- BAGALKOT MUDHOL BAGALKOT KA 587313 IN KARNATAKA KARNATAKA india 587313.

            The current status of DANGI AQUALINK INDUSTRIES PRIVATE LIMITED shows as an ACTIVE.
          </p>
        </div>
        <div className="sec2">
          <div className="ic">
          <img src={aboutimg} height={400} />
          </div>
          
        </div>

      </div>
    </>
  );
};

export default About;
