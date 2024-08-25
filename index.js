const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json()); // Ensure this line is present to parse JSON bodies

function highestLowercase(alphabets) {
    const lowercaseLetters = alphabets.filter(ch => ch >= 'a' && ch <= 'z');
    return lowercaseLetters.length ? [lowercaseLetters.sort().pop()] : [];
}

app.post('/bfhl', (req, res) => {
    try {
        const { data } = req.body;
        const numbers = data.filter(item => !isNaN(item));
        const alphabets = data.filter(item => isNaN(item));
        const highestAlpha = highestLowercase(alphabets);

        const response = {
            is_success: true,
            user_id: "your_name_ddmmyyyy",  // Replace with your name and DOB
            email: "your_email@domain.com",  // Replace with your actual email
            roll_number: "YOUR_ROLL_NUMBER", // Replace with your roll number
            numbers: numbers,
            alphabets: alphabets,
            highest_lowercase_alphabet: highestAlpha
        };

        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ is_success: false, message: error.message });
    }
});

app.get('/bfhl', (req, res) => {
    res.status(200).json({ operation_code: 1 });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
