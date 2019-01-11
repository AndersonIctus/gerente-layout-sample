import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule,
         MatListModule, MatInputModule, MatFormFieldModule, MatCardModule,
         MatSelectModule, MatOptionModule, MatProgressSpinnerModule, MatTableModule,
         MatPaginatorModule, MatSortModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';

import { AppRoutingModule } from './app-routing.module';

import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';

import { MainComponent } from './main/main.component';
import { ContabilistaModule } from './main/contabilista/contabilista.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { GeneralModule } from './general/general.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,

    ContabilistaModule,
    GeneralModule,

    LayoutModule,
    MatDialogModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatSelectModule,
    MatOptionModule,
    MatProgressSpinnerModule,

    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
