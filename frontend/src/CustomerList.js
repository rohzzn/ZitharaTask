import { useState, useEffect } from 'react';
import API from './API';  
import Customer from './Customer';

function CustomersList() {

  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error!</p>
  }

  return (
    <div>
      {customers.map(c => (
        <Customer key={c.id} customer={c} />
      ))}
    </div>
  );

}

export default CustomersList;