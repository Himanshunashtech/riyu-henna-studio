
import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Youtube, Instagram, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleGmailSubmit = () => {
    const subject = `Henna Service Booking - ${formData.service}`;
    const body = `
Hello Riya,

I would like to book a henna service with the following details:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service: ${formData.service}
Preferred Date: ${formData.date}

Message:
${formData.message}

Thank you!
    `.trim();

    const gmailUrl = `https://mail.google.com/mail/?view=cm&to=riyuhennaartist@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, '_blank');
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["+91 98765 43210", "Available 9 AM - 8 PM"],
      action: "tel:+919876543210"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["riyuhennaartist@gmail.com", "Response within 24 hours"],
      action: "mailto:riyuhennaartist@gmail.com"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      details: ["Mumbai, Maharashtra", "Home service available"],
      action: null
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Working Hours",
      details: ["Mon - Sun: 9 AM - 8 PM", "Appointment based"],
      action: null
    }
  ];

  const services = [
    "Bridal Henna",
    "Party & Events",
    "Arabic Designs",
    "Traditional Patterns",
    "Kids Special",
    "Workshop Classes"
  ];

  return (
    <section id="contact" className="section-padding bg-surface">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-medium uppercase tracking-wider mb-4">Get In Touch</p>
          <h2 className="heading-secondary text-foreground mb-6">
            Let's Create Something
            <span className="text-gradient-primary"> Beautiful Together</span>
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            Ready to book your henna session? I'd love to hear about your vision and create a design 
            that's perfect for your special occasion.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="card-elevated p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">Book Your Session</h3>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              {/* Name & Email */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300"
                    required
                  />
                </div>
              </div>

              {/* Phone & Service */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                    Service Type *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300"
                    required
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Date */}
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-foreground mb-2">
                  Preferred Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Additional Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300 resize-none"
                  placeholder="Tell me more about your event, design preferences, or any special requests..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="button"
                onClick={handleGmailSubmit}
                className="w-full btn-primary flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send via Gmail</span>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="card-elevated p-6 hover:shadow-glow transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 text-primary p-3 rounded-lg flex-shrink-0">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className={`${idx === 0 ? 'text-foreground-muted font-medium' : 'text-foreground-subtle text-sm'}`}>
                          {info.action && idx === 0 ? (
                            <a href={info.action} className="hover:text-primary transition-colors duration-300">
                              {detail}
                            </a>
                          ) : (
                            detail
                          )}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media Links */}
            <div className="card-elevated p-6">
              <h3 className="font-semibold text-foreground mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                <a
                  href="https://youtube.com/@riyuhennaartist"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-500 text-white p-3 rounded-lg hover:bg-red-600 transition-colors duration-300"
                >
                  <Youtube className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com/riyuhennaartist"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-colors duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition-colors duration-300"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* YouTube Channel Highlight */}
            <div className="card-elevated p-6 gradient-primary text-primary-foreground">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <Youtube className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">RiyuHennaArtist</h3>
                  <p className="opacity-90">@riyuhennaartist</p>
                </div>
              </div>
              <p className="mb-4 opacity-90">
                Subscribe to my YouTube channel for henna tutorials, design inspiration, and behind-the-scenes content!
              </p>
              <a
                href="https://youtube.com/@riyuhennaartist"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-primary px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300"
              >
                Subscribe Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
