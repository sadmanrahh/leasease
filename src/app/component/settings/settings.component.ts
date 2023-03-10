import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  
  constructor(private router: Router) {}

  aboutus() {
    this.router.navigate(['/aboutus'])

  }



  contactus(){
    this.router.navigate(['/contact'])
    
  }

  faq(){
    this.router.navigate(['/faq'])
    
  }

  logout(){
    this.router.navigate(['/overview'])
    
  }



  

}
