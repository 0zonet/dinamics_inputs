import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public items : any;


  constructor(){

    this.items = [1,2,3,4,5,6,7,8,9];

  }


  public getItemsData() : void{
    alert( this.items );
    console.log( this.items );
  }
  
  
  public trackByFn(index: any, item: any) {
    return index;
  }
  
  

}
