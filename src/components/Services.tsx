
import { Calendar, Crown, Heart, Sparkles, Star, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Crown className="w-8 h-8" />,
      title: "Bridal Henna",
      description: "Elaborate and intricate designs for your special day. Complete bridal packages with detailed patterns.",
      features: ["Full hand & feet designs", "Custom patterns", "Touch-up service", "Premium quality henna"],
      price: "Starting from ₹2000",
      popular: true
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Party & Events",
      description: "Perfect for celebrations, festivals, and special occasions. Group bookings available.",
      features: ["Quick designs", "Group discounts", "Event packages", "Flexible timing"],
      price: "Starting from ₹500",
      popular: false
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Arabic Designs",
      description: "Modern Arabic patterns with bold strokes and elegant flows. Contemporary and stylish.",
      features: ["Bold patterns", "Quick application", "Modern styles", "Perfect for beginners"],
      price: "Starting from ₹800",
      popular: false
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Traditional Patterns",
      description: "Classic Indian mehndi designs with cultural significance and intricate detailing.",
      features: ["Cultural motifs", "Detailed work", "Traditional techniques", "Authentic patterns"],
      price: "Starting from ₹600",
      popular: false
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Kids Special",
      description: "Fun and simple designs perfect for children. Safe, quick, and adorable patterns.",
      features: ["Child-friendly designs", "Quick application", "Safe henna", "Cartoon characters"],
      price: "Starting from ₹300",
      popular: false
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Workshop Classes",
      description: "Learn the art of henna! Personal and group classes for beginners to advanced levels.",
      features: ["Personal guidance", "All materials included", "Certificate provided", "Flexible schedule"],
      price: "Starting from ₹1500",
      popular: false
    }
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-medium uppercase tracking-wider mb-4">My Services</p>
          <h2 className="heading-secondary text-foreground mb-6">
            Henna Services for
            <span className="text-gradient-primary"> Every Occasion</span>
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            From intimate celebrations to grand weddings, I offer a complete range of henna services 
            tailored to make your moments unforgettable.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`card-elevated p-8 hover:shadow-glow transition-all duration-300 transform hover:-translate-y-2 relative ${
                service.popular ? 'ring-2 ring-accent ring-opacity-50' : ''
              }`}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-3 left-6 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}

              {/* Icon */}
              <div className="bg-primary/10 text-primary p-4 rounded-xl inline-flex mb-6">
                {service.icon}
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                <p className="text-foreground-subtle">{service.description}</p>

                {/* Features List */}
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-foreground-muted">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="pt-4 border-t border-border-subtle">
                  <p className="text-lg font-bold text-primary">{service.price}</p>
                </div>

                {/* CTA Button */}
                <a 
                  href="#contact"
                  className={`block text-center py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                    service.popular 
                      ? 'btn-primary' 
                      : 'btn-secondary'
                  }`}
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="card-elevated p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Need a Custom Package?
            </h3>
            <p className="text-foreground-muted mb-6">
              Have specific requirements? Let's discuss a personalized package that fits your needs and budget perfectly.
            </p>
            <a href="#contact" className="btn-primary">
              Get Custom Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
