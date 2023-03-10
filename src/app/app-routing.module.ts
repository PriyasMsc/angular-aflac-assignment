import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClaimsListModule } from './claims-list/claims-list.module';
const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./claims-list/claims-list.module').then(
        (m) => m.ClaimsListModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
