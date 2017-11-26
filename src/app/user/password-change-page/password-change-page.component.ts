import {Component, HostBinding, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-password-change-page',
  templateUrl: './password-change-page.component.html',
  styleUrls: ['./password-change-page.component.scss']
})
export class PasswordChangePageComponent implements OnInit {
  @HostBinding('class') cssClass = 'content-container';

  passwordChangeForm: FormGroup;

  constructor(private _fb: FormBuilder) {
    this.passwordChangeForm = this._fb.group({
      password: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/[a-zA-Z0-9!@#\$%\^&.]{8,32}/),
        Validators.pattern(/.*[A-Za-z]+.*/),
        Validators.pattern(/.*[0-9]+.*/)
      ])],
      new_password: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/[a-zA-Z0-9!@#\$%\^&.]{8,32}/),
        Validators.pattern(/.*[A-Za-z]+.*/),
        Validators.pattern(/.*[0-9]+.*/)
      ])]
    });
  }

  ngOnInit() {
  }

  onSubmit({value, valid}) {
    if (valid) {
      console.log(value);
    }
  }
}
