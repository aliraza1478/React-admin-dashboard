import React, { useState } from 'react';
import {
  Paper,
  Typography,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Box,
} from '@mui/material';

const Settings = () => {
  const [username, setUsername] = useState('JohnDoe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [theme, setTheme] = useState('light');
  const [bgColor, setBgColor] = useState('white');

  const handleSave = () => {
    // Save settings logic (e.g., API call)
    alert('Settings saved!');
  };

  const handleThemeChange = (e) => {
    const selectedTheme = e.target.value;
    setTheme(selectedTheme);
    if (selectedTheme === 'light') {
      setBgColor('lightgreen'); // Change this color as desired
    } else {
      setBgColor('darkgray'); // Change this color as desired
    }
  };

  return (
    <Paper className="dark:bg-gray-900 dark:text-white" sx={{ padding: 2 }}>
      <Typography className="dark:bg-gray-900 dark:text-white" variant="h6" gutterBottom>
        Settings
      </Typography>

      <FormControl component="fieldset" sx={{ mb: 2  }} className="dark:bg-gray-900 dark:text-white ">
        <FormLabel className="dark:bg-gray-900 dark:text-white" component="legend">
          User Settings
        </FormLabel>
        <TextField
          label="Username"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          fullWidth
          sx={{ mb: 2 }}
          InputProps={{
            className: 'dark:bg-gray-900 dark:text-white',
          }}
          InputLabelProps={{
            className: 'dark:text-white',
          }}
        />
        <TextField
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          sx={{ mb: 2 }}
          InputProps={{
            className: 'dark:bg-gray-900 dark:text-white',
          }}
          InputLabelProps={{
            className: 'dark:text-white',
          }}
        />
      </FormControl>

    
      <Box>
        <Button className="dark:bg-gray-900 dark:text-white" variant="contained" color="primary" onClick={handleSave}>
          Save Settings
        </Button>
      </Box>
    </Paper>
  );
};

export default Settings;
