import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { IUser } from 'src/app/interfaces/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name : string = '';
  password : string = '';
  email: string = '';
  confirmPassword : string = '';

  constructor(private authService: AuthService, private router : Router) { }

  ngOnInit(): void {
  }

  signUp() {
    let user : IUser = { name: this.name, password: this.password, email: this.email};
    this.authService.SignUp(user).subscribe(response => {
      alert('Usuario creado exitosamente!');
      this.router.navigate(['/login']);
    });
  }

}
