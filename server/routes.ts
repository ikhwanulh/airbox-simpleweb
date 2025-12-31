import type { Express } from "express";
import { createServer, type Server } from "http";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const { fullName, company, email, message } = req.body;
      
      console.log("Contact form submission:", { fullName, company, email, message });
      
      const recipientEmail = process.env.CONTACT_EMAIL || "ikhwanul.h@gmail.com";
      
      if (process.env.SMTP_USER && process.env.SMTP_PASS) {
        await transporter.sendMail({
          from: process.env.SMTP_USER,
          to: recipientEmail,
          subject: `${company}-${fullName}`,
          text: message,
          replyTo: email,
        });
      } else {
        console.log("SMTP not configured. Email would be sent to:", recipientEmail);
        console.log(`Subject: ${company}-${fullName}`);
        console.log(`Body: ${message}`);
      }
      
      res.json({ 
        success: true, 
        message: "Message received successfully!" 
      });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to send message" 
      });
    }
  });

  // AI Chat endpoint (placeholder for future AI integration)
  app.post("/api/chat", async (req, res) => {
    try {
      const { message } = req.body;
      
      // TODO: Implement AI chat logic
      console.log("Chat message:", message);
      
      res.json({ 
        response: "Thank you for your message. Our team will respond shortly." 
      });
    } catch (error) {
      console.error("Chat error:", error);
      res.status(500).json({ 
        error: "Failed to process chat message" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
