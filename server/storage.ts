import { type Product, type InsertProduct, type Inquiry, type InsertInquiry, type CustomQuote, type InsertCustomQuote } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Products
  getProducts(): Promise<Product[]>;
  getProductsByCategory(category: string): Promise<Product[]>;
  getProduct(id: string): Promise<Product | undefined>;
  getFeaturedProducts(): Promise<Product[]>;
  
  // Inquiries
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
  
  // Custom Quotes
  createCustomQuote(quote: InsertCustomQuote): Promise<CustomQuote>;
}

export class MemStorage implements IStorage {
  private products: Map<string, Product>;
  private inquiries: Map<string, Inquiry>;
  private customQuotes: Map<string, CustomQuote>;

  constructor() {
    this.products = new Map();
    this.inquiries = new Map();
    this.customQuotes = new Map();
    this.initializeSampleData();
  }

  private initializeSampleData() {
    const sampleProducts: Product[] = [
      {
        id: "1",
        name: "Handcrafted Teak Dining Table",
        description: "Elegant 6-seater dining table crafted from premium teak wood with intricate carvings.",
        price: "45000.00",
        image: "https://images.unsplash.com/photo-1549497538-303791108f95?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400",
        category: "furniture",
        rating: "5.0",
        inStock: true,
        featured: true,
        createdAt: new Date(),
      },
      {
        id: "2",
        name: "Rosewood Coffee Table",
        description: "Beautiful rosewood coffee table with traditional joinery and glass top.",
        price: "28000.00",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400",
        category: "furniture",
        rating: "4.8",
        inStock: true,
        featured: true,
        createdAt: new Date(),
      },
      {
        id: "3",
        name: "Carved Wooden Wall Art",
        description: "Intricate hand-carved wooden wall art depicting traditional Indian motifs.",
        price: "12000.00",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400",
        category: "decor",
        rating: "4.9",
        inStock: true,
        featured: false,
        createdAt: new Date(),
      },
      {
        id: "4",
        name: "Sheesham Wood Bookshelf",
        description: "5-tier bookshelf made from sustainable sheesham wood with adjustable shelves.",
        price: "35000.00",
        image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400",
        category: "furniture",
        rating: "4.7",
        inStock: true,
        featured: false,
        createdAt: new Date(),
      },
      {
        id: "5",
        name: "Wooden Jewelry Box",
        description: "Handcrafted jewelry box with velvet interior and intricate wood inlay work.",
        price: "8500.00",
        image: "https://images.unsplash.com/photo-1606932828675-5fe6c6cf9691?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400",
        category: "decor",
        rating: "4.9",
        inStock: true,
        featured: false,
        createdAt: new Date(),
      },
      {
        id: "6",
        name: "Custom Oak Wardrobe",
        description: "Spacious 3-door oak wardrobe with custom compartments and mirror.",
        price: "75000.00",
        image: "https://images.unsplash.com/photo-1558618047-fcd1fb2c4af8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400",
        category: "custom",
        rating: "5.0",
        inStock: true,
        featured: true,
        createdAt: new Date(),
      },
      {
        id: "7",
        name: "Mango Wood Side Table",
        description: "Compact side table with drawer, perfect for bedrooms or living rooms.",
        price: "15000.00",
        image: "https://images.unsplash.com/photo-1549497538-303791108f95?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400",
        category: "furniture",
        rating: "4.6",
        inStock: true,
        featured: false,
        createdAt: new Date(),
      },
      {
        id: "8",
        name: "Wooden Decorative Bowl Set",
        description: "Set of 3 decorative bowls in different sizes, hand-turned from teak wood.",
        price: "4500.00",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400",
        category: "decor",
        rating: "4.8",
        inStock: true,
        featured: false,
        createdAt: new Date(),
      },
    ];

    sampleProducts.forEach(product => {
      this.products.set(product.id, product);
    });
  }

  async getProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProductsByCategory(category: string): Promise<Product[]> {
    return Array.from(this.products.values()).filter(product => product.category === category);
  }

  async getProduct(id: string): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async getFeaturedProducts(): Promise<Product[]> {
    return Array.from(this.products.values()).filter(product => product.featured);
  }

  async createInquiry(insertInquiry: InsertInquiry): Promise<Inquiry> {
    const id = randomUUID();
    const inquiry: Inquiry = {
      ...insertInquiry,
      id,
      createdAt: new Date(),
    };
    this.inquiries.set(id, inquiry);
    return inquiry;
  }

  async createCustomQuote(insertQuote: InsertCustomQuote): Promise<CustomQuote> {
    const id = randomUUID();
    const quote: CustomQuote = {
      ...insertQuote,
      id,
      createdAt: new Date(),
    };
    this.customQuotes.set(id, quote);
    return quote;
  }
}

export const storage = new MemStorage();
