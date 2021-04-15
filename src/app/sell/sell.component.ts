import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';

const CATEGORY_DATA: Category[] = [
  {categoryId: 1, categoryName: 'Hydrogen 1', totalProducts: 100, status:"Active"},
  {categoryId: 2, categoryName: 'Hydrogen 2', totalProducts: 100, status:"Active"},
  {categoryId: 3, categoryName: 'Hydrogen 3', totalProducts: 100, status:"Active"},
  {categoryId: 4, categoryName: 'Hydrogen 4', totalProducts: 100, status:"Active"},
  {categoryId: 5, categoryName: 'Hydrogen 5', totalProducts: 100, status:"Active"},
  {categoryId: 6, categoryName: 'Hydrogen 6', totalProducts: 100, status:"Active"},
  {categoryId: 7, categoryName: 'Hydrogen 7', totalProducts: 100, status:"Active"},
  {categoryId: 8, categoryName: 'Hydrogen 8', totalProducts: 100, status:"Active"},
  {categoryId: 9, categoryName: 'Hydrogen 9', totalProducts: 100, status:"Active"},
  {categoryId: 10, categoryName: 'Hydrogen 10', totalProducts: 100, status:"Active"}
];

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {

  categoriesArray = CATEGORY_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
