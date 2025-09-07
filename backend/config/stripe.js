import Stripe from 'stripe';
import dotenv from 'dotenv';
dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_51QdBKAH2MBJzYZear7qFfYZSnqbj5Gz9sDDv8XxQnzFKb0QJVunhudX1tD4m8ZoWm9HMLkdIGKQF0WXMEykmrVmt0072nSDqyr');

export default stripe;