// Load environment variables from .env file
require("dotenv").config();

const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5002;

// Middleware to parse JSON bodies
app.use(express.json());

// Configure CORS to allow requests from your React frontend
const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:5173",
  "https://portfolio-flame-one-f4bqj8qkzh.vercel.app/", // Your Vercel frontend URL
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 204,
  })
);

// Test endpoint to verify server is running
app.get("/", (req, res) => {
  res.json({ message: "Email server is running!" });
});

// Create a Nodemailer transporter using environment variables
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Test transporter configuration on startup
transporter.verify((error, success) => {
  if (error) {
    console.log("❌ Email configuration error:", error);
  } else {
    console.log("✅ Email server is ready to send messages");
  }
});

// Endpoint to send email
app.post("/send-email", async (req, res) => {
  console.log("📨 Received email request:", req.body);

  const { name, email, subject, message } = req.body;

  // Basic validation
  if (!name || !email || !subject || !message) {
    console.log("❌ Validation failed: Missing required fields");
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL,
      replyTo: email,
      subject: `Contact Form: ${subject} from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p>You have received a new message from Portfolio website contact form. Below are the details:</p>
        
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully:", info.messageId);
    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("❌ Error sending email:", error);
    res.status(500).json({
      message: "Failed to send message. Please try again later.",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
});

// Error handling middleware
app.use((error, req, res, next) => {
  console.error("Server error:", error);
  res.status(500).json({ message: "Internal server error" });
});

// Start the server
app.listen(port, () => {
  console.log(`🚀 Email backend server running on http://localhost:${port}`);
  console.log(`📧 Using email: ${process.env.EMAIL_USER}`);
  console.log(`📬 Sending to: ${process.env.RECIPIENT_EMAIL}`);
  console.log(
    "🔧 Make sure your .env file has EMAIL_USER and EMAIL_PASS configured"
  );
});