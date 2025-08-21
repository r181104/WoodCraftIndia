import { Hammer, Leaf, Crown } from 'lucide-react';

const features = [
  {
    icon: Hammer,
    title: 'Handcrafted Excellence',
    description: 'Each piece is meticulously crafted by skilled artisans with decades of experience in traditional woodworking.',
    gradient: 'from-walnut to-teak'
  },
  {
    icon: Leaf,
    title: 'Sustainable Materials',
    description: 'We use only responsibly sourced, high-quality wood from certified sustainable forests.',
    gradient: 'from-teak to-amber'
  },
  {
    icon: Crown,
    title: 'Custom Designs',
    description: 'Transform your vision into reality with our bespoke furniture and decor customization services.',
    gradient: 'from-amber to-walnut'
  }
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="wood-grain absolute inset-0 opacity-5"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-wood-dark mb-4">
            Why Choose Artisan Woods?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Experience the perfect blend of traditional craftsmanship and modern design
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="text-center group cursor-pointer"
                data-animate="true"
                data-testid={`feature-${index}`}
              >
                <div className={`bg-gradient-to-br ${feature.gradient} text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="font-playfair text-xl font-semibold mb-4 text-wood-dark">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
