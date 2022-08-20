import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingComponent} from './landing/landing.component';
import {ItemdetailsComponent} from './itemdetails/itemdetails.component';
import {PurchaseComponent} from './purchase/purchase.component';
import { CategoryComponent } from './category/category.component';




const routes: Routes = [
  { path: "landing", component: LandingComponent },
  { path: "itemdetails", component: ItemdetailsComponent },
  { path: "purchase", component: PurchaseComponent },
  { path: "category/:id", component: CategoryComponent },
  { path: "**", redirectTo: "landing" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
