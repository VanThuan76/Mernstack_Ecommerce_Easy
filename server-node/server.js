import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import http from "http";
import session from 'express-session';
import { connectDB } from "./config/db/db.js";
import { errorHandler } from "./middlewares/errorMiddleware.js";
import UserRouter from "./routers/UserRouter.js";
import ProductRouter from "./routers/ProductRouter.js";
import ChatRouter from "./routers/ChatRouter.js";
import { ConnectSocket } from "./config/socket/socket.js";
import SelectListrouter from "./routers/SelectListRouter.js";
import ListTypeProductRouter from "./routers/ListTypeProductRouter.js";
import OrderRouter from "./routers/OrderRouter.js";
import PaymentRouter from "./routers/PaymentRouter.js";
import passport from "./controllers/PassportController.js";
import { sendEmail } from "./untils/untils.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
const server = http.createServer(app);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(
  session({
    secret: 'sales_phone',
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());

ConnectSocket(server);
connectDB();

app.get("", (req, res) => {
  res.send("API is running>>>");
});
// app.post('/api/send-email', sendEmail);
app.use("/api/users", UserRouter);
app.use("/api/products", ProductRouter);
app.use("/api/chats", ChatRouter);
app.use("/api/select-list", SelectListrouter);
app.use("/api/payment", PaymentRouter);
app.use("/api/type-products", ListTypeProductRouter);
app.use("/api/orders", OrderRouter);
app.get("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || "sb");
});
app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);
app.get('/auth/google/callback', passport.authenticate('google', {
  successRedirect: 'http://localhost:3000',
  failureRedirect: 'http://localhost:3000/login'
}));

app.use(errorHandler);

server.listen(PORT, () => {
  console.log(`Server running in http://localhost/${PORT}`);
});
