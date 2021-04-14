import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { CategoriesComponent } from './categories/categories.component';
import { MaterialModule } from './material/material.module';
import { CategoryDialogComponent } from './dialog-box/category-dialog/category-dialog.component';
import { ProductDialogComponent } from './dialog-box/product-dialog/product-dialog.component';
import { ProductsComponent } from './products/products.component';
import { GeneralSalesComponent } from './sales/general-sales/general-sales.component';
import { BalancesComponent } from './sales/balances/balances.component';
import { MostSoldComponent } from './sales/most-sold/most-sold.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeDialogComponent } from './dialog-box/employee-dialog/employee-dialog.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerDialogComponent } from './dialog-box/customer-dialog/customer-dialog.component';
import { CategoriesReportComponent } from './reports/categories-report/categories-report.component';
import { ProductsReportComponent } from './reports/products-report/products-report.component';
import { SalesReportComponent } from './reports/sales-report/sales-report.component';
import { EmployeesReportComponent } from './reports/employees-report/employees-report.component';
import { BalancesReportComponent } from './reports/balances-report/balances-report.component';
import { CustomerReportComponent } from './reports/customer-report/customer-report.component';
import { NotificationsComponent } from './notifications/notifications.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    TransactionsComponent,
    CategoriesComponent,
    CategoryDialogComponent,
    ProductDialogComponent,
    ProductsComponent,
    GeneralSalesComponent,
    BalancesComponent,
    MostSoldComponent,
    EmployeesComponent,
    EmployeeDialogComponent,
    CustomersComponent,
    CustomerDialogComponent,
    CategoriesReportComponent,
    ProductsReportComponent,
    SalesReportComponent,
    EmployeesReportComponent,
    BalancesReportComponent,
    CustomerReportComponent,
    NotificationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
