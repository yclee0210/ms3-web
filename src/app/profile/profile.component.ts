import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  dummyNum = [1,2,3,4];

  constructor() {

  }

  ngOnInit() {
  }

}