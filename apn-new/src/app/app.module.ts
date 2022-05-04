import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { productListComponent } from './product/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductDetailsComponent } from './product/product-details.component';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    productListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailsComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'product',component:productListComponent},
      {path:'product/:id', component:ProductDetailsComponent},
      {path:'welcome',component:WelcomeComponent},
      {path:'' ,redirectTo:'welcome', pathMatch:'full'},
      {path:'**' ,redirectTo:'welcome', pathMatch:'full'}
    ])
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

