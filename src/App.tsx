import React, { useState } from 'react';
import CustomerList from './CustomerList';
import CustomerDetails from './CustomerDetails';
import { Customer } from './Customer';
import { customers } from './mockData'; // Importing mock dataset
import './App.css';
function App() {
  const [selectedCustomerId, setSelectedCustomerId] = useState<number | null>(null);

  // Find the selected customer object based on the selectedCustomerId
  const selectedCustomer = customers.find(customer => customer.id === selectedCustomerId);

  return (
    <div className="app">
      <CustomerList
        customers={customers}
        selectedCustomerId={selectedCustomerId}
        onSelectCustomer={setSelectedCustomerId}
      />
      {/* Ensure selectedCustomer is defined before passing it to CustomerDetails */}
      {selectedCustomer && <CustomerDetails customer={selectedCustomer} />}
    </div>
  );
}

export default App;
