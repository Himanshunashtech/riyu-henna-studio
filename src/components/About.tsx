
import { Award, Clock, Heart, Palette } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Creative Designs",
      description: "Unique patterns tailored to your style and occasion"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Professional Quality",
      description: "High-quality henna and precise application techniques"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Timely Service",
      description: "Punctual and reliable for all your special events"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Passion Driven",
      description: "Each design created with love and attention to detail"
    }
  ];

  return (
    <section id="about" className="section-padding bg-surface">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <div className="relative animate-scale-in">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1596003906949-67221c37965c?w=300&h=400&fit=crop&crop=center"
                alt="Detailed henna mandala design"
                className="w-full h-64 object-cover rounded-lg shadow-warm"
              />
              <img
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop&crop=center"
                alt="Traditional henna pattern on palm"
                className="w-full h-64 object-cover rounded-lg shadow-warm mt-8"
              />
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 card-elevated p-6 text-center">
              <div className="text-3xl font-bold text-primary">5+</div>
              <div className="text-sm text-foreground-subtle">Years Experience</div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-accent font-medium uppercase tracking-wider">About Riya</p>
              <h2 className="heading-secondary text-foreground">
                Bringing Art to Life
                <span className="text-gradient-primary"> Through Henna</span>
              </h2>
              <p className="text-body">
                Welcome to my world of henna artistry! I'm Riya, a passionate henna artist dedicated to creating 
                beautiful, meaningful designs for life's special moments. With over 5 years of experience, 
                I specialize in both traditional and contemporary henna styles.
              </p>
              <p className="text-body">
                My journey began with a love for intricate patterns and cultural art forms. Today, I bring that 
                same passion to every client, ensuring each design tells a unique story and celebrates your 
                individual style.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-surface-elevated transition-colors duration-300"
                >
                  <div className="bg-primary/10 text-primary p-3 rounded-lg flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-foreground-subtle">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* YouTube Channel Promotion */}
            <div className="card-elevated p-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">▶</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">Follow My YouTube Channel</h3>
                  <p className="text-sm text-foreground-subtle mb-3">
                    Watch tutorials, behind-the-scenes content, and design inspiration on Riyu.Riya
                  </p>
                  <a 
                    href="https://youtube.com/@riyuhennaartist"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-sm px-4 py-2"
                  >
                    Subscribe Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
