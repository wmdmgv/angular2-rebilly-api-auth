import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { contentHeaders } from '../common/headers';

const styles   = require('./login.css');
const template = require('./login.html');

@Component({
  selector: 'login',
  template: template,
  styles: [ styles ]
})
export class Login {
  constructor(public router: Router, public http: Http) {
  }

  login(event, email, password) {
    event.preventDefault();

    let body = JSON.stringify({ email, password });
    this.http.post('https://api.rebilly.com/v2.1/signin', body, { headers: contentHeaders })
      .subscribe(
        response => {
          localStorage.setItem('token', response.json().token);
          this.router.navigate(['dashboard']);
        },
        error => {
          alert(error.text());
          console.log(error.text());
        }
      );
  }
}
