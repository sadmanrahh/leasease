import { Component, OnInit } from '@angular/core';
import { Tenant } from 'src/app/models/tenants.model';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-add-tenant',
  templateUrl: './add-tenant.component.html',
  styleUrls: ['./add-tenant.component.css']
})

export class AddTenantComponent implements OnInit {

  tenant: Tenant = new Tenant();
  submitted = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  saveTenant(): void {
    this.authService.create(this.tenant).then(() => {
      console.log('Created new item successfully!');
      this.submitted = true;
    });
  }

  newTenant(): void {
    this.submitted = false;
    this.tenant = new Tenant();
  }
}