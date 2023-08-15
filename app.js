const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Endpoint to receive Zendesk webhook for ticket creation
app.post("https://zendesk-monitor.onrender.com/zendesk/ticket-created", (req, res) => {
  const ticketData = req.body;

  // For demonstration, we'll just log the ticket data.
  console.log("Received ticket data:", ticketData);

  res.status(200).send("Received!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
