const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/token', async (req, res) => {
    const apiKey = req.headers['x-api-key'];

    if (!apiKey || apiKey !== process.env.API_KEY) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    try {
        const response = await axios.post(`${process.env.NOWPAYMENTS_API_URL}/auth`, {
            email: process.env.NOWPAYMENTS_EMAIL,
            password: process.env.NOWPAYMENTS_PASSWORD
        });

        const token = response.data.token;
        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create bearer token' });
    }
});

module.exports = router;
