import { Component, OnInit, Injector, ReflectiveInjector, InjectionToken, ViewChild, ElementRef, OnChanges } from '@angular/core';
import { ColumnsComponent } from '../components/columns/columns.component';
import {CdkDragDrop, moveItemInArray, transferArrayItem, CdkDragStart, CdkDragMove, copyArrayItem} from '@angular/cdk/drag-drop';
import { ImageComponent } from '../components/image/image.component';
import { ProductTitleComponent } from '../components/product-title/product-title.component';
import { ProductDescriptionComponent } from '../components/product-description/product-description.component';
import { ProductFeaturesComponent } from '../components/product-features/product-features.component';
import { ProductIdComponent } from '../components/product-id/product-id.component';
import { CertificatesComponent } from '../components/certificates/certificates.component';
export const DATA = new InjectionToken<string>('app.data');

@Component({
  selector: 'app-carpenter',
  templateUrl: './carpenter.component.html',
  styleUrls: ['./carpenter.component.scss']
})
export class CarpenterComponent implements OnInit {
  editView = true;
  templateData = {
    id : '76846534234875643',
    title : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    desc: 'Nunc semper risus non massa porttitor, quis porta orci aliquet. Nulla porttitor vitae nibh et porttitor. Donec vel dolor in purus tristique fringilla. Praesent sed semper lorem, in blandit dolor. Praesent ac ipsum sit amet erat lacinia cursus in ac metus. Aenean feugiat nunc urna, a interdum erat pharetra at. Ut ut pellentesque sapien, at accumsan eros. Aliquam malesuada tortor purus, quis finibus ante eleifend vel. Integer non finibus lorem, eu malesuada lacus. Vestibulum facilisis ante sit amet diam consectetur vulputate.',
    features: '<ul><li>Ut ut pellentesque sapien</li><li>Integer non finibus lorem</li><li>Vestibulum facilisis ante sit amet diam consectetur</li></ul>'
  };

  templateMetadata = {
    type: 'food',
    rows: [
      {
        columns: [
          { wrapper: 'component1', components: [] },
          { wrapper: 'component2', components: [] }
        ],
        ratio: '1:2'
      },
      {
        columns: [
          { wrapper: 'component3', components: [{
            item: 'Product Title',
            component: ProductTitleComponent
          },
          {
            item: 'Product Description',
            component: ProductDescriptionComponent
          }]}
        ]
      },
      {
        columns: [
          { wrapper: 'component4', components: [] },
          { wrapper: 'component5', components: [] },
          { wrapper: 'component6', components: [] }
        ]
      },
    ]
  };

  componentList = [];

  attributes = [
    {
      item: 'Columns',
      component: ColumnsComponent
    },
    {
      item: 'Image',
      component: ImageComponent
    },
    {
      item: 'Product ID',
      component: ProductIdComponent
    },
    {
      item: 'Product Title',
      component: ProductTitleComponent
    },
    {
      item: 'Product Description',
      component: ProductDescriptionComponent
    },
    {
      item: 'Product Features',
      component: ProductFeaturesComponent
    },
    {
      item: 'Product Cerficates',
      component: CertificatesComponent
    }
  ];

  dynamicComponentInjector: Injector;
  LIST_IDS = [];

  set dynamicComponentInputTitle(data) {
    this.dynamicComponentInjector = ReflectiveInjector.resolveAndCreate([{ provide: DATA, useValue: data }], this.parentInjector);
  }

  constructor(private parentInjector: Injector) {
    const title = 'My dynamic title works!';
    const data = this.templateData;
    this.dynamicComponentInputTitle = this.templateData;

  //   setInterval(_ => {
  //     this.dynamicComponentInputTitle = Math.random();
  //  }, 1000);
  }

  ngOnInit(): void {
    this.componentHoldMake();
  }

  componentHoldMake(): void {
    const dd = [];
    const p = this.templateMetadata;
    for (const key in p) {
      if (p.hasOwnProperty(key)) {
        if (key === 'rows'){
          p[key].filter(k => { dd.push(k.columns); });
        }
      }
    }
    this.componentList = [].concat.apply([], dd);
    return;
  }

  addColumns(col, ratio?: string): void{
    const columns = [];
    for ( let i = 0; i < col; i++ ){
      columns.push({ wrapper: (Date.now() + Math.random()).toString(), components: []});
    }
    if (ratio){
      this.templateMetadata.rows.push({ columns, ratio });
    } else {
      this.templateMetadata.rows.push({ columns });
    }
    this.componentHoldMake();
    console.log(this.templateMetadata);
  }

  removeRow(row): void{
    this.templateMetadata.rows.splice(row, 1);
  }

  moveRow(oldIndex: number, newIndex): void {
    if (newIndex >= this.templateMetadata.rows.length) {
        let k = newIndex - this.templateMetadata.rows.length + 1;
        while (k--) {
          this.templateMetadata.rows.push(undefined);
        }
    }
    this.templateMetadata.rows.splice(newIndex, 0, this.templateMetadata.rows.splice(oldIndex, 1)[0]);
    // return arr; // for testing
  }

  // addComponent(component): any {
  //   this.dummyComponent = [{
  //     item: 'Columns',
  //     component: ColumnsComponent
  //   },
  //   {
  //     item: 'Image',
  //     component: ImageComponent
  //   }];
  // }

  drop(event: any) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    console.log(event.container.data);
    
  }

  dropCut(event: any) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  mouseenter(e){
    e.target.className += ' col-hovered';
    // console.log(e);
  }

  mouseleave(e){
    // console.log(e);
    e.target.classList.remove('col-hovered');
  }

  // addToArr(j, key){
  //   const obj = {};
  //   obj[key] = [];
  //   const ob = this.componentsObj;
  //   ob[key] = [];
  //   const check = this.componentsArr.filter( p => p.hasOwnProperty(key));
  //   // console.log(check.length === 0);
  //   if (check.length === 0){
  //     this.componentsArr.push(obj);
  //   }
  //   console.log(this.componentsObj);
  //   this.componentsArr = Object.entries(this.componentsObj);
  //   const response = this.componentsArr.filter(p => p.key === key);
  //   console.log(this.componentsArr);
  //   // this.componentsArr = [this.componentsObj];
  //   return response;
  //   // return this.componentsArr[j][key];
  // }

  // getComponentsArr(key){
  //   const check = this.componentsArr.filter( p => p.hasOwnProperty(key));
  //   console.log(check);
  // }

}
