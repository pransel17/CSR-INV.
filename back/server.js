const express = require("express");
const mysql = require("mysql");
const bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "student_info"
});

db.connect(err => {
    if (err) {
        console.error("Database connection failed:", err);
        return;
    }
    console.log("Connected to database");
});

// Login route
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const query = `SELECT * FROM users WHERE email = ?`;

    db.query(query, [email], async (err, results) => {
        if (err) return res.status(500).json({ success: false, message: "Database error" });

        if (results.length === 0) {
            return res.status(401).json({ success: false, message: "User not found" });
        }

        const user = results[0];
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({ success: false, message: "Incorrect password" });
        }

        console.log("User logged in:", user.email, "Role:", user.role); // Debug log

        res.json({ success: true, role: user.role });
    });
});

app.listen(3000, () => console.log("Server running on port 3000"));
