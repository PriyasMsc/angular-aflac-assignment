import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppMaterialModule } from './app-material/app-material.module';
import { HeaderComponent } from './header/header.component';
import { ClaimsListComponent } from './claims-list/claims-list.component';
import { ClaimsListModule } from "./claims-list/claims-list.module";

@NgModule({
    declarations: [AppComponent, HeaderComponent, ClaimsListComponent],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        BrowserAnimationsModule,
        AppMaterialModule,
        ClaimsListModule
    ]
})
export class AppModule {}
