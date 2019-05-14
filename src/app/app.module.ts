import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule,
         MatListModule, MatInputModule, MatFormFieldModule, MatCardModule,
         MatSelectModule, MatOptionModule, MatProgressSpinnerModule, MatTableModule,
         MatPaginatorModule, MatSortModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { LayoutModule } from '@angular/cdk/layout';

import { GeneralModule } from './general/general.module';
import { ContabilistaModule } from './main/contabilista/contabilista.module';

import { AppComponent } from './app.component';

import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';

import { MainComponent } from './main/main.component';
import { TemasComponent } from './main/temas/temas.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,

    ContabilistaModule,
    GeneralModule,

    // MATERIAL MODULES
    LayoutModule,
    MatDialogModule,
    MatToolbarModule,
    MatSidenavModule,

    MatIconModule,
    MatListModule,

    MatCardModule,
    MatOptionModule,

    // FORMS AND COMPOENNETS MODULES
    MatFormFieldModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatButtonModule,

    // TABLE MODULE
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,

    NgbModule
  ],
  declarations: [
    AppComponent,
    MenuComponent,

    LoginComponent,
    MainComponent,
    TemasComponent
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
