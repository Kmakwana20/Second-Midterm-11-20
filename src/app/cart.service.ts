import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CartService {
  items = [];
  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  getGraphicDesignPortfolio() {
    return this.http.get("/assets/graphic.json");
  }
  getShippingPrices() {
    return this.http.get("/assets/shipping.json");
  }
  getIllustrationPortfolio() {
    return this.http.get("/assets/illustration.json");
  }
  getInDesignPortfolio() {
    return this.http.get("/assets/indesign.json");
  }
  getDigitalArtPortfolio() {
    return this.http.get("/assets/digitalart.json");
  }
  constructor(private http: HttpClient) {}
}
