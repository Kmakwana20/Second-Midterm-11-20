import { Component, OnInit } from "@angular/core";
import { CartService } from "../cart.service";
@Component({
  selector: "app-in-design",
  templateUrl: "./in-design.component.html",
  styleUrls: ["./in-design.component.css"]
})
export class InDesignComponent implements OnInit {
  portfolioItems;
  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.portfolioItems = this.cartService.getInDesignPortfolio();
  }
}
