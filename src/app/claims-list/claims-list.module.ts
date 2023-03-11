import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClaimsListRoutingModule } from './claims-list-routing.module';

import { ClaimsStatusComponent } from './claims-status/claims-status.component';
import { DocumentReceivedComponent } from './document-received/document-received.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
@NgModule({
  declarations: [ClaimsStatusComponent, DocumentReceivedComponent],
  imports: [CommonModule, ClaimsListRoutingModule, AppMaterialModule],
  exports: [ClaimsStatusComponent, DocumentReceivedComponent],
})
export class ClaimsListModule {}
