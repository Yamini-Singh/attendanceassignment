import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private service: AuthenticationService, private router : Router) { }
  dikhao = false;
  dikhaoReturns = false;
  ngOnInit() {
    console.log(this.service.role);
  }
  onSignup(email: string, name: string, password: string) {
    this.service.onSignup(email, name, password).subscribe(res => console.log(res));
  }

  setAttendance(date: string) {
    this.service.setAttendance(date).subscribe(res => console.log(res));
  }

  show() {
    this.dikhao = true;
  }

  showReturns() {
    this.dikhaoReturns = true;
  }

  logout() {
    this.service.email = '';
    this.router.navigate(["/login"]);
  }
}
