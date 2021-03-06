import { Component } from '@angular/core';
import { MatSnackBar } from "@angular/material";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PricingToolFrontEnd';
  constructor(public snackBar: MatSnackBar) { }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
       duration: 70000,
    });
 } 
}