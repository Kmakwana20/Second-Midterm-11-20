import { Component, OnInit } from "@angular/core";
import { CartService } from "../cart.service";

@Component({
  selector: "app-digital-art",
  templateUrl: "./digital-art.component.html",
  styleUrls: ["./digital-art.component.css"]
})
export class DigitalArtComponent implements OnInit {
  portfolioItems;
  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.portfolioItems = this.cartService.getDigitalArtPortfolio();
  }
}
