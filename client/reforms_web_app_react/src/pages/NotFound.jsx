import NavigationBar from '../components/NavigationBar';

const NotFound = props => {
  return (
    <div>
        <NavigationBar />
      
  <main className="custom-main-section" style={{ height: 500 }}>
    <div className="custom-title">
      <h1 className="custom-title-text">404!</h1>
      <p>
        <span style={{ fontSize: "10rem" }}>😓</span>This is not the page you
        are looking for!
      </p>
    </div>
    {/* LOGIN FORM */}
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

NotFound.propTypes = {

}

export default NotFound




