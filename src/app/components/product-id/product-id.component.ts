import { Component, OnInit, Input, Inject } from '@angular/core';
import { DATA } from 'src/app/carpenter/carpenter.component';

@Component({
  selector: 'app-product-id',
  templateUrl: './product-id.component.html',
  styleUrls: ['./product-id.component.scss']
})
export class ProductIdComponent implements OnInit {

  @Input() data: any;

  constructor(@Inject(DATA) private dataInjected: string){}

  ngOnInit(): void {
    this.data = this.data || this.dataInjected;
  }

}
