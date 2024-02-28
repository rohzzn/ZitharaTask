const { Router } = require('express');

const router = Router();

router.get('/customers', getCustomers); 
router.post('/customers', addCustomer);

module.exports = router;