// import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
// import { Tenant } from 'src/app/models/tenants.model';
// import { AuthService } from 'src/app/shared/auth.service';

// @Component({
//   selector: 'app-tenant-details',
//   templateUrl: './tenant-details.component.html',
//   styleUrls: ['./tenant-details.component.css']
// })

// export class TenantDetailsComponent implements OnInit {
//   @Input() tenant?: Tenant;
//   @Output() refreshList: EventEmitter<any> = new EventEmitter();
//   currentTenant: Tenant = {
//     title: '',
//     description: '',
//     published: false
//   };
//   message = '';

//   constructor(private authService: AuthService) { }

//   ngOnInit(): void {
//     this.message = '';
//   }

//   ngOnChanges(): void {
//     this.message = '';
//     this.currentTenant = { ...this.tenant };
//   }

//   updatePublished(status: boolean): void {
//     if (this.currentTenant.key) {
//       this.authService.update(this.currentTenant.key, { published: status })
//       .then(() => {
//         this.currentTenant.published = status;
//         this.message = 'The status was updated successfully!';
//       })
//       .catch(err => console.log(err));
//     }
//   }

//   updateTenant(): void {
//     const data = {
//       title: this.currentTenant.title,
//       description: this.currentTenant.description
//     };

//     if (this.currentTenant.key) {
//       this.authService.update(this.currentTenant.key, data)
//         .then(() => this.message = 'The tenant was updated successfully!')
//         .catch(err => console.log(err));
//     }
//   }

//   deleteTenant(): void {
//     if (this.currentTenant.key) {
//       this.authService.delete(this.currentTenant.key)
//         .then(() => {
//           this.refreshList.emit();
//           this.message = 'The tenant was updated successfully!';
//         })
//         .catch(err => console.log(err));
//     }
//   }
// }
