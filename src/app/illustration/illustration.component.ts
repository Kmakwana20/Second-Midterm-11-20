import { Component, OnInit } from "@angular/core";

import { CartService } from "../cart.service";

@Component({
  selector: "app-illustration",
  templateUrl: "./illustration.component.html",
  styleUrls: ["./illustration.component.css"]
})
export class IllustrationComponent implements OnInit {
  portfolioItems;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.portfolioItems = this.cartService.getIllustrationPortfolio();
  }
}
