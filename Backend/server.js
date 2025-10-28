import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

// ✅ Connect MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/mailsphere")
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ DB connection error:", err));

// ✅ Schema
const MessageSchema = new mongoose.Schema({
  sender: String,
  recipient: String,
  subject: String,
  body: String,
  time: { type: String, default: new Date().toLocaleString() },
  folder: { type: String, enum: ["inbox", "sent"], default: "inbox" },
  read: { type: Boolean, default: false }
});

const Message = mongoose.model("Message", MessageSchema);

// 📥 Inbox
app.get("/api/messages/inbox", async (req, res) => {
  const inbox = await Message.find({ folder: "inbox" }).sort({ _id: -1 });
  res.json(inbox);
});

// 📤 Sent
app.get("/api/messages/sent", async (req, res) => {
  const sent = await Message.find({ folder: "sent" }).sort({ _id: -1 });
  res.json(sent);
});

// 📨 Compose / Send
app.post("/api/messages/send", async (req, res) => {
  const { to, subject, body } = req.body;

  // Inbox copy
  await Message.create({
    sender: to,
    recipient: "me",
    subject,
    body,
    folder: "inbox"
  });

  // Sent copy
  const sent = await Message.create({
    sender: "me",
    recipient: to,
    subject,
    body,
    folder: "sent"
  });

  res.json(sent);
});

// Toggle read/unread
app.patch("/api/messages/:id/toggle", async (req, res) => {
  const msg = await Message.findById(req.params.id);
  msg.read = !msg.read;
  await msg.save();
  res.json(msg);
});

// Delete
app.delete("/api/messages/:id", async (req, res) => {
  await Message.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

app.listen(5000, () => console.log("🚀 Backend running on port 5000"));
