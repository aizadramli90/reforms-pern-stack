import React, { useEffect, useState } from 'react';
import NavigationBar from '../components/NavigationBar';

const UserDashboard = () => {
  const [data, setData] = useState([]);
  const token = localStorage.getItem('token');
  const BASE_URL = import.meta.env.VITE_BASE_URL; 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/requests`, {
  headers: {
    'Authorization': `Bearer ${token}`
  }
});
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const json = await response.json();
        setData(json.data);
        //console.log(json.data);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <NavigationBar />
      <main className="custom-main-section" style={{ marginBottom: 500 }}>
        <div className="custom-title">
          <h1 className="custom-title-text">My Dashboard</h1>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th className="fw-bold" scope="col">No.</th>
                <th className="fw-bold" scope="col">Request ID</th>
                <th className="fw-bold" scope="col">User ID</th>
                <th className="fw-bold" scope="col">Department</th>
                <th className="fw-bold" scope="col">Maintenance Type</th>
                <th className="fw-bold" scope="col">Issued To</th>
                <th className="fw-bold" scope="col">Title</th>
                <th className="fw-bold" scope="col">Description</th>
                <th className="fw-bold" scope="col">Status</th>
                <th className="fw-bold" scope="col">Created At</th>
                <th className="fw-bold" scope="col">Updated At</th>
              </tr>
            </thead>
            <tbody>
              {data.map((request, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{request.request_id}</td>
                  <td>{request.user_id}</td>
                  <td>{request.department}</td>
                  <td>{request.maintenance_type}</td>
                  <td>{request.issued_to}</td>
                  <td>{request.title}</td>
                  <td>{request.description}</td>
                  <td>{request.status}</td>
                  <td>{new Date(request.created_at).toLocaleString()}</td>
                  <td>{new Date(request.updated_at).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
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
  );
};

export default UserDashboard;