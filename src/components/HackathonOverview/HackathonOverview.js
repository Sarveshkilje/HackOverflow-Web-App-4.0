
import { Container, Row, Col } from "react-bootstrap";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./HackathonOverview.css";

const HackathonOverview = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="about-section relative">
      <Container>
        <Row className="align-items-center">
          {/* LEFT COLUMN: Big Typography */}
          <Col lg={6} md={12} className="mb-5 mb-lg-0">
            <div className="relative z-10">
              <h2 
                className="about-subtitle" 
                data-aos="fade-right"
              >
                THE PREMIER HACKATHON
              </h2>
              <h1 
                className="about-title" 
                data-aos="fade-right" 
                data-aos-delay="200"
              >
                WHAT IS <br />
                <span className="gradient-text big-glitch">HACKOVERFLOW</span>
              </h1>
              <div 
                className="decoration-line" 
                data-aos="fade-right" 
                data-aos-delay="400"
              ></div>
            </div>
          </Col>

          {/* RIGHT COLUMN: The Glass Info Pane */}
          <Col lg={6} md={12}>
            <div 
              className="glass-pane" 
              data-aos="fade-left" 
              data-aos-delay="400"
            >
              {/* Decorative Corner Markers for 'Tech' feel */}
              <div className="corner-marker top-left"></div>
              <div className="corner-marker bottom-right"></div>

              <p className="about-text">
                HackOverflow 4.0 is a <strong>3 days national-level hackathon</strong> that brings together the most creative minds in technology. 
              </p>
              <p className="about-text">
                We don't just write code; we build the future. Whether you are a master of <span className="highlight-gold">AI/ML</span>, a <span className="highlight-orange">Blockchain</span> wizard, or a <span className="highlight-pink">Web3</span> enthusiast, this is your platform to innovate.
              </p>
              
              <div className="stats-row">
                <div className="stat-item">
                  <span className="stat-number">36h</span>
                  <span className="stat-label">Non-Stop</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">₹100000+</span>
                  <span className="stat-label">Prize Pool</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">250+</span>
                  <span className="stat-label">Hackers</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Background Decor - Reusing the glow style for consistency */}
      <div className="glow-orb orb-3"></div>
    </section>
  );
};

export default HackathonOverview;
