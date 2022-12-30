import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent {

  constructor(private router: Router){}

  modify(): void {
    this.router.navigate(['/modify'])
  }

}
