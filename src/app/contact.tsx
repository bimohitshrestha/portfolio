import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { Snackbar, Alert, SnackbarCloseReason } from "@mui/material";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setOpenSnackbar(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleCloseSnackbar = (
    event: React.SyntheticEvent | Event, // Accept both types of events
    reason: SnackbarCloseReason // Use SnackbarCloseReason for reason
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <div className="max-w-6xl mx-auto p-6" id="contact">
      <div className="bg-white rounded-lg shadow-sm flex flex-col md:flex-row">
        <div className="md:w-2/5 p-6 md:p-8 bg-blue-50 rounded-t-lg md:rounded-l-lg">
          <div className="sticky top-8">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Get in Touch!
            </h2>
            <p className="text-gray-600 mb-4 text-lg">
              Want to discuss a project, share ideas, or just have a friendly
              chat? Drop me a message or connect with me on social media!
            </p>

            <div className="space-y-4">
              <p className="text-gray-600 mb-4">Find me on:</p>
              <div className="flex flex-col gap-4">
                <a
                  href="https://www.linkedin.com/in/bimohit-shrestha-572405249/"
                  className="flex items-center gap-3 text-blue-500 hover:text-blue-700 transition-colors"
                >
                  <FaLinkedin size={24} />
                  <span className="text-gray-600 hover:text-blue-700">
                    LinkedIn
                  </span>
                </a>
                <a
                  href="https://x.com/ShresthaBimohit"
                  className="flex items-center gap-3 text-blue-500 hover:text-blue-700 transition-colors"
                >
                  <RiTwitterXLine size={24} />
                  <span className="text-gray-600 hover:text-blue-700">
                    Twitter
                  </span>
                </a>
                <a
                  href="https://github.com/bimohitshrestha"
                  className="flex items-center gap-3 text-blue-500 hover:text-blue-700 transition-colors"
                >
                  <FaGithub size={24} />
                  <span className="text-gray-600 hover:text-blue-700">
                    GitHub
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-3/5 p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Your Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Your Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="What would you like to discuss?"
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          Message sent successfully!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default ContactForm;
