import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeesComponent } from './employees/employees.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { BalancesComponent } from './sales/balances/balances.component';
import { GeneralSalesComponent } from './sales/general-sales/general-sales.component';
import { MostSoldComponent } from './sales/most-sold/most-sold.component';


const routes: Routes = [
  {
    path: "",
    redirectTo: "/dashboard",
    pathMatch: "full",
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "dashboard",
    component: DashboardComponent,
  },
  {
    path: "categories",
    component: CategoriesComponent,
  },
  {
    path: "products",
    component: ProductsComponent,
  },
  {
    path: "generalSale",
    component: GeneralSalesComponent,
  },
  {
    path: "balances",
    component: BalancesComponent,
  },
  {
    path: "mostSold",
    component: MostSoldComponent,
  },
  {
    path: "employees",
    component: EmployeesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
