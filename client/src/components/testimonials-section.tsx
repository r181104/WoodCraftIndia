import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    location: 'Delhi',
    rating: 5,
    text: 'The custom dining table we ordered exceeded all our expectations. The craftsmanship is absolutely stunning and the attention to detail is remarkable.',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b820?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80'
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    location: 'Mumbai',
    rating: 5,
    text: 'Amazing quality furniture at reasonable prices. The team was professional throughout the process and delivered exactly what we envisioned.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80'
  },
  {
    id: 3,
    name: 'Anita Patel',
    location: 'Bangalore',
    rating: 5,
    text: 'The wooden home decor items we purchased have transformed our living space. Truly exceptional artistry and sustainable materials.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80'
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-wood-dark mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover why thousands of customers trust us for their woodwork needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="bg-white hover:shadow-xl transition-shadow duration-300 group"
              data-testid={`testimonial-${testimonial.id}`}
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="flex text-amber text-xl">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-wood-dark">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
