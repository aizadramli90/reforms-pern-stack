import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [token, setToken] = useState('');
  const navigate = useNavigate();
  const BASE_URL = import.meta.env.VITE_BASE_URL; 


  const handleLogin = (event) => {
    event.preventDefault();
    //console.log(email, password);

    /* TODO: Submit to the api */
    fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
    .then(response => response.json())
    .then(data => {
      if (data.token) {
        //console.log(data.token);
        
        setToken(data.token);
        localStorage.setItem('token', data.token); // Store token in local storage
        navigate('/userdashboard');
      }
      setMessage(data.message);
    })
    .catch((error) => {
      console.error('Error:', error);
    });


  }
  return (
    <div>
        
  
  <title>Login | REFORMS System</title>
  <NavigationBar />
  <main className="custom-main-section">
    <div className="custom-title">
      <h1 className="custom-title-text">
        Request For Maintenance and Safety (REFORMS) System
      </h1>
    </div>
    {/* LOGIN FORM */}
    <div
      className="custom-main-login-carousel"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "15rem"
      }}
    >
      <form onSubmit={handleLogin} className="custom-login-form">
        <div className="custom-login-form-div">
          <fieldset className="fieldset-username">
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email"
              required=""
              onChange={(event) => setEmail(event.target.value)}
            />
          </fieldset>
          <fieldset className="fieldset-password">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter Password"
              required=""
              onChange={(event) => setPassword(event.target.value)}
            />
          </fieldset>
          <button id="submit">Login</button>
          <a
            href="./register.html"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              margin: "12px auto",
              textDecoration: "none",
              color: "#333333"
            }}
            className="custom-register-link-in-login"
          >
            Register
          </a>
        </div>
      </form>
      <div
        style={{
          backgroundColor: "#254336",
          border: "1px solid red",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      />
    </div>
  </main>
  {/* CAROUSEL */}
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

Login.propTypes = {

}

export default Login
