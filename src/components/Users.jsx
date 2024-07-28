// Users.jsx
import React, { useState, useEffect } from 'react';
import {
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

// Sample data, replace this with your actual data fetching logic
const fetchUsers = () => {
  return [
    { id: 1, name: 'John Doe', email: 'johndoe@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'janesmith@example.com', role: 'User' },
    { id: 3, name: 'Alice Johnson', email: 'alicej@example.com', role: 'User' },
  ];
};

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const usersData = fetchUsers();
    setUsers(usersData);
  }, []);

  return (
    <Paper className= "dark:bg-gray-900 dark:text-white" sx={{ padding: 2 }}>
      <Typography  className= "dark:bg-gray-900 dark:text-white"variant="h6" gutterBottom>
        Users List
      </Typography>
      <TableContainer className= "dark:bg-gray-900 dark:text-white" component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className= "dark:bg-gray-900 dark:text-white">ID</TableCell>
              <TableCell className= "dark:bg-gray-900 dark:text-white">Name</TableCell>
              <TableCell className= "dark:bg-gray-900 dark:text-white">Email</TableCell>
              <TableCell className= "dark:bg-gray-900 dark:text-white">Role</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell className= "dark:bg-gray-900 dark:text-white">{user.id}</TableCell>
                <TableCell className= "dark:bg-gray-900 dark:text-white">{user.name}</TableCell>
                <TableCell className= "dark:bg-gray-900 dark:text-white">{user.email}</TableCell>
                <TableCell className= "dark:bg-gray-900 dark:text-white">{user.role}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default Users;
