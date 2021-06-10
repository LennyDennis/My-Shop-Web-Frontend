import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { CategoryService } from 'src/app/services/category-service/category.service';

@Component({
  selector: 'app-pos-categories',
  templateUrl: './pos-categories.component.html',
  styleUrls: ['./pos-categories.component.css'],
})
export class PosCategoriesComponent implements OnInit {

  @Output() displayOptionEvent = new EventEmitter<Boolean>();
  @Output() categoryIdEvent = new EventEmitter<String>();

  categories = [];

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
    this.displayOptionEvent.emit(false);
    this.categoryIdEvent.emit(categoryId);
  }

  showDiv = {
    previous: false,
    current: false,
    next: false,
  };
}
