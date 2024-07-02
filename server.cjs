const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Replace <username>, <password>, and <dbname> with your actual database user and database name
const mongoUri = "mongodb+srv://obedomwenga:4o8cH91d2Z6aXHq4@cluster0.3p2lcl5.mongodb.net/evoting?retryWrites=true&w=majority";

mongoose.connect(mongoUri)
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

const userSchema = new mongoose.Schema({
    name: String,
    id: String,
    email: String,
    phoneNumber: String,
});

const User = mongoose.model('User', userSchema);

app.post('/register', async (req, res) => {
    const { name, id, email, phoneNumber } = req.body;
    const user = new User({ name, id, email, phoneNumber });
    await user.save();
    res.send('User registered');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
