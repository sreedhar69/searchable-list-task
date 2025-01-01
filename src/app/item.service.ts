import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
export interface Item {
  name: string;
  description: string;
  category?: string; // Optional category
  price?: number;     // Optional price
  imageUrl?: string;  // Optional image URL
}
@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  getItems(page: number, pageSize: number): Observable<Item[]> {
    
    const items: Item[] = [
      { name: 'Red Apple', description: 'A crisp, sweet red apple.', category: 'Fruit', price: 0.75, imageUrl: 'apple.jpg' },
      { name: 'Blueberry Muffin', description: 'A freshly baked muffin with juicy blueberries.', category: 'Bakery', price: 2.50 },
      { name: 'Green Tea', description: 'A refreshing cup of green tea.', category: 'Beverage', price: 1.50 },
      { name: 'Wooden Chair', description: 'A sturdy and comfortable wooden chair.', category: 'Furniture', price: 75 },
      { name: 'Cotton T-Shirt', description: 'A soft and comfortable cotton t-shirt.', category: 'Clothing', price: 15 },
      { name: 'Leather Wallet', description: 'A genuine leather wallet with multiple compartments.', category: 'Accessories', price: 40 },
      { name: 'Stainless Steel Pan', description: 'A durable stainless steel pan for cooking.', category: 'Kitchenware', price: 30 },
      { name: 'Desk Lamp', description: 'A modern desk lamp with adjustable brightness.', category: 'Lighting', price: 25 },
      { name: 'Notebook', description: 'A spiral-bound notebook for taking notes.', category: 'Stationery', price: 5 },
      { name: 'Wireless Mouse', description: 'A wireless mouse for easy navigation.', category: 'Electronics', price: 20 },
      { name: 'Orange Juice', description: 'Freshly squeezed orange juice.', category: 'Beverage', price: 3 },
      { name: 'Chocolate Cake', description: 'A rich and decadent chocolate cake.', category: 'Bakery', price: 4 },
      { name: 'Metal Shelf', description: 'A sturdy metal shelf for storage.', category: 'Furniture', price: 100 },
      { name: 'Denim Jeans', description: 'Classic denim jeans with a comfortable fit.', category: 'Clothing', price: 60 },
      { name: 'Sunglasses', description: 'Stylish sunglasses with UV protection.', category: 'Accessories', price: 35 },
      { name: 'Ceramic Mug', description: 'A handcrafted ceramic mug for your favorite beverage.', category: 'Kitchenware', price: 12 },
      { name: 'Floor Lamp', description: 'A tall floor lamp for ambient lighting.', category: 'Lighting', price: 80 },
      { name: 'Pen Set', description: 'A set of high-quality pens for writing.', category: 'Stationery', price: 10 },
      { name: 'Keyboard', description: 'A wired keyboard for computer use.', category: 'Electronics', price: 50 },
      { name: 'Grape Juice', description: 'Sweet and refreshing grape juice.', category: 'Beverage', price: 2.50 },
      { name: 'Vanilla Cupcake', description: 'A moist vanilla cupcake with creamy frosting.', category: 'Bakery', price: 2 },
      { name: 'Coffee Table', description: 'A stylish coffee table for your living room.', category: 'Furniture', price: 150 },
      { name: 'Wool Sweater', description: 'A warm and cozy wool sweater.', category: 'Clothing', price: 70 },
      { name: 'Backpack', description: 'A durable backpack for carrying your belongings.', category: 'Accessories', price: 55 },
      { name: 'Cutting Board', description: 'A wooden cutting board for food preparation.', category: 'Kitchenware', price: 20 },
      { name: 'Table Lamp', description: 'A small table lamp for bedside reading.', category: 'Lighting', price: 30 },
      { name: 'Sticky Notes', description: 'A pad of sticky notes for reminders.', category: 'Stationery', price: 3 },
      { name: 'Monitor', description: 'A computer monitor for displaying visuals.', category: 'Electronics', price: 150 },
      { name: 'Apple Juice', description: 'Clear and crisp apple juice.', category: 'Beverage', price: 2 },
      { name: 'Lemon Meringue Pie', description: 'A tangy lemon meringue pie.', category: 'Bakery', price: 5 },
      { name: 'Dining Table', description: 'A large dining table for family meals.', category: 'Furniture', price: 250 },
      { name: 'Leather Jacket', description: 'A classic leather jacket for style and warmth.', category: 'Clothing', price: 120 },
      { name: 'Watch', description: 'A stylish wristwatch for telling time.', category: 'Accessories', price: 90 },
      { name: 'Spatula', description: 'A kitchen spatula for cooking and serving.', category: 'Kitchenware', price: 8 },
      { name: 'Chandelier', description: 'An elegant chandelier for decorative lighting.', category: 'Lighting', price: 200 },
      { name: 'Highlighter', description: 'A bright highlighter for marking important text.', category: 'Stationery', price: 2 },
      { name: 'Printer', description: 'A printer for printing documents and photos.', category: 'Electronics', price: 100 },
      { name: 'Iced Tea', description: 'Refreshing iced tea.', category: 'Beverage', price: 2 },
      { name: 'Croissant', description: 'A buttery and flaky croissant.', category: 'Bakery', price: 3 },
      { name: 'Sofa', description: 'A comfortable sofa for relaxing.', category: 'Furniture', price: 400 },
      { name: 'Raincoat', description: 'A waterproof raincoat for protection from the rain.', category: 'Clothing', price: 80 },
      { name: 'Belt', description: 'A leather belt for holding up pants.', category: 'Accessories', price: 25 },
      { name: 'Whisk', description: 'A kitchen whisk for mixing ingredients.', category: 'Kitchenware', price: 10 },
      { name: 'Nightstand', description: 'A small nightstand for beside your bed.', category: 'Furniture', price: 60 },
      { name: 'Eraser', description: 'An eraser for removing pencil marks.', category: 'Stationery', price: 1 },
      { name: 'Scanner', description: 'A scanner for digitizing documents and images.', category: 'Electronics', price: 70 },
      { name: 'Sparkling Water', description: 'Refreshing sparkling water.', category: 'Beverage', price: 1.50 },
      { name: 'Donut', description: 'A sweet and glazed donut.', category: 'Bakery', price: 1.50 },
    ];

    
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return of(items.slice(startIndex, endIndex));
  }

  
  searchItems(query: string): Observable<Item[]> {
    const items: Item[] = [
      { name: 'Red Apple', description: 'A crisp, sweet red apple.', category: 'Fruit', price: 0.75, imageUrl: 'apple.jpg' },
      { name: 'Blueberry Muffin', description: 'A freshly baked muffin with juicy blueberries.', category: 'Bakery', price: 2.50 },
      { name: 'Green Tea', description: 'A refreshing cup of green tea.', category: 'Beverage', price: 1.50 },
      { name: 'Wooden Chair', description: 'A sturdy and comfortable wooden chair.', category: 'Furniture', price: 75 },
      { name: 'Cotton T-Shirt', description: 'A soft and comfortable cotton t-shirt.', category: 'Clothing', price: 15 },
      { name: 'Leather Wallet', description: 'A genuine leather wallet with multiple compartments.', category: 'Accessories', price: 40 },
      { name: 'Stainless Steel Pan', description: 'A durable stainless steel pan for cooking.', category: 'Kitchenware', price: 30 },
      { name: 'Desk Lamp', description: 'A modern desk lamp with adjustable brightness.', category: 'Lighting', price: 25 },
      { name: 'Notebook', description: 'A spiral-bound notebook for taking notes.', category: 'Stationery', price: 5 },
      { name: 'Wireless Mouse', description: 'A wireless mouse for easy navigation.', category: 'Electronics', price: 20 },
      { name: 'Orange Juice', description: 'Freshly squeezed orange juice.', category: 'Beverage', price: 3 },
      { name: 'Chocolate Cake', description: 'A rich and decadent chocolate cake.', category: 'Bakery', price: 4 },
      { name: 'Metal Shelf', description: 'A sturdy metal shelf for storage.', category: 'Furniture', price: 100 },
      { name: 'Denim Jeans', description: 'Classic denim jeans with a comfortable fit.', category: 'Clothing', price: 60 },
      { name: 'Sunglasses', description: 'Stylish sunglasses with UV protection.', category: 'Accessories', price: 35 },
      { name: 'Ceramic Mug', description: 'A handcrafted ceramic mug for your favorite beverage.', category: 'Kitchenware', price: 12 },
      { name: 'Floor Lamp', description: 'A tall floor lamp for ambient lighting.', category: 'Lighting', price: 80 },
      { name: 'Pen Set', description: 'A set of high-quality pens for writing.', category: 'Stationery', price: 10 },
      { name: 'Keyboard', description: 'A wired keyboard for computer use.', category: 'Electronics', price: 50 },
      { name: 'Grape Juice', description: 'Sweet and refreshing grape juice.', category: 'Beverage', price: 2.50 },
      { name: 'Vanilla Cupcake', description: 'A moist vanilla cupcake with creamy frosting.', category: 'Bakery', price: 2 },
      { name: 'Coffee Table', description: 'A stylish coffee table for your living room.', category: 'Furniture', price: 150 },
      { name: 'Wool Sweater', description: 'A warm and cozy wool sweater.', category: 'Clothing', price: 70 },
      { name: 'Backpack', description: 'A durable backpack for carrying your belongings.', category: 'Accessories', price: 55 },
      { name: 'Cutting Board', description: 'A wooden cutting board for food preparation.', category: 'Kitchenware', price: 20 },
      { name: 'Table Lamp', description: 'A small table lamp for bedside reading.', category: 'Lighting', price: 30 },
      { name: 'Sticky Notes', description: 'A pad of sticky notes for reminders.', category: 'Stationery', price: 3 },
      { name: 'Monitor', description: 'A computer monitor for displaying visuals.', category: 'Electronics', price: 150 },
      { name: 'Apple Juice', description: 'Clear and crisp apple juice.', category: 'Beverage', price: 2 },
      { name: 'Lemon Meringue Pie', description: 'A tangy lemon meringue pie.', category: 'Bakery', price: 5 },
      { name: 'Dining Table', description: 'A large dining table for family meals.', category: 'Furniture', price: 250 },
      { name: 'Leather Jacket', description: 'A classic leather jacket for style and warmth.', category: 'Clothing', price: 120 },
      { name: 'Watch', description: 'A stylish wristwatch for telling time.', category: 'Accessories', price: 90 },
      { name: 'Spatula', description: 'A kitchen spatula for cooking and serving.', category: 'Kitchenware', price: 8 },
      { name: 'Chandelier', description: 'An elegant chandelier for decorative lighting.', category: 'Lighting', price: 200 },
      { name: 'Highlighter', description: 'A bright highlighter for marking important text.', category: 'Stationery', price: 2 },
      { name: 'Printer', description: 'A printer for printing documents and photos.', category: 'Electronics', price: 100 },
      { name: 'Iced Tea', description: 'Refreshing iced tea.', category: 'Beverage', price: 2 },
      { name: 'Croissant', description: 'A buttery and flaky croissant.', category: 'Bakery', price: 3 },
      { name: 'Sofa', description: 'A comfortable sofa for relaxing.', category: 'Furniture', price: 400 },
      { name: 'Raincoat', description: 'A waterproof raincoat for protection from the rain.', category: 'Clothing', price: 80 },
      { name: 'Belt', description: 'A leather belt for holding up pants.', category: 'Accessories', price: 25 },
      { name: 'Whisk', description: 'A kitchen whisk for mixing ingredients.', category: 'Kitchenware', price: 10 },
      { name: 'Nightstand', description: 'A small nightstand for beside your bed.', category: 'Furniture', price: 60 },
      { name: 'Eraser', description: 'An eraser for removing pencil marks.', category: 'Stationery', price: 1 },
      { name: 'Scanner', description: 'A scanner for digitizing documents and images.', category: 'Electronics', price: 70 },
      { name: 'Sparkling Water', description: 'Refreshing sparkling water.', category: 'Beverage', price: 1.50 },
      { name: 'Donut', description: 'A sweet and glazed donut.', category: 'Bakery', price: 1.50 },
    ];

    return of(items.filter(item => 
      item.name.toLowerCase().includes(query.toLowerCase()) || 
      item.description.toLowerCase().includes(query.toLowerCase())
    ));
  }
}
