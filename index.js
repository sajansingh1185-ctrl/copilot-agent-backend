import express from 'express';
import cors from 'cors';
import { CopilotClient, approveAll } from '@github/copilot-sdk';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/chat', async (req, res) => {
  try {
    const { prompt } = req.body;
    const client = new CopilotClient();
    await client.start();
    const session = await client.createSession({ onPermissionRequest: approveAll });
    const response = await session.send({ prompt });
    await client.stop();
    res.json({ reply: response });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

