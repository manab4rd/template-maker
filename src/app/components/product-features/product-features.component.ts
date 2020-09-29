import { Component, OnInit, Input, Inject } from '@angular/core';
import { DATA } from 'src/app/carpenter/carpenter.component';

@Component({
  selector: 'app-product-features',
  templateUrl: './product-features.component.html',
  styleUrls: ['./product-features.component.scss']
})
export class ProductFeaturesComponent implements OnInit {

  @Input() data: any;

  constructor(@Inject(DATA) private dataInjected: string){}

  ngOnInit(): void {
    this.data = this.data || this.dataInjected;
  }

}
