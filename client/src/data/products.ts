// Mock product data for standalone deployment
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'furniture' | 'decor' | 'custom';
  featured: boolean;
  inStock: boolean;
  material: string;
  dimensions: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Handcrafted Teak Dining Table',
    description: 'Exquisite 8-seater dining table made from premium teak wood with intricate traditional carvings',
    price: 45000,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&crop=center',
    category: 'furniture',
    featured: true,
    inStock: true,
    material: 'Premium Teak Wood',
    dimensions: '180cm x 90cm x 75cm'
  },
  {
    id: '2',
    name: 'Royal Rosewood Bed Frame',
    description: 'Luxurious king-size bed frame with ornate headboard featuring traditional Indian motifs',
    price: 65000,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&crop=center',
    category: 'furniture',
    featured: true,
    inStock: true,
    material: 'Rosewood',
    dimensions: '200cm x 180cm x 120cm'
  },
  {
    id: '3',
    name: 'Carved Mahogany Bookshelf',
    description: 'Elegant 7-shelf bookcase with detailed carved panels and traditional brass fittings',
    price: 32000,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&crop=center',
    category: 'furniture',
    featured: false,
    inStock: true,
    material: 'Mahogany Wood',
    dimensions: '200cm x 120cm x 35cm'
  },
  {
    id: '4',
    name: 'Traditional Wooden Mirror Frame',
    description: 'Ornate mirror with hand-carved wooden frame featuring peacock and floral motifs',
    price: 8500,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&crop=center',
    category: 'decor',
    featured: true,
    inStock: true,
    material: 'Sheesham Wood',
    dimensions: '90cm x 60cm x 5cm'
  },
  {
    id: '5',
    name: 'Handcrafted Wooden Wall Art',
    description: 'Beautiful wall sculpture depicting traditional Indian tree of life with intricate detailing',
    price: 12000,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&crop=center',
    category: 'decor',
    featured: false,
    inStock: true,
    material: 'Mixed Hardwood',
    dimensions: '120cm x 80cm x 8cm'
  },
  {
    id: '6',
    name: 'Custom Prayer Altar',
    description: 'Personalized wooden prayer altar with custom engravings and multiple compartments',
    price: 25000,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&crop=center',
    category: 'custom',
    featured: false,
    inStock: true,
    material: 'Sandalwood',
    dimensions: 'Customizable'
  },
  {
    id: '7',
    name: 'Antique Style Wooden Chest',
    description: 'Vintage-inspired storage chest with brass hardware and traditional lock mechanism',
    price: 18000,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&crop=center',
    category: 'furniture',
    featured: false,
    inStock: true,
    material: 'Mango Wood',
    dimensions: '100cm x 50cm x 50cm'
  },
  {
    id: '8',
    name: 'Decorative Wooden Lamp Stand',
    description: 'Elegant table lamp with carved wooden base and traditional fabric shade',
    price: 5500,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&crop=center',
    category: 'decor',
    featured: false,
    inStock: true,
    material: 'Oak Wood',
    dimensions: '35cm x 35cm x 55cm'
  }
];