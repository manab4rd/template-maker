import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColumnsComponent } from './components/columns/columns.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { CarpenterComponent, DATA } from './carpenter/carpenter.component';
import { ImageComponent } from './components/image/image.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductTitleComponent } from './components/product-title/product-title.component';
import { ProductDescriptionComponent } from './components/product-description/product-description.component';
import { ProductFeaturesComponent } from './components/product-features/product-features.component';
import { ProductIdComponent } from './components/product-id/product-id.component';
import { CertificatesComponent } from './components/certificates/certificates.component';

@NgModule({
  declarations: [
    AppComponent,
    ColumnsComponent,
    CarpenterComponent,
    ImageComponent,
    ProductTitleComponent,
    ProductDescriptionComponent,
    ProductFeaturesComponent,
    ProductIdComponent,
    CertificatesComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    DragDropModule
  ],
  entryComponents: [ColumnsComponent, ImageComponent],
  providers: [
    { provide: DATA, useValue: '' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
