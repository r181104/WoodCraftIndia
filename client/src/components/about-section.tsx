import { Card, CardContent } from '@/components/ui/card';

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-wood-dark mb-4">
            About Artisan Woods
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Three generations of master craftsmen dedicated to preserving traditional Indian woodworking
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Story */}
          <div className="animate-on-scroll-left">
            <h3 className="font-playfair text-2xl font-bold text-wood-dark mb-6">
              Our Heritage
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>
                Founded in 1952, Artisan Woods has been at the forefront of traditional Indian woodworking. 
                Our journey began with a simple mission: to create furniture that tells stories and preserves 
                the rich heritage of Indian craftsmanship.
              </p>
              <p>
                Each piece is meticulously handcrafted by our skilled artisans who have inherited techniques 
                passed down through generations. We use only the finest sustainably sourced wood, ensuring 
                both quality and environmental responsibility.
              </p>
              <p>
                From intricate carvings to modern designs with traditional touches, we bridge the gap between 
                heritage and contemporary living.
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="animate-on-scroll-right">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="card-hover">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🔨</span>
                  </div>
                  <h4 className="font-semibold text-wood-dark mb-2">Master Craftsmen</h4>
                  <p className="text-sm text-gray-600">
                    Over 50 skilled artisans with decades of experience
                  </p>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🌿</span>
                  </div>
                  <h4 className="font-semibold text-wood-dark mb-2">Sustainable Wood</h4>
                  <p className="text-sm text-gray-600">
                    FSC certified and responsibly sourced materials
                  </p>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">⚒️</span>
                  </div>
                  <h4 className="font-semibold text-wood-dark mb-2">Traditional Techniques</h4>
                  <p className="text-sm text-gray-600">
                    Time-honored joinery and carving methods
                  </p>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <h4 className="font-semibold text-wood-dark mb-2">Quality Guarantee</h4>
                  <p className="text-sm text-gray-600">
                    Lifetime warranty on all handcrafted pieces
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}