import { Component, OnInit } from '@angular/core';
import { flatMap } from 'rxjs';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css'],
})
export class RegistrationFormComponent implements OnInit {
  constructor() {}

  mobNumberPattern = '^((\\+91-?)|0)?[0-9]{10}$';
  personalImage: string = 'assets/undraw_Personal_info_re_ur1n.png';
  onSubmit(data: any) {
    console.log('your Data', JSON.stringify(data.value));
    data.reset();
  }
  ngOnInit(): void {}
}
