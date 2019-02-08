import { Component, OnInit, HostListener } from '@angular/core';
import { ChangeThemeService } from 'src/app/general/themes/change-theme.service';

@Component({
  selector: 'app-temas',
  templateUrl: './temas.component.html',
  styleUrls: ['./temas.component.scss']
})
export class TemasComponent implements OnInit {

  height = 592;
  temaAtual: 'default' | 'alternative-1' | 'alternative-2' = 'default';

  constructor(
    public themeService: ChangeThemeService
  ) { }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    // console.log( JSON.stringify(this.main_container) );
    this.height = event.target.innerHeight - 64;
  }

  ngOnInit() {
    this.height = window.innerHeight - 64;
    this.temaAtual = this.themeService.temaAtual;
  }

  changeTheme(themeName: 'default' | 'alternative-1' | 'alternative-2') {
    this.temaAtual = themeName;

    // MUDA O TEMA UTILIZADO !!!
    this.themeService.changeTheme(this.temaAtual);
  }
}
