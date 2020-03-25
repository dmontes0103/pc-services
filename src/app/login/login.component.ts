import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    const email = form.value.email;
    const pass = form.value.password;
    if(email === 'dmontes0103@gmail.com' && pass === '1234'){
      this.router.navigate(['dashboard']);
    }else{
      this.router.navigate(['error']);
    }
  }

}
