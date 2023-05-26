import app from './app';
import connectDB from './utils/connect';

const PORT = 9001;

app.listen(PORT, async () => {
  console.log(`Server init at http://localhost:${PORT}`);
  await connectDB()
    .then(() => console.log('connection succesfully'))
    .catch(err => console.log(err));
});
