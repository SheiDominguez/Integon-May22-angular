import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { IUser } from 'src/app/interfaces/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() user : string = '';
  @Input() password : string = '';
  userLoggedIn : IUser;

  constructor(private authService : AuthService, private router : Router) { }

  ngOnInit(): void {
  }

  singIn() {
    //this.personaService.getPersonas().subscribe(response => this.personas = response);
    let user : IUser = { name: this.user, password: this.password, email: null};
    this.authService.SignIn(user).subscribe(response => {
      this.userLoggedIn = response['users'][0];
      this.router.navigate(['/dashboard']);
    });
  }

}
