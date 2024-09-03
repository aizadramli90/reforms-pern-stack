import { useState } from 'react';
import NavigationBar from '../components/NavigationBar';
import { useNavigate } from 'react-router-dom';


const Register = props => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const BASE_URL = import.meta.env.VITE_BASE_URL; 
  console.log(`Base url? ${BASE_URL}`);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username, email, password);

    /* TODO: Submit to the API */
    fetch(`${BASE_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      navigate('/login');
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }


  return (
    <div>
  <title>Registeration | REFORMS System</title>
  <NavigationBar />
  <main className="custom-main-section">
    <div className="custom-title">
      <h1 className="custom-title-text">
        Request For Maintenance and Safety (REFORMS) System
      </h1>
    </div>
    {/* REGISTER FORM */}
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
      <form onSubmit={handleSubmit} className="custom-login-form">
        <div className="custom-login-form-div">
          <fieldset className="fieldset-username">
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              id="username"
              name='username'
              placeholder="Enter Username"
              required=""
              value={username}
              onChange={(event)=>{
                setUsername(event.target.value);
              }}
            />
          </fieldset>
          <fieldset className="fieldset-username">
            <label htmlFor="email">Email </label>
            <input
              type="email"
              id="email"
              name='email'
              placeholder="Enter Your Email"
              required=""
              value={email}
              onChange={(event)=>{
                setEmail(event.target.value);                
              }}
            />
          </fieldset>
          <fieldset className="fieldset-password">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name='password'
              placeholder="Enter Password"
              required=""
              value={password}
              onChange={(event)=>{
                setPassword(event.target.value);
              }}  
            />
          </fieldset>
          <button
            style={{
              marginTop: 50,
              borderRadius: 10,
              outline: "none",
              border: "none",
              height: 30
            }}
            id="register" type='submit'
          >
            Register
          </button>
          {/* button id="login">Login</button> */}
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

Register.propTypes = {

}

export default Register
