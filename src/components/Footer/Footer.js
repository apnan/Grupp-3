import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
    <span >FOLLOW US</span>
    <div >
      <i className="footerIcon fab fa-facebook-square"></i>
      <i className="footerIcon fab fa-instagram-square"></i>
      <i className="footerIcon fab fa-pinterest-square"></i>
      <i className="footerIcon fab fa-twitter-square"></i>
    </div> 
     <hr />
    <p className="footerItem">
            &copy;{new Date().getFullYear()} All rights reserved |
            Terms Of Service | Privacy
          </p>
    </div>
  )
}
