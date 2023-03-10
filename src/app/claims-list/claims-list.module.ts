import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClaimsListRoutingModule } from './claims-list-routing.module';

import { ClaimsStatusComponent } from './claims-status/claims-status.component';
import { DocumentReceivedComponent } from './document-received/document-received.component';

@NgModule({
  declarations: [ClaimsStatusComponent, DocumentReceivedComponent],
  imports: [CommonModule, ClaimsListRoutingModule],
  exports: [ClaimsStatusComponent, DocumentReceivedComponent],
})
export class ClaimsListModule {}
