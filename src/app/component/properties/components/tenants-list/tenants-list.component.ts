// import { Component, OnInit } from '@angular/core';
// import { AuthService } from 'src/app/shared/auth.service';
// import { Tenant } from 'src/app/models/tenants.model';
// import { map } from 'rxjs/operators';

// @Component({
//   selector: 'app-tenants-list',
//   templateUrl: './tenants-list.component.html',
//   styleUrls: ['./tenants-list.component.css']
// })
// export class TenantsListComponent {
//   tenants?: Tenant[];
//   currentTenant?: Tenant;
//   currentIndex = -1;
//   title = '';

//   constructor(private authService: AuthService) { }

//   ngOnInit(): void {
//     this.retrieveTenants();
//   }

//   refreshList(): void {
//     this.currentTenant = undefined;
//     this.currentIndex = -1;
//     this.retrieveTenants();
//   }

//   retrieveTenants(): void {
//     this.authService.getAll().snapshotChanges().pipe(
//       map(changes =>
//         changes.map(c =>
//           ({ key: c.payload.key, ...c.payload.val() })
//         )
//       )
//     ).subscribe(data => {
//       this.tenants = data;
//     });
//   }

//   setActiveTenants(tenants: Tenant, index: number): void {
//     this.currentTenant = tenants;
//     this.currentIndex = index;
//   }

//   removeAllTenants(): void {
//     this.authService.deleteAll()
//       .then(() => this.refreshList())
//       .catch(err => console.log(err));
//   }
// }
