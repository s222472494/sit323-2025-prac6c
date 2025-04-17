const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Function to validate input numbers
const validateNumbers = (num1, num2, res) => {
    
    // Checks if both num1 and num2 exist
    if (num1 === undefined || num2 === undefined) {
        return res.status(400).json({ error: "Missing required numbers: Both num1 and num2 must be provided" });
    }
    
    // Checks if both values are actually numbers (not text or other invalid values)
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: "Invalid input: num1 and num2 must be valid numbers" });
    }

    // If both checks pass, numbers are valid
    return null; 
};

// Addition Endpoint
app.get('/add', (req, res) => {
    const num1 = req.query.num1;
    const num2 = req.query.num2;

    // Validate both numbers
    if (validateNumbers(num1, num2, res)) return;

    res.json({ result: Number(num1) + Number(num2) });
});

// Subtraction Endpoint
app.get('/subtract', (req, res) => {
    const num1 = req.query.num1;
    const num2 = req.query.num2;

    // Validate both numbers
    if (validateNumbers(num1, num2, res)) return;

    res.json({ result: Number(num1) - Number(num2) });
});

// Multiplication Endpoint
app.get('/multiply', (req, res) => {
    const num1 = req.query.num1;
    const num2 = req.query.num2;

    // Validate both numbers
    if (validateNumbers(num1, num2, res)) return;

    res.json({ result: Number(num1) * Number(num2) });
});

// Division Endpoint
app.get('/divide', (req, res) => {
    const num1 = req.query.num1;
    const num2 = req.query.num2;

    // Validate both numbers
    if (validateNumbers(num1, num2, res)) return;

    // Checks to see if second number is 0 and throws fault if so
    if (Number(num2) === 0) {
        return res.status(400).json({ error: "Cannot divide by zero" });
    }

    res.json({ result: Number(num1) / Number(num2) });
});


// 404 Error for unknown routes
app.use((req, res) => {
    res.status(404).json({ error: "Endpoint not found" });
});


// Global Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Internal Server Error" });
});


// Starts the server
app.listen(port, () => {
    console.log(`Calculator microservice running at http://localhost:${port}`);
});


// Add http://localhost:3000/add?num1=10&num2=5
// Subtraction http://localhost:3000/subtract?num1=10&num2=5
// Multiplication http://localhost:3000/multiply?num1=10&num2=5
// Division http://localhost:3000/divide?num1=10&num2=5