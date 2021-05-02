import value from "*.json";
import { Component } from "@angular/core";
import { NavController, Select } from "ionic-angular";


@Component({
  selector: "page-home",
  templateUrl: "home.html",
  styleUrls: ['home.css']
})

export class HomePage {
  /*let R : number = 52;
  let M : number = 56.2;
  let D : number = 50;
  let H : number = 48;*/
  M: number;
  R: number;
  D: number;
  H: number;
  inches: number;
  ft: number;
  message: string;
  sex: string = "m" && "f";
  


  }