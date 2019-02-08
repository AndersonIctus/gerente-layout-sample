import { Component, OnInit, OnDestroy } from '@angular/core';
import {MatDialog} from '@angular/material';

import { ChangeThemeService } from './general/themes/change-theme.service';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';

  // use this to set correct theme class on app holder
  // eg: <div [class]="themeClass">...</div>
  themeClass = '';
  observeThemes$;

  constructor(
    public dialog: MatDialog,
    public overlayContainer: OverlayContainer,

    public themeService: ChangeThemeService
  ) { }

  ngOnInit(): void {
    this.observeThemes$ = this.themeService
                            .observeThemeChange()
                            .subscribe( newTheme => {
                                // Change APP THEME CLASS !!
                                if (this.themeClass !== '') {
                                  this.overlayContainer.getContainerElement().classList.remove(this.themeClass);
                                }

                                this.themeClass = newTheme;
                                this.overlayContainer.getContainerElement().classList.add(this.themeClass);
                            });

    this.themeClass = this.themeService.temaAtualName;
    this.overlayContainer.getContainerElement().classList.add(this.themeClass);
  }

  ngOnDestroy(): void {
    this.observeThemes$.unsubscribe();
  }

  openDialog() {
    const dialogRef = this.dialog.open(AppComponent, {
      height: '350px'
    });

    dialogRef
      .afterClosed()
      .subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
  }
}
