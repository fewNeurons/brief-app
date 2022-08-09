import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth) { }

  async register(email, password, name) {
    try {
      const user = await createUserWithEmailAndPassword(this.auth, email, password)
      return user
    } catch (e) {
      return false
    }
  }

  async login(email, password) {
    try {
      const user = await signInWithEmailAndPassword(this.auth, email, password)
      return user
    } catch (e) {
      return false
    }
  }

  logout() {
    return signOut(this.auth)
  }
}
