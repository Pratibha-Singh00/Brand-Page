const HeroSection = () => {
        return (
         <main className="hero container">
          <div className="hero-content">
                        <h1>Your Feet Deserve the Best</h1>
                        <p>Your Feet Deserve the BestYour Feet Deserve the BestYour 
                        Feet Deserve the BestYour Feet Deserve the BestYour Feet Deserve 
                        the BestYour Feet Deserve the Best</p>
                

                <div className="hero-btn">
                  <button>Shop Now</button> 
                  <button classname="secondry-btn">Catogory</button>
                </div>

                <div className="shopping">
                <p> Also Available on</p>

                <div className="brand-icons">
                  <img src="/images/amazon.png" alt="amazon-logo"></img>
                   <img src="/images/flipkart.png" alt="flipkart-logo"></img>
                </div>
                </div>
          </div>      
        
        <div className="hero-image">
        <img src="/images/shoe_image.png" alt="hero-image"/>      
        </div>
        </main>
  );
};

export default HeroSection;