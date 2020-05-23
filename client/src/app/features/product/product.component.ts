import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/services/typescript-angular-client-generated';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  iProducts;
  iForm: FormGroup;
  constructor(private productService: ProductService,
    private fb: FormBuilder) {
    this.iForm = this.fb.group({
      name: new FormControl(''),
      image: new FormControl(''),
      amount: new FormControl(),
      amountUnit: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.iProducts = products;
    });
  }

  addNew() {
    this.productService.addProduct({
      name: this.iForm.controls.name.value,
      image: this.iForm.controls.image.value,
      amount: this.iForm.controls.amount.value,
      amountUnit: this.iForm.controls.amountUnit.value,
      celiac: false,
      productType: {}
    }).subscribe(resp => console.log(resp));
  }
}
