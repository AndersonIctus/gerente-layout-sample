import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
import { TemasComponent } from './main/temas/temas.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,

    LoginComponent,
    MainComponent,
    TemasComponent
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
    MatSortModule,

    NgbModule.forRoot()
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
