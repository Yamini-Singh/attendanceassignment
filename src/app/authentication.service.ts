import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AuthenticationService {
  email= '';
  role:number;
  constructor(private http: Http) { }


  login(email: string) {
     return this.http.get('http://localhost:8888/api/v1/getUser/' + email);
  }
  onSignup(email: string, name: string, password: string) {
    return this.http.post('http://localhost:8888/api/v1/createUser',
    ({ email : email , name: name, password: password}));
  }

  setAttendance(date: string) {
    return this.http.post('http://localhost:8888/api/v1/setattendance',
    ({email: this.email, date : date}));
  }

  getAttendance() {
    return this.http.get('http://localhost:8888/api/v1/getattendance/' + this.email);
  }
}
