import { useState, useEffect } from 'react';
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

  const indexOfLastCustomer = currentPage * customersPerPage;
  const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;
  const currentCustomers = customers.slice(indexOfFirstCustomer, indexOfLastCustomer);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error!</p>;
  }

  return (
    <div>
      {currentCustomers.map(c => (
        <Customer key={c.id} customer={c} />
      ))}
      <Pagination
        customersPerPage={customersPerPage}
        totalCustomers={customers.length}
        paginate={paginate}
      />
    </div>
  );
}

export default CustomersList;
