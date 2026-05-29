const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from the Node.js Demo App! CI/CD pipeline is working.');
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Only start the server when run directly, so tests can import the app
// without opening a port.
if (require.main === module) {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app;
