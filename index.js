const express = require('express');
const { CopilotClient } = require('@github/copilot-sdk');

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

app.post('/api/chat', async (req, res) => {
  try {
    const { prompt } = req.body;
    res.json({ reply: "Hello from your GitHub Copilot SDK agent backend!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server listening on port ${port}`);
});



