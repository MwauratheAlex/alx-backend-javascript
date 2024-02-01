import express from 'express';
import mapRoutes from './routes/index';

const port = 1245;
const app = express();
mapRoutes(app);

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});

export default app;
