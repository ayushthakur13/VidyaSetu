const express = require('express');
const cors = require('cors');  // Import cors
const app = express();

// Enable CORS for all origins
app.use(cors());

app.use(express.json());

// In-memory storage for questions
// Hardcode some sample questions for testing
let questions = [
    
];

// Route to handle adding questions
app.post('/questions', (req, res) => {
    try {
        const question = req.body.question;
        if (!question) {
            return res.status(400).json({ message: 'Question is required' });
        }

        // Add new question to the existing questions array
        questions.push({ id: questions.length + 1, question });

        res.status(200).json({ message: 'Question submitted successfully!' });
    } catch (error) {
        console.error('Error saving question:', error);
        res.status(500).json({ message: 'An error occurred while submitting your question.' });
    }
});


// Route to get all questions
app.get('/questions', (req, res) => {
    try {
        res.status(200).json({ questions });
    } catch (error) {
        console.error('Error fetching questions:', error);
        res.status(500).json({ message: 'Failed to fetch questions.' });
    }
});


// Start server
app.listen(5000, () => console.log('Server running on port 5000'));
