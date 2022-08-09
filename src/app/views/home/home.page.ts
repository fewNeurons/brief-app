import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { WDataService } from 'src/app/services/w-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  providers: [WDataService]
})
export class HomePage implements OnInit {

  apiUrl: string  = ""
  consumerKey: string  = ""
  consumerSecret: string  = ""

  products: any
  obj: Object

  constructor(
    private navController: NavController, 
    private authService: AuthService, 
    private wDataService: WDataService
    ) { }

  ngOnInit() {
    try {
      this.wDataService.getProducts(
        this.apiUrl, 
        this.consumerKey, 
        this.consumerSecret
      ).subscribe(res =>{
        this.products = res

        console.log(" this.products: ",  this.products);
      })
    } catch(e) {
      console.log(e)
    }
  }

  processedProducts() {
    let categories = ""
    this.products?.forEach(prod => {
      if(!prod.categories.length) prod.categories = '-'
      else {        
        prod.categories?.forEach((cat, i) => {
          categories += cat.name
          if(i==prod.categories.length-1) return
          categories += ', '
        })
        prod.categories = null
        prod.categories = categories
        categories = ''
      }

      if(!prod.tags.length) prod.tags = '-'
      else {      
        prod.tags?.forEach((tag, i) => {
          categories += tag.name
          if(i==prod.tags.length-1) return 
          categories += ', '
        })
        prod.tags = null
        prod.tags = categories
        categories = ''
      }
    })
    return this.products
  }

  async logout() {
    await this.authService.logout()
    this.navController.navigateForward('/login')
  }
}
