import { Component, OnInit } from "@angular/core";
import { InfoPaginaService } from "../../services/info-pagina.service";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"],
})
export class FooterComponent implements OnInit {
  facebook = "https://www.facebook.com/praveen.vs.52";
  twitter = "https://twitter.com/MrPraveenVishnu";
  instagram = "https://www.instagram.com/mrpraveenvishnu/";
  constructor() {}

  ngOnInit() {}
}
