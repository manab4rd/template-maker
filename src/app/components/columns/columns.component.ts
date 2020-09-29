import { Component, OnInit, Input, Inject, InjectionToken } from '@angular/core';
import { DATA } from 'src/app/carpenter/carpenter.component';


@Component({
  selector: 'app-columns',
  templateUrl: './columns.component.html',
  styleUrls: ['./columns.component.scss']
})
export class ColumnsComponent implements OnInit {
  @Input() data: any;

  constructor(@Inject(DATA) private dataInjected: string){}

  ngOnInit(): void {
    // console.log(this.dataInjected);
    this.data = this.data || this.dataInjected;
  }

}
