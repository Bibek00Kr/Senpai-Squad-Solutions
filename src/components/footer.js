import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';

function AppFooter() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
      window.addEventListener("scroll", () => {
          if (window.scrollY > 400) {
              setShowTopBtn(true);
          } else {
              setShowTopBtn(false);
          }
      });
  }, []);

  function goTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
    <Container fluid>
      <div className="copyright">&copy; 2024 Anime. All Right Reserved.</div>
      <div className="socials">
        <ul>
          <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
          <li><a href="#"><i className="fab fa-twitter"></i></a></li>
          <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
        </ul>
      </div>
      {
        showTopBtn && (
          <div className="go-top" onClick={goTop}></div>
        )
      }
      
    </Container>
    <p className="last-link">See more of my Projects <a href="https://github.com/Bibek00Kr">@ GitHub</a></p>
    </>
    
  )
}

export default AppFooter;