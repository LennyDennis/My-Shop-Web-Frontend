import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

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
import { ProfileComponent } from './profile/profile.component';
import { ProfileDialogComponent } from './dialog-box/profile-dialog/profile-dialog.component';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { PosCategoriesComponent } from './pos/pos-categories/pos-categories.component';
import { PosProductsComponent } from './pos/pos-products/pos-products.component';
import { PosHomeComponent } from './pos/pos-home/pos-home.component';
import { PosCheckoutComponent } from './pos/pos-checkout/pos-checkout.component';
import { PosBalancesComponent } from './pos/pos-balances/pos-balances.component';
import { PosBalancePaymentComponent } from './pos/pos-balance-payment/pos-balance-payment.component';
import { OutOfStockComponent } from './out-of-stock/out-of-stock.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { ProductService } from './services/product-service/product.service';
import { NotificationService } from './services/notification-service/notification.service';
import { CategoryService } from './services/category-service/category.service';
import { SalesService } from './services/sales/sales.service';
import { UserService } from './services/user-service/user.service';
import { CartService } from './services/cart-service/cart.service';
import { NgSelectModule} from '@ng-select/ng-select';
import { NgOptionHighlightModule } from '@ng-select/ng-option-highlight';

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
    NotificationsComponent,
    ProfileComponent,
    ProfileDialogComponent,
    MyDashboardComponent,
    PosCategoriesComponent,
    PosProductsComponent,
    PosHomeComponent,
    PosCheckoutComponent,
    PosBalancesComponent,
    PosBalancePaymentComponent,
    OutOfStockComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    NgSelectModule,
    NgOptionHighlightModule,
  ],
  providers: [
    ProductService,
    NotificationService,
    CategoryService,
    SalesService,
    UserService,
    CartService
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
