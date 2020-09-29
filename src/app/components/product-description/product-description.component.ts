import { Component, OnInit, Input, Inject } from '@angular/core';
import { DATA } from 'src/app/carpenter/carpenter.component';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.scss']
})
export class ProductDescriptionComponent implements OnInit {

  @Input() data: any;

  constructor(@Inject(DATA) private dataInjected: string){}

  ngOnInit(): void {
    this.data = this.data || this.dataInjected;
  }

}
