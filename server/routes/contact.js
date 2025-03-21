const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// Submit contact form
router.post('/', async (req, res) => {
  try {
    console.log('Received contact form data:', req.body);
    
    // Validate required fields
    const { name, email, subject, message } = req.body;
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        message: 'All fields are required',
        missingFields: Object.entries({ name, email, subject, message })
          .filter(([_, value]) => !value)
          .map(([key]) => key)
      });
    }

    // Create and save contact
    const contact = new Contact(req.body);
    const savedContact = await contact.save();
    console.log('Saved contact:', savedContact);

    res.status(201).json({
      message: 'Message saved successfully',
      contact: savedContact
    });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(400).json({ 
      message: 'Failed to save message',
      error: error.message 
    });
  }
});

// Get all contact submissions (optional, for admin use)
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router; 