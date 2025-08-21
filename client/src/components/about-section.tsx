import { Card, CardContent } from '@/components/ui/card';

export function AboutSection() {
  return (
    <section id="about" className="py-20" style={{ 
      background: 'linear-gradient(135deg, #f5f1eb 0%, #faf7f2 30%, #f0ece1 100%)',
      position: 'relative'
    }}>
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d97706' fill-opacity='0.05'%3E%3Cpath d='M8 8h24v1H8zM8 16h24v1H8zM8 24h24v1H8zM8 32h24v1H8z'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '40px 40px'
      }}></div>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 relative z-10" style={{ 
            color: '#2d1810',
            textShadow: '0 2px 4px rgba(245, 158, 11, 0.3)'
          }}>
            About Artisan Woods
          </h2>
          <p className="text-lg max-w-2xl mx-auto relative z-10" style={{ color: '#654321' }}>
            Three generations of master craftsmen dedicated to preserving traditional Indian woodworking
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Story */}
          <div className="animate-on-scroll-left">
            <h3 className="font-playfair text-2xl font-bold mb-6 relative z-10" style={{ 
              color: '#2d1810',
              textShadow: '0 1px 2px rgba(245, 158, 11, 0.3)'
            }}>
              Our Heritage
            </h3>
            <div className="space-y-4 relative z-10" style={{ color: '#654321' }}>
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
              <Card className="card-hover transition-all duration-500 border border-amber-400/30 relative z-10" style={{
                background: 'rgba(255, 255, 255, 0.95)',
                boxShadow: '0 8px 32px rgba(245, 158, 11, 0.2), inset 0 1px 2px rgba(245, 158, 11, 0.1)',
                backdropFilter: 'blur(10px)'
              }}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{
                    background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
                    boxShadow: '0 4px 12px rgba(251, 191, 36, 0.4)'
                  }}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l2-1v-2.5M18 18l-2-1v-2.5" />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-2" style={{ color: '#2d1810' }}>Master Craftsmen</h4>
                  <p className="text-sm" style={{ color: '#654321' }}>
                    Over 50 skilled artisans with decades of experience
                  </p>
                </CardContent>
              </Card>

              <Card className="card-hover transition-all duration-500 border border-green-400/30 relative z-10" style={{
                background: 'rgba(255, 255, 255, 0.95)',
                boxShadow: '0 8px 32px rgba(16, 185, 129, 0.15), inset 0 1px 2px rgba(16, 185, 129, 0.1)',
                backdropFilter: 'blur(10px)'
              }}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{
                    background: 'linear-gradient(135deg, #10b981, #059669)',
                    boxShadow: '0 4px 12px rgba(16, 185, 129, 0.4)'
                  }}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l14 9-9 1-4 5-1-9z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-2" style={{ color: '#2d1810' }}>Sustainable Wood</h4>
                  <p className="text-sm" style={{ color: '#654321' }}>
                    FSC certified and responsibly sourced materials
                  </p>
                </CardContent>
              </Card>

              <Card className="card-hover transition-all duration-500 border border-blue-400/30 relative z-10" style={{
                background: 'rgba(255, 255, 255, 0.95)',
                boxShadow: '0 8px 32px rgba(59, 130, 246, 0.15), inset 0 1px 2px rgba(59, 130, 246, 0.1)',
                backdropFilter: 'blur(10px)'
              }}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{
                    background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                    boxShadow: '0 4px 12px rgba(59, 130, 246, 0.4)'
                  }}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-2" style={{ color: '#2d1810' }}>Traditional Techniques</h4>
                  <p className="text-sm" style={{ color: '#654321' }}>
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