import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  user: any ;
  constructor(private router: Router,private service: AuthenticationService) { }

  ngOnInit() {
  }

  login (email: string , password : string) {
     this.service.login(email)
     .subscribe(res => 
      {
      console.log(res); // For testing purpose only
      this.user = JSON.parse(res.text()); 
      console.log(this.user); // For testing purpose only
      if (this.user == null) {
       console.log('Error occurred'); // For testing purpose only
       alert('Error occurred ');
     } else if (this.user.password === password) {
       console.log("Successfully logged in")  // For testing purpose only
        this.router.navigate(['/dashboard']);
       this.service.email = this.user.email;
       this.service.role = this.user.role;
       console.log(this.service.email);   // For testing purpose only

     } else {
       console.log('Error occurred');
       alert('Error occurred');
     }
 });
  }
}
