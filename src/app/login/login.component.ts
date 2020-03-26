import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() _authenticated;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  public authenticated : boolean = false;

  onSubmit(form: NgForm){
    const email = form.value.email;
    const pass = form.value.password;
    if(email !== '' && pass !== ''){
      this.authenticated = true;
      this.router.navigate(['dashboard']);
    }else{
      this.router.navigate(['error']);
    }
  }

}
