require('dotenv').config();
const express = require('express')
const productsRouter = require('./src/routes/products/productRoutes')
const AuthRoutes = require('./src/routes/users/AuthRoutes');
const AdminRoutes = require('./src/routes/admin/AdminRoutes');
const helmet = require("helmet");
const cors = require("cors");
const compression = require('compression');
const CartRoutes = require('./src/routes/cart/CartRoutes');

const app = express();

const allowedOrigins = [
    process.env.CLIENT_URL,
    "http://localhost:5173",
    "http://localhost:3000",
    "http://localhost:4173"
].filter(Boolean);

const corsOptions = {
    origin: (origin, callback) => {
        if (!origin) return callback(null, true);
        const isAllowed = allowedOrigins.some(allowed => origin === allowed || origin === allowed.replace(/\/$/, ''))
            || origin.endsWith('.vercel.app');

        if (isAllowed || process.env.NODE_ENV !== 'production') {
            callback(null, true);
        } else {
            callback(new Error('CORS policy violation: Origin not allowed'));
        }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
app.use(helmet());
app.use(compression());

app.use(express.json());

app.use("/products", productsRouter)

app.use("/auth", AuthRoutes)

app.use("/admin", AdminRoutes)

app.use("/cart", CartRoutes)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use((err, req, res, next) => {
    console.log(err);
    
    res.status(500).json({
        success: false,
        message: err.message
    })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})