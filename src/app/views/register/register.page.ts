import { Component, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: 'register.page.html',
  styleUrls: ['register.page.scss'],
})
export class RegisterPage {

  email: string
  password: string
  name

  constructor(private navController: NavController, private authService: AuthService) {}

  goToLogin() {
    this.navController.navigateForward('/login')
  }

  async register() {
    const user = await this.authService.register(this.email, this.password, this.name)
    console.log("user: ", user);
    
    if(user) 
      this.goToLogin()
    else
      window.alert('Registration failed... Please try again')
  }

}
