
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Bride",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Riya's work is absolutely stunning! She created the most beautiful bridal henna for my wedding. The attention to detail and the intricate patterns were beyond my expectations. Highly recommended!",
      occasion: "Wedding Ceremony"
    },
    {
      id: 2,
      name: "Anjali Patel",
      role: "Event Organizer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "We hired Riya for our cultural event, and she was fantastic! She managed to create beautiful designs for over 50 guests efficiently. Very professional and talented artist.",
      occasion: "Cultural Festival"
    },
    {
      id: 3,
      name: "Meera Singh",
      role: "Regular Client",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "I've been going to Riya for all my special occasions for the past 2 years. Her Arabic designs are my favorite - bold, elegant, and always perfectly executed. She's the best!",
      occasion: "Multiple Events"
    },
    {
      id: 4,
      name: "Kavya Reddy",
      role: "Mother of Bride",
      image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Riya made my daughter's mehendi ceremony so special. The traditional designs were exquisite and she was so patient with all our family members. Truly gifted artist!",
      occasion: "Mehendi Ceremony"
    },
    {
      id: 5,
      name: "Sneha Joshi",
      role: "College Student",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Love Riya's modern designs! Perfect for college events and parties. She's also teaching me through her YouTube videos - such clear instructions and tips!",
      occasion: "College Functions"
    },
    {
      id: 6,
      name: "Radha Krishnan",
      role: "Festival Enthusiast",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "For every festival, I book Riya! Her traditional patterns are authentic and beautiful. She understands the cultural significance and creates meaningful designs.",
      occasion: "Religious Festivals"
    }
  ];

  return (
    <section id="testimonials" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-medium uppercase tracking-wider mb-4">Client Love</p>
          <h2 className="heading-secondary text-foreground mb-6">
            What My Clients
            <span className="text-gradient-primary"> Say About Me</span>
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            Nothing makes me happier than seeing the joy on my clients' faces. Here's what they have to say 
            about their experience with my henna artistry.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="card-elevated p-6 hover:shadow-glow transition-all duration-300 transform hover:-translate-y-2 relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 -left-3 bg-accent text-accent-foreground p-3 rounded-full">
                <Quote className="w-4 h-4" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-foreground-muted mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-foreground-subtle">{testimonial.role}</p>
                </div>
              </div>

              {/* Occasion Badge */}
              <div className="mt-4 pt-4 border-t border-border-subtle">
                <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                  {testimonial.occasion}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "500+", label: "Happy Clients" },
            { number: "1000+", label: "Designs Created" },
            { number: "100+", label: "Events Covered" },
            { number: "4.9/5", label: "Average Rating" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient-primary mb-2">
                {stat.number}
              </div>
              <div className="text-foreground-subtle font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="card-elevated p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Create Your Story?
            </h3>
            <p className="text-foreground-muted mb-6">
              Join hundreds of satisfied clients and let me create a beautiful henna design that you'll cherish forever.
            </p>
            <a href="#contact" className="btn-primary">
              Book Your Session
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
