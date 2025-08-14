
import { Play, Star, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20 lg:pt-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 henna-pattern opacity-30"></div>
      
      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <p className="text-accent font-medium uppercase tracking-wider">Professional Henna Artist</p>
              <h1 className="heading-primary text-gradient-primary">
                Beautiful Henna
                <br />
                <span className="font-script text-5xl md:text-6xl lg:text-7xl">Artistry</span>
              </h1>
              <p className="text-body max-w-lg">
                Transform your special moments with intricate henna designs. From traditional patterns to modern art, 
                I bring creativity and precision to every creation.
              </p>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="bg-accent/20 p-2 rounded-full">
                  <Users className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-bold text-lg">500+</p>
                  <p className="text-sm text-foreground-subtle">Happy Clients</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="bg-accent/20 p-2 rounded-full">
                  <Star className="w-5 h-5 text-accent fill-current" />
                </div>
                <div>
                  <p className="font-bold text-lg">4.9/5</p>
                  <p className="text-sm text-foreground-subtle">Rating</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#portfolio" className="btn-primary">
                View Portfolio
              </a>
              <a 
                href="https://youtube.com/@riyuhennaartist"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center justify-center space-x-2"
              >
                <Play className="w-5 h-5" />
                <span>Watch Videos</span>
              </a>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative animate-float">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative z-10 card-elevated p-4">
                <img
                  src="/lovable-uploads/4b3b6f16-81d8-4b67-99de-02d6e8c35b5f.png"
                  alt="Intricate henna design on hands"
                  className="w-full h-[500px] lg:h-[600px] object-cover rounded-lg"
                />
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full font-bold shadow-glow">
                  ✨ Artist
                </div>
                <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-bold shadow-warm">
                  🎨 Creative
                </div>
              </div>

              {/* Background Decorative Elements */}
              <div className="absolute top-8 -left-8 w-32 h-32 gradient-accent rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 gradient-primary rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground-subtle rounded-full flex justify-center">
          <div className="w-1 h-3 bg-foreground-subtle rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
