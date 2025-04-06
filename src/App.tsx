import React from 'react';
import { Heart, MapPin, Camera, Calendar, Clock, Users, ChevronDown, Instagram, Facebook, Twitter } from 'lucide-react';

function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-cover bg-center" 
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-serif mb-6">Wedora</h1>
          <p className="text-xl md:text-2xl mb-8 font-light">Weddings made joyful, not stressful.</p>
          <button 
            onClick={() => scrollToSection('services')}
            className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
          >
            Start Planning
          </button>
        </div>
        <div className="absolute bottom-8 w-full text-center">
          <ChevronDown 
            className="w-8 h-8 text-white animate-bounce mx-auto cursor-pointer"
            onClick={() => scrollToSection('about')}
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-8 bg-rose-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif mb-8 text-gray-800">About Us</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Wedora is a premium wedding planning service crafted specifically for modern Indian couples. 
            We understand that your wedding day should be as unique as your love story. Our team of expert 
            planners combines traditional values with contemporary style to create unforgettable celebrations.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif mb-16 text-center text-gray-800">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: 'Plan', icon: Calendar, description: 'Share your vision and let us create your perfect day' },
              { title: 'Personalize', icon: Heart, description: 'Customize every detail to match your style' },
              { title: 'Celebrate', icon: Users, description: 'Enjoy your special day while we handle everything' }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-rose-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-10 h-10 text-rose-500" />
                </div>
                <h3 className="text-2xl font-serif mb-4 text-gray-800">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-4 md:px-8 bg-rose-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif mb-16 text-center text-gray-800">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Venue Selection', icon: MapPin, description: 'Find your perfect location' },
              { title: 'Decor', icon: Heart, description: 'Beautiful styling & themes' },
              { title: 'Photography', icon: Camera, description: 'Capture precious moments' },
              { title: 'Coordination', icon: Clock, description: 'Seamless event management' }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <service.icon className="w-12 h-12 text-rose-500 mb-4" />
                <h3 className="text-xl font-serif mb-2 text-gray-800">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif mb-16 text-center text-gray-800">Happy Couples</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                quote: "Wedora made our dream wedding a reality. Every detail was perfect!",
                couple: "Priya & Arjun",
                image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                quote: "The most stress-free wedding planning experience we could have asked for.",
                couple: "Meera & Raj",
                image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-start gap-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.couple} 
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-gray-600 italic mb-4">{testimonial.quote}</p>
                    <p className="text-rose-500 font-serif">{testimonial.couple}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-serif mb-4">Wedora</h3>
              <p className="text-gray-400">Making wedding dreams come true</p>
            </div>
            <div>
              <h4 className="text-xl mb-4">Contact</h4>
              <p className="text-gray-400">contact@wedora.com</p>
              <p className="text-gray-400">+91 1111111111</p>
            </div>
            <div>
              <h4 className="text-xl mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <Instagram className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
                <Facebook className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
                <Twitter className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Wedora. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;