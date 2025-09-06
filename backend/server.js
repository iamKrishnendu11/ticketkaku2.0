import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import rateLimit from 'express-rate-limit';
import connectDB from './src/db/db.js';
import { clerkMiddleware } from '@clerk/express'
import { serve } from "inngest/express";
import { inngest, functions } from "./src/inngest/inngest.js";

// import routes
import museumRoutes from './src/routes/museums.route.js';
import chatbotRoutes from './src/routes/chatbot.route.js';
import bookingRoutes from './src/routes/bookings.route.js';
import paymentRoutes from './src/routes/payments.route.js';
import userRoutes from './src/routes/users.route.js';

const app = express();

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

// Middleware
app.use(limiter);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(clerkMiddleware());


//Routes
app.use('/api/museums', museumRoutes);
app.use('/api/chatbot', chatbotRoutes);
app.use('/api/bookings', requireAuth(), bookingRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/users', requireAuth(), userRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('MongoDB connection error:', err));

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


app.get('/', (req, res) => {
  res.send( 'Hello from the backend!' );
});

