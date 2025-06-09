
const About = () => {
  const milestones = [
    {
      year: '2020',
      title: 'The Dream Begins',
      description: 'Two college friends envisioned a space where students could study, socialize, and savor great food.'
    },
    {
      year: '2021',
      title: 'First Location',
      description: 'Opened our doors near the university campus with just 10 tables and big dreams.'
    },
    {
      year: '2022',
      title: 'Community Love',
      description: 'Became the go-to spot for students, hosting over 100 study groups and events.'
    },
    {
      year: '2023',
      title: 'Expansion',
      description: 'Added our new range of healthy options and expanded to accommodate 50+ guests.'
    },
    {
      year: '2024',
      title: 'Digital Evolution',
      description: 'Launched our online presence to better connect with our amazing community.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Story
          </h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            From a simple idea to your favorite hangout spot
          </p>
        </div>

        {/* Main Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="font-display text-3xl font-bold text-primary">
              Where It All Started
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Taco Tango & New Range Cafe was born from a simple observation: 
              students needed more than just a place to grab coffee. They needed 
              a space that understood their lifestyle, their budget, and their 
              need for both energy and comfort.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              What started as late-night conversations between two college friends 
              has grown into a vibrant community hub where friendships are forged, 
              ideas are born, and memories are made over great food and even better company.
            </p>
            <div className="bg-cafe-beige/50 p-6 rounded-lg">
              <h4 className="font-bold text-primary mb-2">Our Mission</h4>
              <p className="text-gray-600">
                To create an affordable, welcoming space where young minds can 
                thrive, connect, and fuel their ambitions with delicious food 
                and positive vibes.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Cafe interior showing cozy atmosphere"
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold">5000+</div>
                <div className="text-sm opacity-90">Happy Students</div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          <h3 className="font-display text-3xl font-bold text-primary text-center mb-12">
            Our Journey
          </h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 w-0.5 h-full bg-cafe-beige"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  {/* Content */}
                  <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-primary">
                      <div className="text-2xl font-bold text-primary mb-2">
                        {milestone.year}
                      </div>
                      <h4 className="text-xl font-bold text-gray-800 mb-2">
                        {milestone.title}
                      </h4>
                      <p className="text-gray-600">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mt-20 text-center">
          <h3 className="font-display text-3xl font-bold text-primary mb-8">
            What We Stand For
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h4 className="font-bold text-primary mb-2">Community</h4>
              <p className="text-gray-600">
                Building connections that last beyond graduation
              </p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h4 className="font-bold text-primary mb-2">Innovation</h4>
              <p className="text-gray-600">
                Constantly evolving to meet our customers' needs
              </p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">❤️</span>
              </div>
              <h4 className="font-bold text-primary mb-2">Passion</h4>
              <p className="text-gray-600">
                Every cup, every bite, made with love and care
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
