import { Component, OnInit, Input, Inject, InjectionToken } from '@angular/core';
import { DATA } from 'src/app/carpenter/carpenter.component';


@Component({
  selector: 'app-product-title',
  templateUrl: './product-title.component.html',
  styleUrls: ['./product-title.component.scss']
})
export class ProductTitleComponent implements OnInit {
  @Input() data: any;

  constructor(@Inject(DATA) private dataInjected: string){}

  ngOnInit(): void {
    this.data = this.data || this.dataInjected;
  }

}
