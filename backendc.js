const Ticket = require('../models/Ticket');

exports.createTicket = async (req, res) => {
  try {
    const ticket = new Ticket(req.body);
    await ticket.save();
    res.status(201).json(ticket);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find();
    res.status(200).json(tickets);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateTicketStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const ticket = await Ticket.findByIdAndUpdate(id, { status, updatedAt: Date.now() }, { new: true });
    res.status(200).json(ticket);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteTicket = async (req, res) => {
  try {
    await Ticket.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Ticket deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
