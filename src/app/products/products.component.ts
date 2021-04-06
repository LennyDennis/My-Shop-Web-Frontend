import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/models/product';
import { ProductDialogComponent } from '../dialog-box/product-dialog/product-dialog.component';

const PRODUCT_DATA: Product[] = [
  {id: 1, name: 'Watch',category:'Electronic',buyingPrice:100,sellingPrice:200,maxDiscount:50,quantity:1,status:'Active'},
  {id: 2, name: 'Watch',category:'Electronic',buyingPrice:100,sellingPrice:200,maxDiscount:50,quantity:1,status:'Active'},
  {id: 3, name: 'Watch',category:'Electronic',buyingPrice:100,sellingPrice:200,maxDiscount:50,quantity:1,status:'Active'},
  {id: 4, name: 'Watch',category:'Electronic',buyingPrice:100,sellingPrice:200,maxDiscount:50,quantity:1,status:'Active'},
  {id: 5, name: 'Watch',category:'Electronic',buyingPrice:100,sellingPrice:200,maxDiscount:50,quantity:1,status:'Active'},
  {id: 6, name: 'Watch',category:'Electronic',buyingPrice:100,sellingPrice:200,maxDiscount:50,quantity:1,status:'Active'},
  {id: 7, name: 'Watch',category:'Electronic',buyingPrice:100,sellingPrice:200,maxDiscount:50,quantity:1,status:'Active'},
  {id: 8, name: 'Watch',category:'Electronic',buyingPrice:100,sellingPrice:200,maxDiscount:50,quantity:1,status:'Active'},
  {id: 9, name: 'Watch',category:'Electronic',buyingPrice:100,sellingPrice:200,maxDiscount:50,quantity:1,status:'Active'},
  {id: 10, name: 'Watch',category:'Electronic',buyingPrice:100,sellingPrice:200,maxDiscount:50,quantity:1,status:'Active'}
];
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  displayColumns: string[] = ['no', 'productName','categoryName','buyingPrice','sellingPrice', 'maxDiscount','quantity','status','action'];
  productsArray = new MatTableDataSource(PRODUCT_DATA);

  constructor(public dialog: MatDialog) {}

    ngOnInit() {
      this.productsArray.paginator = this.paginator;
      this.productsArray.sort = this.sort;
    }

    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.productsArray.filter = filterValue.trim().toLowerCase();
    }

    openDialog(action, obj) {
      console.log
      obj.action = action;
      const dialogRef = this.dialog.open(ProductDialogComponent, {
        width: "500px",
        data: obj
      });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.event == "Add") {
        this.addProduct(result.data);
      } else if (result.event == "Edit") {
        this.editProduct(result.data);
      } else if (result.event == "Delete") {
        this.deleteProduct(result.data);
      } else if (result.event == "AddStock") {
        this.addProductStock(result.data);
      }
    });
  }

  addProduct(row_obj) {
  }

  editProduct(row_obj) {

  }

  deleteProduct(row_obj) {

  }

  addProductStock(row_obj) {

  }

}
