const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/your-database-name', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));
  app.use(cors({
    origin: 'https://student-management-system-frontend-4cwe.onrender.com'  // Replace with your frontend URL
}));

// Student Schema
const Student = mongoose.model('Student', {
    name: String,
    age: Number,
    course: String
});

// Routes
app.post('/students', async (req, res) => {
    const student = new Student(req.body);
    await student.save();
    res.send(student);
});

app.get('/students', async (req, res) => {
    const students = await Student.find();
    res.send(students);
});

app.get('/students/:id', async (req, res) => {
    const student = await Student.findById(req.params.id);
    res.send(student);
});

app.put('/students/:id', async (req, res) => {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(student);
});

app.delete('/students/:id', async (req, res) => {
    await Student.findByIdAndDelete(req.params.id);
    res.send({ message: 'Student deleted' });
});

// Start server
app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});
