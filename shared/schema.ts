import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, decimal, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const products = pgTable("products", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  description: text("description").notNull(),
  price: decimal("price", { precision: 10, scale: 2 }).notNull(),
  image: text("image").notNull(),
  category: text("category").notNull(), // furniture, decor, custom
  rating: decimal("rating", { precision: 2, scale: 1 }).default("5.0"),
  inStock: boolean("in_stock").default(true),
  featured: boolean("featured").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});

export const inquiries = pgTable("inquiries", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  inquiryType: text("inquiry_type").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const customQuotes = pgTable("custom_quotes", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  projectType: text("project_type").notNull(),
  woodType: text("wood_type").notNull(),
  length: decimal("length", { precision: 5, scale: 2 }).notNull(),
  width: decimal("width", { precision: 5, scale: 2 }).notNull(),
  finishType: text("finish_type").notNull(),
  description: text("description"),
  materialCost: decimal("material_cost", { precision: 10, scale: 2 }).notNull(),
  laborCost: decimal("labor_cost", { precision: 10, scale: 2 }).notNull(),
  finishCost: decimal("finish_cost", { precision: 10, scale: 2 }).notNull(),
  totalEstimate: decimal("total_estimate", { precision: 10, scale: 2 }).notNull(),
  customerEmail: text("customer_email"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertProductSchema = createInsertSchema(products).omit({
  id: true,
  createdAt: true,
});

export const insertInquirySchema = createInsertSchema(inquiries).omit({
  id: true,
  createdAt: true,
});

export const insertCustomQuoteSchema = createInsertSchema(customQuotes).omit({
  id: true,
  createdAt: true,
});

export type Product = typeof products.$inferSelect;
export type InsertProduct = z.infer<typeof insertProductSchema>;
export type Inquiry = typeof inquiries.$inferSelect;
export type InsertInquiry = z.infer<typeof insertInquirySchema>;
export type CustomQuote = typeof customQuotes.$inferSelect;
export type InsertCustomQuote = z.infer<typeof insertCustomQuoteSchema>;
