import React from 'react'
import NavBar from './NavBar'

const HeroSection = () => {
  return (
    <section className="hero-section">
      <NavBar />
      <div className="heroSection" id="heroSection">
        <div className="container">
          {/* Left Column */}
          <div className="banner">
            <div className="largeBox">
              <h1 className="title" style={{ marginBottom: "10px", marginTop: "0px" }}>Delicious</h1>
            </div>
            <div className="combined_boxes">
              <img src="/hero1.png" alt="hero1" className="hero1" style={{ marginBottom: "10px", marginTop: "10px", height: "500px", marginRight: "50px"}}/>
              <div className="textAndLogo">
                <div className="textWithSvg">
                  <h1 className="title">Food</h1>
                  <img src="/threelines.svg" alt="threelines" className="threelines" />
                </div>
                <img src="/logo.png" alt="logo" className="logo" />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="banner">
            <div className="imageBox">
              <img src="/hero2.png" alt="hero2" className="hero2" />
            </div>
            <h1 className="title dishes_title">Dishes</h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection