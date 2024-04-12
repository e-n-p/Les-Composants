import { Component } from '@angular/core';
import { User } from '../models/interfaces/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

    newUser:User = {
      firstname: "",
      lastname: "",
      email: "",
      password: ""
    }

    onSubmit(): void{
      console.log(this.newUser);
    }
}
