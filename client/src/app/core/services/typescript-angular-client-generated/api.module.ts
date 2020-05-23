import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { OrderService } from './api/order.service';
import { OrderStateService } from './api/orderState.service';
import { ProductService } from './api/product.service';
import { ProductPriceService } from './api/productPrice.service';
import { ProductTypeService } from './api/productType.service';
import { SectionService } from './api/section.service';
import { TableService } from './api/table.service';
import { UserService } from './api/user.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    OrderService,
    OrderStateService,
    ProductService,
    ProductPriceService,
    ProductTypeService,
    SectionService,
    TableService,
    UserService ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
