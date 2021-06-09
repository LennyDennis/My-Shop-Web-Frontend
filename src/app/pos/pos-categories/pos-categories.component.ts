import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { CategoryService } from 'src/app/services/category-service/category.service';

@Component({
  selector: 'app-pos-categories',
  templateUrl: './pos-categories.component.html',
  styleUrls: ['./pos-categories.component.css'],
})
export class PosCategoriesComponent implements OnInit {


  categories = [];
  displayOption:Boolean = true;
  category:String;

  constructor(
    private _categoryService: CategoryService
  ) {}

  ngOnInit() {
      this.getAllCategories();
  }

  getAllCategories() {
    this._categoryService.getAllCategories().subscribe(
      (res) => {
        this.categories = (<any>res).categories;
      },
      (err) => {}
    );
  }

  goToCategoryProduct(categoryId) {
    console.log(categoryId);
    this.category = categoryId;
    this.displayOption = false
  }

  displayCategories(){
    this.displayOption = true
  }

  showDiv = {
    previous: false,
    current: false,
    next: false,
  };
}
