import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class WDataService {

  constructor(private http: HttpClient) { }

  /**
  * Returns all data from commerce
  * @returns json
  */
  getProducts(apiUrl: string, consumerKey: string, consumerSecret: string) {
    console.log(`${apiUrl}/wp-json/wc/v3/products?consumer_key=${consumerKey}
    &consumer_secret=${consumerSecret}`)
    return this.http.get(
      `${apiUrl}/wp-json/wc/v3/products?consumer_key=${consumerKey}
      &consumer_secret=${consumerSecret}`
    )
  }
  
}
