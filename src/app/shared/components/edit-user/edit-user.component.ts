import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models/user';
import { AuthService } from '../../../core/providers/auth/auth.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user: User;
  private userDetailsForm: FormGroup;

  private countries = ["Denmark", "Sweden", "Norway"];
  private favweapons = ["AK-47", "Galil AR", "M4A4", "M4A1-S", "AWP", "FAMAS", "Desert Eagle"];
  private ranks = ["Silver1", "Silver2", "Silver3", "SilverElite"];

  constructor(private authService: AuthService, private fb: FormBuilder) {
    this.authService.user$.subscribe(data => this.user = data);
   }

  ngOnInit() {

    this.userDetailsForm = this.fb.group({
      firstname: [''],
      lastname: [''],
      age: [],
      country: [''],
      favweap: [''],
      rank: [''],
      clan: ['']

    });

  }



  changeUserDetails() {

  }

}
