import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MostSold } from 'src/app/models/most-sold';

const MOST_SOLD_DATA: MostSold[] = [
  {id: 1,product: 'Watch',category:'Electronics',soldProducts:2,stockBalance:500,restockDate:'10/10/2021'},
  {id: 2,product: 'Watch',category:'Electronics',soldProducts:2,stockBalance:500,restockDate:'10/10/2021'},
  {id: 3,product: 'Watch',category:'Electronics',soldProducts:2,stockBalance:500,restockDate:'10/10/2021'},
  {id: 5,product: 'Watch',category:'Electronics',soldProducts:2,stockBalance:500,restockDate:'10/10/2021'},
  {id: 6,product: 'Watch',category:'Electronics',soldProducts:2,stockBalance:500,restockDate:'10/10/2021'},
  {id: 7,product: 'Watch',category:'Electronics',soldProducts:2,stockBalance:500,restockDate:'10/10/2021'},
  {id: 8,product: 'Watch',category:'Electronics',soldProducts:2,stockBalance:500,restockDate:'10/10/2021'},
  {id: 9,product: 'Watch',category:'Electronics',soldProducts:2,stockBalance:500,restockDate:'10/10/2021'},
  {id: 10,product: 'Watch',category:'Electronics',soldProducts:2,stockBalance:500,restockDate:'10/10/2021'}
];

@Component({
  selector: 'app-most-sold',
  templateUrl: './most-sold.component.html',
  styleUrls: ['./most-sold.component.css']
})
export class MostSoldComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  displayColumns: string[] = ['no', 'productName','categoryName','soldProducts','stockBalance','restockDate'];
  mostSoldProductsArray = new MatTableDataSource(MOST_SOLD_DATA);

  constructor(public dialog: MatDialog) {}

    ngOnInit() {
      this.mostSoldProductsArray.paginator = this.paginator;
      this.mostSoldProductsArray.sort = this.sort;
    }

    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.mostSoldProductsArray.filter = filterValue.trim().toLowerCase();
    }

}
