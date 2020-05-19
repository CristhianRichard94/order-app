import { Injectable } from '@angular/core';
import settings from '../../../assets/settings.json';
import { tap } from 'rxjs/operators';
import { ProductService } from './typescript-angular-client-generated';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private productService: ProductService) { }

  getProducts() {
    this.productService.configuration.basePath = settings.apiUrl;
    return this.productService.getProducts().pipe(tap(prod => console.log(prod)));
  }

}
