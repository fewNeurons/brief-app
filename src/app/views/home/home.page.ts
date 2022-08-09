import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private navController: NavController, private authService: AuthService) { }

  ngOnInit() {
  }

  async logout() {
    await this.authService.logout()
    this.navController.navigateForward('/login')
  }
}
