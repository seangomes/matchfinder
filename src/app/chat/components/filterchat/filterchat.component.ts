import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filterchat',
  templateUrl: './filterchat.component.html',
  styleUrls: ['./filterchat.component.css']
})
export class FilterchatComponent implements OnInit {

  matchTypeSearch = '';

  private matchTypeDropdown = [
    {name: "5vs5"},
    {name: "2vs2"},
    {name: "3vs3"},
    {name: "1vs1"}
  ];



  constructor() { }

  ngOnInit() {
  }

}
