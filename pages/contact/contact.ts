import value from "*.json";
import { Component } from "@angular/core";
import { NavController, Select } from "ionic-angular";


@Component({
  selector: "page-contact",
  templateUrl: "contact.html",
   styleUrls: ['contact.css']
})

export class ContactPage {
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
  

  constructor(public navCtrl: NavController) {}
  compute() {
    if(this.sex == "m"){
      if(this.ft < 6){
      this.M = 56.2 + (1.41 * this.inches);
      this.R = 52 + (1.9 * this.inches);
      this.D = 50 + (2.3 * this.inches);
      this.H = 48 + (2.7 * this.inches);
      }
      else {
      this.M = 56.2 + (1.41 * (this.inches + ((this.ft-5)*12)));
      this.R = 52 + (1.9 * (this.inches + ((this.ft-5)*12)));
      this.D = 50 + (2.3 * (this.inches + ((this.ft-5)*12)));
      this.H = 48 + (2.7 * (this.inches + ((this.ft-5)*12)));
      }
    }
    else if(this.sex == "f") {
      if(this.ft <6){
      this.M = 53.1 + (1.36 * this.inches);
      this.R = 49 + (1.9 * this.inches);
      this.D = 45.5 + (2.3 * this.inches);
      this.H = 45.5 + (2.2 * this.inches);}
      else { 
      this.M = 53.1 + (1.36 * (this.inches + ((this.ft-5)*12)));
      this.R = 49 + (1.9 * (this.inches + ((this.ft-5)*12)));
      this.D = 45.5 + (2.3 * (this.inches + ((this.ft-5)*12)));
      this.H = 45.5 + (2.2 * (this.inches + ((this.ft-5)*12)));}
    }


else {
  this.message = "Please select gender";
}


  }
}