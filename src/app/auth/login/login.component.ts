import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit, OnDestroy {
  isLoading = false;
  private authStatusSubs: Subscription;
  public authService= inject(AuthService)
  ngOnInit(): void {
    this.authStatusSubs = this.authService.getAuthStatusListener()
    .subscribe(authStatus =>{
      this.isLoading = false;
    })
  }
  onLogin(form: NgForm) {
    if(form.invalid) {
      return;
    }
    this.isLoading = true;
    this.authService.login(form.value.email, form.value.password);
  }
  ngOnDestroy(): void {
    this.authStatusSubs.unsubscribe();
  }
}
