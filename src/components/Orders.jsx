import React, { useEffect, useState, useContext } from 'react';
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
const fetchOrders = () => {
  return [
    { id: 1, customer: 'John Doe', total: 29.99, date: '2024-07-25', status: 'Shipped' },
    { id: 2, customer: 'Jane Smith', total: 59.99, date: '2024-07-24', status: 'Processing' },
    { id: 3, customer: 'Alice Johnson', total: 19.99, date: '2024-07-23', status: 'Delivered' },
    { id: 4, customer: 'Bob Brown', total: 49.99, date: '2024-07-22', status: 'Shipped' },
    { id: 5, customer: 'Charlie Green', total: 99.99, date: '2024-07-21', status: 'Cancelled' },
  ];
};

const Orders = () => {
  const [orders, setOrders] = useState([]);
  

  useEffect(() => {
    const ordersData = fetchOrders();
    setOrders(ordersData);
  }, []);

  return (
    <Paper className= "dark:bg-gray-900 dark:text-white" >    
      <Typography className="dark:bg-gray-900 dark:text-white" variant="h6" gutterBottom>
        Orders
      </Typography>
      <TableContainer className="dark:bg-gray-900 dark:text-white" component={Paper} >
        <Table  >
          <TableHead>
            <TableRow >
              <TableCell className="dark:bg-gray-900 dark:text-white">Order ID</TableCell>
              <TableCell className="dark:bg-gray-900 dark:text-white" >Customer</TableCell>
              <TableCell className="dark:bg-gray-900 dark:text-white">Total</TableCell>
              <TableCell className="dark:bg-gray-900 dark:text-white">Date</TableCell>
              <TableCell className="dark:bg-gray-900 dark:text-white">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody >
            {orders.map((order) => (
              <TableRow  key={order.id}>
                <TableCell className="dark:bg-gray-900 dark:text-white">{order.id}</TableCell>
                <TableCell className="dark:bg-gray-900 dark:text-white">{order.customer}</TableCell>
                <TableCell className="dark:bg-gray-900 dark:text-white" >${order.total.toFixed(2)}</TableCell>
                <TableCell className="dark:bg-gray-900 dark:text-white">{order.date}</TableCell>
                <TableCell className="dark:bg-gray-900 dark:text-white">{order.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default Orders;
