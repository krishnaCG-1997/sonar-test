import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'teamLinksPOC';
 

  constructor( ) { 
    
  }
  myFunction() {
    let myWindow = window.open("https://www.google.com/", "myWindow", "width=1000,height=1000");
  }


  


}


  

