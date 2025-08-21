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
        description: "Magnificent 6-seater dining table crafted from premium teak wood with intricate traditional carvings and natural grain patterns.",
        price: "45000.00",
        image: `data:image/svg+xml;base64,${btoa(`
          <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="woodGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#8B4513;stop-opacity:1" />
                <stop offset="50%" style="stop-color:#A0522D;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#8B4513;stop-opacity:1" />
              </linearGradient>
            </defs>
            <rect width="400" height="300" fill="#f8f7f4"/>
            <ellipse cx="200" cy="280" rx="150" ry="15" fill="rgba(0,0,0,0.1)"/>
            <rect x="50" y="100" width="300" height="120" rx="8" fill="url(#woodGrad1)" stroke="#654321" stroke-width="2"/>
            <rect x="70" y="220" width="15" height="45" fill="#654321" rx="3"/>
            <rect x="315" y="220" width="15" height="45" fill="#654321" rx="3"/>
            <rect x="70" y="225" width="260" height="8" fill="#8B4513" rx="2"/>
            <rect x="55" y="105" width="290" height="20" fill="rgba(255,255,255,0.2)" rx="4"/>
          </svg>
        `)}`,
        category: "furniture",
        rating: "4.8",
        inStock: true,
        featured: true,
        createdAt: new Date(),
      },
      {
        id: "2",
        name: "Rosewood Traditional Chair Set",
        description: "Exquisite set of 4 traditional chairs crafted from premium rosewood with comfortable cushioning and elegant carved designs.",
        price: "32000.00",
        image: `data:image/svg+xml;base64,${btoa(`
          <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="rosewoodGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#722F37;stop-opacity:1" />
                <stop offset="50%" style="stop-color:#8B4A47;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#722F37;stop-opacity:1" />
              </linearGradient>
            </defs>
            <rect width="400" height="300" fill="#f8f7f4"/>
            <ellipse cx="200" cy="285" rx="100" ry="10" fill="rgba(0,0,0,0.1)"/>
            <rect x="150" y="60" width="100" height="140" rx="12" fill="url(#rosewoodGrad)" stroke="#5D252A" stroke-width="2"/>
            <rect x="130" y="180" width="140" height="60" rx="8" fill="url(#rosewoodGrad)" stroke="#5D252A" stroke-width="2"/>
            <rect x="140" y="240" width="12" height="40" fill="#5D252A" rx="2"/>
            <rect x="170" y="240" width="12" height="40" fill="#5D252A" rx="2"/>
            <rect x="218" y="240" width="12" height="40" fill="#5D252A" rx="2"/>
            <rect x="248" y="240" width="12" height="40" fill="#5D252A" rx="2"/>
          </svg>
        `)}`,
        category: "furniture",
        rating: "4.7",
        inStock: true,
        featured: true,
        createdAt: new Date(),
      },
      {
        id: "3",
        name: "Sheesham Wood Wardrobe",
        description: "Spacious luxury wardrobe with contemporary design, multiple compartments, and smooth sliding doors.",
        price: "65000.00",
        image: `data:image/svg+xml;base64,${btoa(`
          <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="sheeshamGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#8B4A3C;stop-opacity:1" />
                <stop offset="50%" style="stop-color:#A0522D;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#8B4A3C;stop-opacity:1" />
              </linearGradient>
            </defs>
            <rect width="400" height="300" fill="#f8f7f4"/>
            <rect x="80" y="50" width="240" height="230" rx="8" fill="url(#sheeshamGrad)" stroke="#654132" stroke-width="3"/>
            <rect x="90" y="65" width="110" height="180" rx="4" fill="url(#sheeshamGrad)" stroke="#654132" stroke-width="2"/>
            <rect x="205" y="65" width="110" height="180" rx="4" fill="url(#sheeshamGrad)" stroke="#654132" stroke-width="2"/>
            <circle cx="185" cy="155" r="4" fill="#8B7355" stroke="#654132" stroke-width="1"/>
            <circle cx="220" cy="155" r="4" fill="#8B7355" stroke="#654132" stroke-width="1"/>
          </svg>
        `)}`,
        category: "furniture",
        rating: "4.6",
        inStock: true,
        featured: false,
        createdAt: new Date(),
      },
      {
        id: "4",
        name: "Mango Wood Bookshelf",
        description: "Elegant 5-tier bookshelf made from sustainable mango wood with adjustable shelves and beautiful natural finish.",
        price: "18500.00",
        image: `data:image/svg+xml;base64,${btoa(`
          <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="mangoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#CD853F;stop-opacity:1" />
                <stop offset="50%" style="stop-color:#DEB887;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#CD853F;stop-opacity:1" />
              </linearGradient>
            </defs>
            <rect width="400" height="300" fill="#f8f7f4"/>
            <rect x="80" y="40" width="240" height="240" rx="6" fill="url(#mangoGrad)" stroke="#B8860B" stroke-width="2"/>
            <rect x="90" y="90" width="220" height="8" fill="#B8860B" rx="2"/>
            <rect x="90" y="140" width="220" height="8" fill="#B8860B" rx="2"/>
            <rect x="90" y="190" width="220" height="8" fill="#B8860B" rx="2"/>
            <rect x="100" y="50" width="12" height="35" fill="#8B0000" rx="1"/>
            <rect x="115" y="50" width="15" height="35" fill="#006400" rx="1"/>
            <rect x="133" y="50" width="10" height="35" fill="#4B0082" rx="1"/>
          </svg>
        `)}`,
        category: "decor",
        rating: "4.5",
        inStock: true,
        featured: true,
        createdAt: new Date(),
      },
      {
        id: "5",
        name: "Oak Coffee Table",
        description: "Stunning round coffee table with beautiful oak grain patterns and lower storage shelf.",
        price: "28000.00",
        image: `data:image/svg+xml;base64,${btoa(`
          <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="oakGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#D2B48C;stop-opacity:1" />
                <stop offset="50%" style="stop-color:#F5DEB3;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#D2B48C;stop-opacity:1" />
              </linearGradient>
            </defs>
            <rect width="400" height="300" fill="#f8f7f4"/>
            <ellipse cx="200" cy="285" rx="140" ry="12" fill="rgba(0,0,0,0.1)"/>
            <rect x="70" y="140" width="260" height="80" rx="12" fill="url(#oakGrad)" stroke="#CD853F" stroke-width="2"/>
            <rect x="90" y="220" width="20" height="50" fill="#CD853F" rx="4"/>
            <rect x="290" y="220" width="20" height="50" fill="#CD853F" rx="4"/>
            <rect x="100" y="245" width="200" height="12" fill="url(#oakGrad)" rx="3"/>
            <circle cx="200" cy="180" r="8" fill="rgba(255,255,255,0.15)" stroke="#CD853F" stroke-width="1"/>
          </svg>
        `)}`,
        category: "furniture",
        rating: "4.7",
        inStock: true,
        featured: false,
        createdAt: new Date(),
      },
      {
        id: "6",
        name: "Walnut Side Table",
        description: "Compact elegant side table with drawer storage, perfect for bedside or living room use.",
        price: "15000.00",
        image: `data:image/svg+xml;base64,${btoa(`
          <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="walnutGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#8B4513;stop-opacity:1" />
                <stop offset="50%" style="stop-color:#A0522D;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#8B4513;stop-opacity:1" />
              </linearGradient>
            </defs>
            <rect width="400" height="300" fill="#f8f7f4"/>
            <ellipse cx="200" cy="285" rx="80" ry="8" fill="rgba(0,0,0,0.1)"/>
            <rect x="150" y="120" width="100" height="70" rx="8" fill="url(#walnutGrad)" stroke="#654321" stroke-width="2"/>
            <rect x="160" y="190" width="12" height="80" fill="#654321" rx="2"/>
            <rect x="228" y="190" width="12" height="80" fill="#654321" rx="2"/>
            <rect x="155" y="140" width="90" height="25" rx="3" fill="#A0522D" stroke="#654321" stroke-width="1"/>
            <circle cx="200" cy="152" r="3" fill="#654321"/>
          </svg>
        `)}`,
        category: "furniture",
        rating: "4.4",
        inStock: true,
        featured: false,
        createdAt: new Date(),
      },
      {
        id: "7",
        name: "Bamboo Room Divider",
        description: "Eco-friendly room divider made from sustainable bamboo, lightweight and adds natural beauty to any space.",
        price: "12000.00",
        image: `data:image/svg+xml;base64,${btoa(`
          <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="bambooGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#9ACD32;stop-opacity:1" />
                <stop offset="50%" style="stop-color:#8FBC8F;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#6B8E23;stop-opacity:1" />
              </linearGradient>
            </defs>
            <rect width="400" height="300" fill="#f8f7f4"/>
            <rect x="60" y="40" width="8" height="240" fill="url(#bambooGrad)" rx="4"/>
            <rect x="100" y="40" width="8" height="240" fill="url(#bambooGrad)" rx="4"/>
            <rect x="140" y="40" width="8" height="240" fill="url(#bambooGrad)" rx="4"/>
            <rect x="180" y="40" width="8" height="240" fill="url(#bambooGrad)" rx="4"/>
            <rect x="220" y="40" width="8" height="240" fill="url(#bambooGrad)" rx="4"/>
            <rect x="260" y="40" width="8" height="240" fill="url(#bambooGrad)" rx="4"/>
            <rect x="300" y="40" width="8" height="240" fill="url(#bambooGrad)" rx="4"/>
            <rect x="340" y="40" width="8" height="240" fill="url(#bambooGrad)" rx="4"/>
            <rect x="50" y="80" width="300" height="4" fill="#6B8E23" rx="2"/>
            <rect x="50" y="140" width="300" height="4" fill="#6B8E23" rx="2"/>
            <rect x="50" y="200" width="300" height="4" fill="#6B8E23" rx="2"/>
          </svg>
        `)}`,
        category: "decor",
        rating: "4.3",
        inStock: true,
        featured: false,
        createdAt: new Date(),
      },
      {
        id: "8",
        name: "Cedar Storage Chest",
        description: "Large handcrafted storage chest with cedar lining, perfect for storing blankets and seasonal items.",
        price: "22000.00",
        image: `data:image/svg+xml;base64,${btoa(`
          <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="cedarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#8B4513;stop-opacity:1" />
                <stop offset="50%" style="stop-color:#CD853F;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#8B4513;stop-opacity:1" />
              </linearGradient>
            </defs>
            <rect width="400" height="300" fill="#f8f7f4"/>
            <ellipse cx="200" cy="285" rx="120" ry="10" fill="rgba(0,0,0,0.1)"/>
            <rect x="80" y="160" width="240" height="100" rx="8" fill="url(#cedarGrad)" stroke="#654321" stroke-width="2"/>
            <path d="M75 160 Q200 140 325 160 L320 155 Q200 135 80 155 Z" fill="url(#cedarGrad)" stroke="#654321" stroke-width="2"/>
            <rect x="110" y="180" width="20" height="8" fill="#8B7355" rx="2"/>
            <rect x="270" y="180" width="20" height="8" fill="#8B7355" rx="2"/>
            <rect x="120" y="190" width="160" height="40" rx="4" fill="rgba(255,255,255,0.1)" stroke="#8B4513" stroke-width="1"/>
            <rect x="90" y="255" width="15" height="20" fill="#654321" rx="3"/>
            <rect x="295" y="255" width="15" height="20" fill="#654321" rx="3"/>
          </svg>
        `)}`,
        category: "furniture",
        rating: "4.6",
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
      phone: insertInquiry.phone || null,
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
      description: insertQuote.description || null,
      customerEmail: insertQuote.customerEmail || null,
      id,
      createdAt: new Date(),
    };
    this.customQuotes.set(id, quote);
    return quote;
  }
}

export const storage = new MemStorage();
