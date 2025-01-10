import React, { useState } from "react";
import { Button, TextField, Typography, Box, Container } from "@mui/material";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    // Redirecting to Gmail with pre-filled values
    const mailtoLink = `mailto:thejaspottayilprasad@gmail.com?subject=Contact%20Us%20Message&body=Name:%20${name}%0AEmail:%20${email}%0AMessage:%20${message}`;
    window.location.href = mailtoLink;
  };

  return (
    <section className="contact">
      <Container maxWidth="sm">
        <Box className="contact-form">
          <Typography variant="h4" className="form-title">
            Contact Us
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Your Name"
              variant="outlined"
              fullWidth
              required
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="form-field"
            />
            <TextField
              label="Your Email"
              variant="outlined"
              fullWidth
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="form-field"
            />
            <TextField
              label="Your Message"
              variant="outlined"
              fullWidth
              required
              multiline
              rows={4}
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="form-field"
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="submit-button"
            >
              Send Message
            </Button>
          </form>
        </Box>
      </Container>
    </section>
  );
};

export default Contact;
