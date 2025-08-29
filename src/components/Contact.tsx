import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  //   const { name, value } = e.target;
  //   setFormData(prev => ({
  //     ...prev,
  //     [name]: value
  //   }));
  // };
const content = {

      title: 'Contact & Visit Information',
      form: {
        title: 'Send us a Message',
        name: 'Full Name',
        email: 'Email Address',
        phone: 'Phone Number',
        subject: 'Subject',
        message: 'Your Message',
        submit: 'Send Message',
        success: 'Thank you! Your message has been sent successfully.'
      },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    emailjs.send(
    'service_auhgop8',
    'template_2g7yp8a',
    {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message
    },
    'ksyw-ZBxFzVMjFymL'
  )
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you! Get in touch with our   friendly team for any questions, suggestions, or feedback.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-lg flex-shrink-0">
                    <MapPin className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Address</h3>
                    <p className="text-gray-600">
                      Bus Stand Opposite<br />
                Melmalayanur(PT&TK)<br />
                Villupuram(DT),604204
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-lg flex-shrink-0">
                    <Phone className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Phone</h3>
                     <p>
   
    <a href="tel:+919443541763" className="text-emerald-600 hover:underline">
      +91 94435 41763
    </a>
  </p>
                    <p className="text-sm text-gray-500">Customer Service: 7 AM - 9 PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-lg flex-shrink-0">
                    <Mail className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Email</h3>
                    <p>

    <a
      href="mailto:angalammanstore2025@gmail.com"
      className="text-emerald-600 hover:underline"
    >
      angalammanstore2025@gmail.com
    </a>
  </p>
                    <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-lg flex-shrink-0">
                    <Clock className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Store Hours</h3>
                    <div className="text-gray-600 text-sm space-y-1">
                      <p>Mon-Thu: 7 AM - 10 PM</p>
                      <p>Fri-Sat: 7 AM - 11 PM</p>
                      <p>Sunday: 8 AM - 9 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}


<div className="bg-white rounded-xl shadow-lg p-8">
  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
    <MapPin className="h-5 w-5 text-emerald-600" />
    Find Us
  </h3>

  <div className="w-full h-64 md:h-[450px] rounded-lg overflow-hidden shadow-inner">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d474862.17918115127!2d78.71603628906253!3d12.340162500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baccc67b769eff9%3A0x5cb5b3f3ad1325ff!2sAngalamman%20Maligai!5e1!3m2!1sen!2sin!4v1756112360582!5m2!1sen!2sin"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div>

          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                   {content.form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {content.form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    {content.form.phone}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    {content.form.subject}
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors bg-white"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="products">Product Question</option>
                    <option value="complaint">Complaint</option>
                    <option value="suggestion">Suggestion</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                 {content.form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors resize-vertical"
                  placeholder="Please tell us how we can help you..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-600 text-white font-semibold py-4 px-6 rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center transform hover:scale-105 shadow-lg"
              >
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                Fields marked with * are required. We typically respond within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;