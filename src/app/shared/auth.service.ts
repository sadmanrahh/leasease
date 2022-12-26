import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
import { GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider} from '@angular/fire/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth : AngularFireAuth, private router : Router) { }

  
  login(email : string, password : string) {
    this. fireauth.signInWithEmailAndPassword(email, password).then( () => {
        localStorage.setItem('token', 'true');
        this.router.navigate(['properties']);
    }, err => {
        alert(err.message);
        this.router.navigate(['/overview']);
    })
  }

  register(email : string, password : string) {
    this. fireauth.createUserWithEmailAndPassword(email, password).then( () => {
        alert('Registration Successful');
        this.router.navigate(['login']);
    }, err => {
        alert(err.message);
        this.router.navigate(['/register']);
    })
  }

  logout(){
    this.fireauth.signOut().then( () => {
      localStorage.removeItem('token'),
      this.router.navigate(['/overview']);
    }, err => {
      alert(err.message);
    })
  }
  googleSignIn() {
    return this.fireauth.signInWithPopup(new GoogleAuthProvider).then(res => {

      this.router.navigate(['/lease-option']);
      localStorage.setItem('token',JSON.stringify(res.user?.uid));

    }, err => {
      alert(err.message);
    })
  }
}
