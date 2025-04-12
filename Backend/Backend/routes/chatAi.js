import express from "express";
import { GoogleGenerativeAI } from "@google/generative-ai";



;
const router = express.Router();
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

router.post("/", async (req, res) => {
  const userMessage = req.body.message;

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const result = await model.generateContent(
        `You are a helpful assistant for Jamia Millia Islamia (JMI) students. Please respond to this query: ${userMessage}`
      );

    const response = await result.response;

    res.json({ reply: response });
  } catch (err) {
    console.error("Gemini API Error:", err.message);
    res.status(500).json({ error: "Something went wrong with Gemini API." });
  }
});

router.get("/", async (req, res) => {
    try {
        // Simple test API call (for instance, a metadata call)
        const response = await genAI.getMetadata(); // Adjust this method if necessary
        res.json(response); // See the response structure
      } catch (err) {
        console.error("API Error:", err.message);
        res.status(500).json({ error: "Failed to fetch metadata." });
      }
    });

export default router;