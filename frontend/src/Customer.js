function Customer({ customer }) {
  return (
    <div>
      <h3>{customer.name}</h3>
      <p>Age: {customer.age}</p>
      <p>Phone: {customer.phone}</p>
      <p>Location: {customer.location}</p>
      <p>Date: {customer.date}</p>
      <p>Time: {customer.time}</p>
    </div>
  );
}

export default Customer;
