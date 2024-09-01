import React, { useEffect } from 'react';
import NavigationBar from '../components/NavigationBar';


const Home = props => {
  useEffect(() => {
    // Import Bootstrap JavaScript
    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);





  return (
    <div>

  <title>Request For Maintenance and Safety System: Login Page</title>
  
  <NavigationBar />
  <main className="custom-main-section" style={{ marginBottom: 500 }}>
    <div className="custom-title">
      <h1 className="custom-title-text">
        Welcome To Request For Maintenance and Safety (REFORMS) System
      </h1>
    </div>
    {/* CAROUSEL */}
    {/* add carousel from bootstrap*/}
    <div
      className="alert alert-success"
      style={{ display: "block width: 70%" }}
    >
      <h2 className="custom-section-text" style={{ letterSpacing: "1.5px" }}>
        Our Mission
      </h2>
      
      <p style={{ lineHeight: "1.5", letterSpacing: 1 }}>
        This website is created to: <br />
        ✔️ Ease the process of maintenance request, <br />
        ✔️ To check the status of their request, <br />
        ✔️ Request for safety permit,
        <br />
        ✔️ Check the status of their safety permit request, <br />
        ✔️ Notify area owner, head of department, and safety officer about the
        safety permit request, and <br />
        ✔️ Provide a platform for employee to report any unsafe act and unsafe
        condition.
      </p>
    </div>
    <div
      id="carouselExampleIndicators"
      className="carousel slide carousel-small"
      data-bs-ride="carousel" data-bs-interval="2000"
    >
      <ol className="carousel-indicators">
        <li
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={0}
          className="active"
        />
        <li data-target="#carouselExampleIndicators" data-slide-to={1} />
        <li data-target="#carouselExampleIndicators" data-slide-to={2} />
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            className="d-block w-100"
            src="./assets/Checklist_small.jpg"
            alt="First slide"
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="./assets/progress.svg"
            alt="Second slide"
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="./assets/uauc_small.jpg"
            alt="Third slide"
          />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon bg-success"
          aria-hidden="true"
        />
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon bg-success"
          aria-hidden="true"
        />
        <span className="sr-only">Next</span>
      </a>
    </div>
  </main>
  {/* FOOTER */}
  <footer>
    <div className="nav-footer">
      <a className="footer-link" href="#">
        Disclaimer
      </a>
      <a className="footer-link" href="#">
        Security Policy
      </a>
      <a className="footer-link" href="#">
        Sitemap
      </a>
    </div>
    <div className="details-footer">
      <p>Semenyih, Selangor Darul Ehsan</p>
      <p>Email: muhammadaizadr@gmail.com</p>
      <p>Tel: 6013-8804450</p>
      <p>© 2021 Aizad Ramli. All Rights Reserved.</p>
    </div>
  </footer>


    </div>
  )
}

Home.propTypes = {

}

export default Home
