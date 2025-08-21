import { Button } from '@/components/ui/button';
import { scrollToSection } from '@/lib/utils';

const stats = [
  { value: '50+', label: 'Years of Experience' },
  { value: '2000+', label: 'Happy Customers' },
  { value: '15+', label: 'Master Craftsmen' },
  { value: '5000+', label: 'Pieces Created' },
];

const images = [
  {
    src: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300',
    alt: 'Indian woodwork craftsman',
    className: 'rounded-2xl shadow-lg object-cover h-64 w-full'
  },
  {
    src: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300',
    alt: 'Wood carving craftsmanship',
    className: 'rounded-2xl shadow-lg object-cover h-40 w-full mt-12'
  },
  {
    src: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300',
    alt: 'Wooden furniture workshop',
    className: 'rounded-2xl shadow-lg object-cover h-40 w-full -mt-12'
  },
  {
    src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500',
    alt: 'Finished wooden furniture',
    className: 'rounded-2xl shadow-lg object-cover h-64 w-full'
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-wood-dark mb-6">
              Our Heritage of Craftsmanship
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              For over three generations, Artisan Woods has been at the forefront of traditional Indian woodworking. 
              Our master craftsmen combine time-honored techniques with contemporary design sensibilities to create 
              furniture and decor that stands the test of time.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              We believe in sustainable practices, using only responsibly sourced materials and traditional joinery 
              methods that ensure each piece is built to last for generations.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center" data-testid={`stat-${index}`}>
                  <div className="text-3xl font-bold text-walnut mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-walnut text-white hover:bg-walnut-light"
              data-testid="learn-more-btn"
            >
              Learn More About Us
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {images.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                className={image.className}
                data-testid={`about-image-${index}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
