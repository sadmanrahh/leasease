import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-lease-option',
  templateUrl: './lease-option.component.html',
  styleUrls: ['./lease-option.component.css']
})
export class LeaseOptionComponent {


  constructor (private router: Router) {}
  

  viewlease(): void {
    this.router.navigate(['/viewedit_lease'])
  }





}
