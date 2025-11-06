// Load environment variables
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { Resend } = require("resend");

const app = express();
const port = process.env.PORT;

// Middleware
app.use(express.json());
app.use(cors());

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

// Test route
app.get("/", (req, res) => {
  res.json({ message: "Email server is running with Resend!" });
});

app.post("/send-email", async (req, res) => {
  console.log("📨 Received email request:", req.body);

  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const response = await resend.emails.send({
      from: "Portfolio Website <onboarding@resend.dev>", // Must be a verified domain or default
      to: process.env.MAIL_TO,  // your receiving email
      reply_to: email,
      subject: `Contact Form: ${subject} from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    console.log("✅ Email sent via Resend:", response);
    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("❌ RESEND ERROR:", error);
    res.status(500).json({
      message: "Failed to send message.",
      error: error.message,
    });
  }
});

// Start server
app.listen(port, () => {
  console.log(`🚀 Email backend running at http://localhost:${port}`);
  console.log(`📨 Emails will be sent to: ${process.env.MAIL_TO}`);
});