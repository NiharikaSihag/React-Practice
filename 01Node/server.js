// import app from "./app.js";  // Note the .js extension is required with ES modules
const app = require('./app.js')
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  // If you need database connection, uncomment and implement:
  // try {
  //   await connectDB();
  //   console.log('✅ Database connected');
  // } catch (error) {
  //   console.error('❌ Database connection failed:', error);
  //   process.exit(1);
  // }

  console.log('🚀 Starting server...');
  await connectDb();
 app.listen(5000, () => {
    console.log(`✅ Server running at http://localhost:5000`);
  });
};

startServer();