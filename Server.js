const express = require('express');
const axios = require('axios'); 
const cors=require('cors')
const app = express();
const PORT = 5000;


app.use(cors());
app.get('/api/data', async (req, res) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
