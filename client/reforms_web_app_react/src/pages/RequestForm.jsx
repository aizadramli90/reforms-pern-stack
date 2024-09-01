import styles from '../components/RequestForm.module.css';
import NavigationBar from '../components/NavigationBar';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const RequestForm = () => {
  const [department, setDepartment] = useState('adminAndHR');
  const [maintenanceType, setMaintenanceType] = useState('breakdown');
  const [issuedTo, setIssuedTo] = useState('mechanical');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const BASE_URL = import.meta.env.VITE_BASE_URL;  
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log("Department: " + department + ", MaintenanceType: " + maintenanceType + ", issued to: " + issuedTo + ", title: " + title + ", description: " + description);

    fetch(`${BASE_URL}/requests`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({
        department: department,
        maintenance_type: maintenanceType,
        issued_to: issuedTo,
        title: title,
        description: description,
      })
    })
      .then(response => response.json())
      .then(data => {
        //console.log('Success:', data);
        navigate('/userdashboard');
      })
      .catch((error) => {
        console.error('Error:', error);
      });

  
  }
  return (
    <div>
      <>
        <title>Request For Maintenance and Safety System: Login Page</title>
        <NavigationBar />
        <main className={styles.customMainSection}>
          <div className={styles.customTitle}>
            <h1 className={styles.customTitleText}>Maintenance Request Form</h1>
          </div>
          {/* LOGIN FORM */}
          <div
            className={styles.customDivForm}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15rem",
              width: "100%",
              height: "100%",
              padding: "20px"
            }}
          >
            <form onSubmit={handleSubmit} className={styles.customLoginForm}>
              <div className={styles.customLoginFormDiv}>
                <fieldset className="fieldset-username">
                  <label htmlFor="department">Department </label>
                  <select
                  name='department'
                  id="department" required value={department} onChange={(event)=>{
                    console.log("Department masuk tak",   event.target.value);
          setDepartment(event.target.value);
        }}>
                    <option value="adminAndHR">Admin &amp; Human Resource</option>
                    <option value="production">Production</option>
                    <option value="labAndOperation">Lab &amp; Operation</option>
                    <option value="logistic">Logistic</option>
                    <option value="dtp">DTP</option>
                  </select>
                </fieldset>

                <fieldset className="fieldset-username">
                  <label htmlFor="maintenance_type">Type of Maintenance</label>
                  <select 
                  name='maintenance_type'
                   id="maintenance_type"  required value={maintenanceType} onChange={
                    (e) => {
                      console.log("Maintenance type masuk tak",   e.target.value);
                      setMaintenanceType(e.target.value);
                    }
                  }>
                    <option value="breakdown">Break Down</option>
                    <option value="preventive">Preventive</option>
                    <option value="asd">Annual Shut Down</option>
                  </select>
                </fieldset>

                <fieldset className="fieldset-username">
                  <label htmlFor="issued_to">Issued to</label>
                  <select 
                  name='issued_to'
                  id="issued_to" 
                  required 
                  value={
                    issuedTo
                  }
                  onChange={
                    (event) => {
                      setIssuedTo(event.target.value);
                    }
                  }
                  >
                    <option value="mechanical">Mechanical</option>
                    <option value="electrical">Electrical</option>
                    <option value="instrument">Instrument</option>
                  </select>
                </fieldset>

                <fieldset className="fieldset-password">
                  <label htmlFor="title">Brief Description of Problem</label>
                  <textarea
                    name="title" 
                    id='title'
                    rows={10}
                    cols={30}
                    placeholder="Describe your problem" 
                    required
                    value={title}
                    onChange={
                      (event) => {
                        setTitle(event.target.value);
                      }
                    }
                  />
                </fieldset>
                <fieldset className="fieldset-password">
                  <label htmlFor="description">Corrective Action</label>
                  <textarea
                    name="description"
                    rows={10}
                    cols={30}
                    placeholder="Suggest corrective action"
                    id='description'
                    value={description}
                    onChange={
                      (event) => {
                        setDescription(event.target.value);
                      }
                    }
                  />
                </fieldset>
                {/* 
                Upload photo feature to be added later
                <fieldset className="fieldset-password">
                  <label htmlFor="description">Upload photo</label>
                  <input type="file" id="myFile" name="filename" />
                </fieldset> */}
                <button id="submit" type='submit'>Submit</button>
              </div>
            </form>
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
          <div className={styles.detailsFooter}>
            <p>Semenyih, Selangor Darul Ehsan</p>
            <p>Email: muhammadaizadr@gmail.com</p>
            <p>Tel: 6013-8804450</p>
            <p>© 2021 Aizad Ramli. All Rights Reserved.</p>
          </div>
        </footer>
      </>
    </div>
  )
}

RequestForm.propTypes = {

}

export default RequestForm