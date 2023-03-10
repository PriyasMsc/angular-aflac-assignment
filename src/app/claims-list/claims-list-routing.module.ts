import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClaimsListComponent } from './claims-list.component';
import { ClaimsStatusComponent } from './claims-status/claims-status.component';
import { DocumentReceivedComponent } from './document-received/document-received.component';

const routes: Routes = [
  {
    path: '',
    component: ClaimsListComponent,
    children: [
      { path: '', component: ClaimsStatusComponent },
      { path: 'doc', component: DocumentReceivedComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClaimsListRoutingModule {}
