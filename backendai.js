const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  category: { type: String, required: true },
  priority: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, default: 'Open' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Ticket', ticketSchema);
