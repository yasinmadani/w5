const express = require('express');
const dotenv = require('dotenv');
const walletRoutes = require('./routes/wallet');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/api/wallet', walletRoutes);

app.listen(PORT, () => {
    console.log(`API is running on http://localhost:${PORT}`);
});
