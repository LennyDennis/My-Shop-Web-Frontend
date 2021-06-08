import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category-service/category.service';
import { Category } from '../../models/category';

@Component({
  selector: 'app-pos-categories',
  templateUrl: './pos-categories.component.html',
  styleUrls: ['./pos-categories.component.css']
})
export class PosCategoriesComponent implements OnInit {

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
        console.log(this.categories)
      },
      (err) => {}
    );
  }


  showDiv = {
    previous : false,
    current : false,
    next : false
  }

}
