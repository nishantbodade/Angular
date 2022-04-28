import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
    selector:'pm-products',
    templateUrl:'./product-list.component.html',
    styleUrls:['./product-list.component.css']
})
export class productListComponent implements OnInit{


    pageTitle:string='Product List';
    imageWidth:number=50;
    imageMargin=2;
    showImage:boolean=false;
    private _listFilter:string='';

    products:IProduct[]=[];

    filteredproducts:IProduct[]=[];

    constructor(private ProductService : ProductService){}


    get listFilter():string{
      return this._listFilter;
    }

    set listFilter(value:string){
      this._listFilter=value;
      console.log('insetter',value);
      this.filteredproducts=this.performFilter(value);
    }


    toggleImage():void{
      this.showImage=!this.showImage;
    }

    ngOnInit(): void {
      console.log('In OnInit');
      this.products=this.ProductService.getProduct();
      this.filteredproducts=this.products;
  
    }

    performFilter(filterBy:string): IProduct[] {
      filterBy=filterBy.toLocaleLowerCase();
      return this.products.filter((product:IProduct)=>
                product.productName.toLocaleLowerCase().includes(filterBy));
    }

    onRatingClick(message:string):void{
      this.pageTitle=message;
    }

}