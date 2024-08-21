// server.js
const express = require('express');
const connectDB = require('./config/db');
const menuRoutes = require('./routes/menuRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

connectDB();

app.use(express.json());
app.use('/api/menu', menuRoutes);
app.use('/api/users', userRoutes);

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/menu', async (req, res) => {
    const menuItems = await MenuItem.find();
    res.render('menu', { menuItems });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
