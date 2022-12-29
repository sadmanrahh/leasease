import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
import { GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider} from '@angular/fire/auth'
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
// import { Tenant } from '../models/tenants.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private databasePath = '/Tenants';

  // tenantsRef: AngularFireList<Tenant>

  constructor(private fireauth : AngularFireAuth, private router : Router, private db: AngularFireDatabase) {}
  // { 
  //   this.tenantsRef = db.list(this.databasePath);
  // }

  // getAll(): AngularFireList<Tenant> {
  //   return this.tenantsRef;
  // }

  // create(tenants: Tenant): any {
  //   return this.tenantsRef.push(tenants);
  // }

  // update(key: string, value: any): Promise<void> {
  //   return this.tenantsRef.update(key, value);
  // }

  // delete(key: string): Promise<void> {
  //   return this.tenantsRef.remove(key);
  // }

  // deleteAll(): Promise<void> {
  //   return this.tenantsRef.remove();
  // }
  
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
