import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingComponent} from './landing/landing.component';
import {ItemComponent} from './item/item.component';
import {PurchaseComponent} from './purchase/purchase.component';




const routes: Routes = [
  { path: "landing", component: LandingComponent },
  { path: "item", component: ItemComponent },
  { path: "purchase", component: PurchaseComponent },
  { path: "**", redirectTo: "landing" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
