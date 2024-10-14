import "./HomeFooter.css";

export default function HomeFooter() {
  return (
    <div className="Home_footer_section">
      <div className="footer_mainContent">
        <div className="Home_footer_info">
          <div className="Home_Footer_logo_container">
            <img src="./GRTPAY_logo_full.png" alt="logo" className="nav_logo" />
          </div>
          <p>
            GRT-Pay is a Layer 1 proof of work consensus mechanism that evolves
            the crypto sphere with a cutting-edge Directed Acyclic Graph
            structure building on the foundations of Bitcoin & Kaspa
          </p>
        </div>
        <div className="footer_siteMap">
          <h2>Sitemap</h2>
          <div className="siteMap_tabs">
            <p>DAG paper v1</p>
            <p>DAG paper v2</p>
            <p>Wiki</p>
            <p>Tokenomics</p>
            <p>Roadmap</p>
            <p>Press Kit</p>
            <p>Validation</p>
            <p>Products</p>
            <p>Calculator</p>
            <p>Private Clients</p>
            <p>News</p>
            <p>Blog</p>
            <p>Pillars</p>
            <p>Keynote</p>
          </div>
        </div>

        <div className="footer_legals">
          <h2>Legals</h2>
          <p>Terms Of Use</p>
          <p>Cookie Policy</p>
          <p>Privacy Policy</p>
        </div>

        <div className="footer_social">
          <h2>Socials</h2>
          <div className="socials_container">
            <a href="">
              <img src="./Press_images/image1.png" alt="" />
              Telegram
            </a>
            <a href="">
              <img src="./Press_images/image2.png" alt="" />
              Instagram
            </a>
            <a href="">
              <img src="./Press_images/image3.png" alt="" />
              Facebook
            </a>
            <a href="">
              <img src="./Press_images/image4.png" alt="" />
              Twitter
            </a>
          </div>
        </div>
      </div>

        <div className="footer_rights"><p>Copyright © GRT-Pay Disclaimer: Cryptocurrency may be unregulated in your jurisdiction. The value of cryptocurrencies may fluctuate. Profits may be subject to capital gains or other taxes applicable in your jurisdiction
           </p>
        </div>
    </div>
  );
}
