import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'orders-item',
  templateUrl: './orders-item-ag.component.html',
  styleUrls: ['./orders-item-ag.component.css']
})
export class OrdersItemAGComponent implements OnInit {
  @Input() id?: string;
  @Input() title?: string;
  @Input() text?: string;
  @Input() image?: string;
  @Input() price?: string;


  constructor() { }

  ngOnInit(): void {
  }

}
