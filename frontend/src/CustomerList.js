import React, { useState, useEffect } from 'react';
import API from './API';  
import Customer from './Customer';
import Pagination from './Pagination';

function CustomersList() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [customersPerPage] = useState(20);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await API.getCustomers();
        setCustomers(res.data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  // Calculate indexes for pagination
  const indexOfLastCustomer = currentPage * customersPerPage;
  const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;
  const currentCustomers = customers.slice(indexOfFirstCustomer, indexOfLastCustomer);

  // Function to handle pagination
  const paginate = pageNumber => setCurrentPage(pageNumber);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error!</p>;
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Age</th>
            <th>Phone</th>
            <th>Location</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {currentCustomers.map((customer, index) => (
            <Customer key={index} customer={customer} />
          ))}
        </tbody>
      </table>
      <Pagination
        customersPerPage={customersPerPage}
        totalCustomers={customers.length}
        paginate={paginate}
      />
    </div>
  );
}

export default CustomersList;
