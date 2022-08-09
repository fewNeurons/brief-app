import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string
  password: string
  constructor(private navController: NavController, private authService: AuthService) {}

  goToRegister() {
    this.navController.navigateForward('/register')
  }

  goToHome() {
    this.navController.navigateForward('/home')
  }

  async login() {
    const user = await this.authService.login(this.email, this.password)
    
    if(user) 
      this.goToHome()
    else
      window.alert('Registration failed... Please try again')
  }
}
