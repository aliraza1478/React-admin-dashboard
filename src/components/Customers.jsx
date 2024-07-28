// Customers.jsx
import React, { useEffect, useState } from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

// Sample data, replace this with your actual data fetching logic
const fetchCustomers = () => {
  return [
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', registrationDate: '2024-01-15' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210', registrationDate: '2024-02-20' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com', phone: '555-123-4567', registrationDate: '2024-03-05' },
    { id: 4, name: 'Bob Brown', email: 'bob@example.com', phone: '555-987-6543', registrationDate: '2024-04-10' },
    { id: 5, name: 'Charlie Green', email: 'charlie@example.com', phone: '555-654-3210', registrationDate: '2024-05-25' },
  ];
};

const Customers = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const customersData = fetchCustomers();
    setCustomers(customersData);
  }, []);

  return (
    
    <Paper className= "dark:bg-gray-900 dark:text-white"> 
      <Typography className= "dark:bg-gray-900 dark:text-white"  variant="h6" gutterBottom>
        Customers
      </Typography>
      <TableContainer className= "dark:bg-gray-900 dark:text-white"  component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className= "dark:bg-gray-900 dark:text-white">Customer ID</TableCell>
              <TableCell className= "dark:bg-gray-900 dark:text-white">Name</TableCell>
              <TableCell className= "dark:bg-gray-900 dark:text-white">Email</TableCell>
              <TableCell className= "dark:bg-gray-900 dark:text-white" >Phone</TableCell>
              <TableCell className= "dark:bg-gray-900 dark:text-white">Registration Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map((customer) => (
              <TableRow key={customer.id}>
                <TableCell className="dark:bg-gray-900 dark:text-white">{customer.id}</TableCell>
                <TableCell className="dark:bg-gray-900 dark:text-white">{customer.name}</TableCell>
                <TableCell className= "dark:bg-gray-900 dark:text-white">{customer.email}</TableCell>
                <TableCell className= "dark:bg-gray-900 dark:text-white">{customer.phone}</TableCell>
                <TableCell className= "dark:bg-gray-900 dark:text-white">{customer.registrationDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default Customers;
