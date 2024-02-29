import { useState, useEffect } from 'react';
import API from './API'; 
import Customer from './Customer';

function CustomersList() {

  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    API.getCustomers().then(res => setCustomers(res.data));
  }, []);

  return (
    <div>
      {customers.map(c => (
        <Customer key={c.id} customer={c} />
      ))}
    </div>
  );

}

export default CustomersList;