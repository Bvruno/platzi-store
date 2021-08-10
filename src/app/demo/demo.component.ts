import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  title = 'platzi-store';
  power = 10

  items = ['bruno','julian','pepe','karla']

  addItem(texto: String) {
    this.items.push(texto + '');
  }
  deleteItem(index: number) {
    this.items.splice(index, 1)
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
