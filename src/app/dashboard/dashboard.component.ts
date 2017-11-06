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
  showtoall = false;
  showtoadmin = false;
  ngOnInit() {
  }
  onSignup(email: string, name: string, password: string) {
    this.service.onSignup(email, name, password).subscribe(res => console.log(res));
  }

  setAttendance(date: string) {
    this.service.setAttendance(date).subscribe(res => {alert(JSON.parse(res.text()));})
  }

  show() {
    this.showtoall = true;
  }

  show1() {
    this.showtoadmin = true;
  }

  logout() {
    this.service.email = '';
    this.router.navigate(["/login"]);
  }
}
