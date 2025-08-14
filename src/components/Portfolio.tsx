
import { useState } from 'react';
import { ExternalLink, Eye } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Designs' },
    { id: 'bridal', label: 'Bridal' },
    { id: 'arabic', label: 'Arabic' },
    { id: 'traditional', label: 'Traditional' },
    { id: 'modern', label: 'Modern' }
  ];

  const portfolioItems = [
    {
      id: 1,
      category: 'bridal',
      title: 'Intricate Bridal Design',
      image: 'https://images.unsplash.com/photo-1596003906949-67221c37965c?w=400&h=500&fit=crop&crop=center',
      description: 'Elaborate bridal henna with traditional motifs'
    },
    {
      id: 2,
      category: 'arabic',
      title: 'Modern Arabic Pattern',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=500&fit=crop&crop=center',
      description: 'Bold Arabic design with contemporary twist'
    },
    {
      id: 3,
      category: 'traditional',
      title: 'Classic Mandala',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop&crop=center',
      description: 'Traditional mandala with intricate details'
    },
    {
      id: 4,
      category: 'modern',
      title: 'Minimalist Design',
      image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=500&fit=crop&crop=center',
      description: 'Simple and elegant modern pattern'
    },
    {
      id: 5,
      category: 'bridal',
      title: 'Full Hand Bridal',
      image: 'https://images.unsplash.com/photo-1544531585-9847b68c8c86?w=400&h=500&fit=crop&crop=center',
      description: 'Complete bridal henna design'
    },
    {
      id: 6,
      category: 'arabic',
      title: 'Floral Arabic',
      image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=500&fit=crop&crop=center',
      description: 'Arabic style with floral elements'
    },
    {
      id: 7,
      category: 'traditional',
      title: 'Paisley Patterns',
      image: 'https://images.unsplash.com/photo-1599843093846-b0ccda66db1f?w=400&h=500&fit=crop&crop=center',
      description: 'Traditional paisley and vine motifs'
    },
    {
      id: 8,
      category: 'modern',
      title: 'Geometric Design',
      image: 'https://images.unsplash.com/photo-1574192324001-ee41e18ed679?w=400&h=500&fit=crop&crop=center',
      description: 'Contemporary geometric patterns'
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="section-padding bg-surface">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-medium uppercase tracking-wider mb-4">My Work</p>
          <h2 className="heading-secondary text-foreground mb-6">
            Portfolio of
            <span className="text-gradient-primary"> Beautiful Designs</span>
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            Explore my collection of henna artistry spanning various styles and occasions. 
            Each design tells a unique story and celebrates individual beauty.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-primary text-primary-foreground shadow-warm'
                  : 'bg-surface-elevated text-foreground-muted hover:bg-primary/10 hover:text-primary'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id}
              className="group card-elevated overflow-hidden hover:shadow-glow transition-all duration-300 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <button className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors duration-300">
                      <Eye className="w-5 h-5" />
                    </button>
                    <button className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors duration-300">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-foreground-subtle">{item.description}</p>
                <div className="mt-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                    item.category === 'bridal' ? 'bg-accent/20 text-accent' :
                    item.category === 'arabic' ? 'bg-primary/20 text-primary' :
                    item.category === 'traditional' ? 'bg-success/20 text-success' :
                    'bg-warning/20 text-warning'
                  }`}>
                    {categories.find(cat => cat.id === item.category)?.label}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* YouTube Integration */}
        <div className="mt-16 card-elevated p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Watch My Design Process
          </h3>
          <p className="text-foreground-muted mb-6">
            Follow along as I create these beautiful designs step by step on my YouTube channel
          </p>
          <a 
            href="https://youtube.com/@riyuhennaartist"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center space-x-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            <span>Visit YouTube Channel</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
