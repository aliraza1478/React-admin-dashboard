// Products.jsx
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
const fetchProducts = () => {
  return [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 999.99, stock: 'In Stock', description: 'High-performance laptop with 16GB RAM and 512GB SSD.' },
    { id: 2, name: 'Smartphone', category: 'Electronics', price: 699.99, stock: 'In Stock', description: 'Latest model smartphone with a stunning camera.' },
    { id: 3, name: 'Headphones', category: 'Accessories', price: 199.99, stock: 'Out of Stock', description: 'Noise-cancelling over-ear headphones.' },
    { id: 4, name: 'Smartwatch', category: 'Wearables', price: 299.99, stock: 'In Stock', description: 'Stylish smartwatch with health tracking features.' },
    { id: 5, name: 'Bluetooth Speaker', category: 'Accessories', price: 149.99, stock: 'In Stock', description: 'Portable Bluetooth speaker with excellent sound quality.' },
  ];
};

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productsData = fetchProducts();
    setProducts(productsData);
  }, []);

  return (
    <Paper className= "dark:bg-gray-900 dark:text-white" sx={{ padding: 2 }}>
      <Typography className= "dark:bg-gray-900 dark:text-white" variant="h6" gutterBottom>
        Products
      </Typography>
      <TableContainer className= "dark:bg-gray-900 dark:text-white" component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className= "dark:bg-gray-900 dark:text-white">Product ID</TableCell>
              <TableCell className= "dark:bg-gray-900 dark:text-white">Name</TableCell>
              <TableCell className= "dark:bg-gray-900 dark:text-white">Category</TableCell>
              <TableCell className= "dark:bg-gray-900 dark:text-white">Price</TableCell>
              <TableCell className= "dark:bg-gray-900 dark:text-white">Stock Status</TableCell>
              <TableCell className= "dark:bg-gray-900 dark:text-white">Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell className= "dark:bg-gray-900 dark:text-white">{product.id}</TableCell>
                <TableCell className= "dark:bg-gray-900 dark:text-white">{product.name}</TableCell>
                <TableCell className= "dark:bg-gray-900 dark:text-white">{product.category}</TableCell>
                <TableCell className= "dark:bg-gray-900 dark:text-white">${product.price.toFixed(2)}</TableCell>
                <TableCell className= "dark:bg-gray-900 dark:text-white">{product.stock}</TableCell>
                <TableCell className= "dark:bg-gray-900 dark:text-white">{product.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default Products;
