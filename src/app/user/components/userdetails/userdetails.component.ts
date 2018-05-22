import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../shared/models/user';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  constructor() { }

  @Input() user: User;

  ngOnInit() {
  }

}
