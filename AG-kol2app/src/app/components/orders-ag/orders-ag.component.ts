import { Component, OnInit } from '@angular/core';
import { AGDataService } from 'src/app/services/ag-data.service';

@Component({
  selector: 'orders',
  templateUrl: './orders-ag.component.html',
  styleUrls: ['./orders-ag.component.css']
})
export class OrdersAGComponent implements OnInit {
  public items$: any;

  constructor(private service:AGDataService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.service.getAll().subscribe(response => {
    this.items$ = response;
    });
  }

}
