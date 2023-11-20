import bottleImg from './Images/20L.png'
import halfLiter from './Images/500ml.png'
import Oneliter from './Images/1liter.png'
import twoLiter from './Images/2liter.png'

import './styles/products.css'
const Products = () => {

    const data = {
        name: "Aqualinc",
      };
  return (
    <>
     <div className="product-card">
        <div className="header">
            <h2>Avalible Products</h2>
        </div>
        <div class="products">
        <div class="product">
            <div class="p-img">
            <img src={halfLiter} alt=""/>
            </div>
            <p>  500ml Bottle</p>
            {/* <span>1 ltr</span><br/> */}
            <div class="btn">
            <a id="call-btn" href="tel:+91-9380633832"><p>Call Now</p></a>
    
                </div>
        </div>
        <div class="product">
            <div class="p-img">
            <img src={Oneliter} alt=""/>
            </div>
            <p> 1L Water Bottle</p>
            {/* <span>1 ltr</span><br/> */}
            <div class="btn">
            <a id="call-btn" href="tel:+91-9380633832"><p>Call Now</p></a>
    
                </div>
        </div>
        <div class="product">
            <div class="p-img">
            <img src={twoLiter} alt=""/>
            </div>
            <p> 2 L Water Bottle</p>
            {/* <span>1 ltr</span><br/> */}
            <div class="btn">
            <a id="call-btn" href="tel:+91-9380633832"><p>Call Now</p></a>
         
            </div>
        </div>
        <div class="product">
            <div class="p-img">
            <img src={bottleImg} alt=""/>
            </div>
            <p> 20L Water Bottle</p>
            {/* <span>1 ltr</span><br/> */}
            <div class="btn">
            <a id="call-btn" href="tel:+91-9380633832"><p>Call Now</p></a>
        
            </div>
        </div>
    </div>
   <div></div>
    </div>
    </>
  )

}
export default Products;

