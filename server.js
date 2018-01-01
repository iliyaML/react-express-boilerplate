const express = require('express');
const app = express();

const PORT = 5000;

// API Handler
app.get('/api/users', (req, res) => {
    const users = [
        {
            id: 1,
            firstName: 'John',
            lastName: 'Doe'
        },
        {
            id: 2,
            firstName: 'Mary',
            lastName: 'Jane'
        }
    ];

    // Respond with JSON
    res.json(users);
});

// Listen on PORT
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));