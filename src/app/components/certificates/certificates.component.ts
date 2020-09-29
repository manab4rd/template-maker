import { Component, OnInit, Input, Inject } from '@angular/core';
import { DATA } from 'src/app/carpenter/carpenter.component';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss']
})
export class CertificatesComponent implements OnInit {

  @Input() data: any;

  constructor(@Inject(DATA) private dataInjected: string){}

  ngOnInit(): void {
    this.data = this.data || this.dataInjected;
  }

}
