const express = require('express');
const axios = require('axios'); 

const app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
  try {
    // Fetch data from the API 
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const posts = response.data; 

    // Render the index view of ejs
    res.render('index', { posts });
  } catch (error) {
    res.status(500).send('Error fetching data');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
