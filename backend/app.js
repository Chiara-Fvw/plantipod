import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to PlantiPod')
})
app.get('/favicon.ico', (req, res) => res.status(204).end());

export default app;