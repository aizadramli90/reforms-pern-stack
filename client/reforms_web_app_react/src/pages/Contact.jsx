import React from 'react';
import NavigationBar from '../components/NavigationBar';


const Contact = props => {
  return (
    <div>
      
      
  
  <title>Request For Maintenance and Safety System: Login Page</title>
  
  <NavigationBar />
  <main className="custom-main-section" style={{ height: 500 }}>
    <div className="custom-title">
      <h1 className="custom-title-text" style={{margin: '32px auto'}}>Contact</h1>
      <div style={{display: 'flex', flexDirection: 'row', gap: '16px'}}>
      <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.724340676933!2d101.86782727584448!3d2.895582154657242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdce7e8a4c1095%3A0x5252b568fbd8cc22!2sSemenyih%20Parklands!5e0!3m2!1sms!2smy!4v1724252867581!5m2!1sms!2smy"
  width={400}
  height={300}
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

      <p>
        Muhammad Aizad Ramli
        <br />
        Semenyih, Selangor Darul Ehsan
        <br />
        Email: muhammadaizadr@gmail.com
        <br />
        Tel: 6013-8804450

      </p>
      </div>
      
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



export default Contact
