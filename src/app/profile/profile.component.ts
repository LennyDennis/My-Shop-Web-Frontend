import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  editAction:string;

  constructor() { }

  ngOnInit(): void {
  }

  editProfile(action, obj) {
    this.editAction = action;


}

}
