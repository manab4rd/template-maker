import { Injectable, ComponentFactoryResolver, Inject } from '@angular/core';
import { ColumnsComponent } from './columns/columns.component';

@Injectable({
  providedIn: 'root'
})
export class ComponentsService {
  factoryResolver: any;
  rootViewContainer: any;

  constructor(@Inject(ComponentFactoryResolver) factoryResolver) {
    this.factoryResolver = factoryResolver;
  }
  setRootViewContainerRef(viewContainerRef) {
    this.rootViewContainer = viewContainerRef;
  }
  addDynamicComponent() {
    const factory = this.factoryResolver
                        .resolveComponentFactory(ColumnsComponent);
    const component = factory
      .create(this.rootViewContainer.parentInjector);
    this.rootViewContainer.insert(component.hostView);
  }
}
