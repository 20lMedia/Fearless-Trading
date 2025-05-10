const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

app.post('/api/send-email', async (req, res) => {
    const { to, subject, text } = req.body;
    
    // Configure your email service
    const transporter = nodemailer.createTransport({
        // Your email service configuration
    });
    
    try {
        await transporter.sendMail({
            from: 'your@email.com',
            to,
            subject,
            text
        });
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ error: 'Failed to send email' });
    }
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});