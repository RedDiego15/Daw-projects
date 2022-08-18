import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { LandingcarousellComponent } from './landingcarousell/landingcarousell.component';
import { LandingoptionComponent } from './landingoption/landingoption.component';
import { SizesComponent } from './sizes/sizes.component';
import { AddcartbtnComponent } from './addcartbtn/addcartbtn.component';
import { ItemdetailsComponent } from './itemdetails/itemdetails.component';
import { PurchaseitemComponent } from './purchaseitem/purchaseitem.component';
import { FinishpurchasecontainerComponent } from './finishpurchasecontainer/finishpurchasecontainer.component';
import { LandingComponent } from './landing/landing.component';
import { ItemComponent } from './item/item.component';
import { PurchaseComponent } from './purchase/purchase.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingcarousellComponent,
    LandingoptionComponent,
    SizesComponent,
    AddcartbtnComponent,
    ItemdetailsComponent,
    PurchaseitemComponent,
    FinishpurchasecontainerComponent,
    LandingComponent,
    ItemComponent,
    PurchaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
