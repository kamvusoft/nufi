import express from 'express';
import 'dotenv/config';
import path from 'path';
import indexRoute from './middleware';

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(indexRoute);

// Start the express server on the relevant port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});