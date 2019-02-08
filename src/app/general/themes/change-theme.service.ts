
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ChangeThemeService {
  private _temaAtual: 'default' | 'alternative-1' | 'alternative-2' = 'default';
  private themes = {
                'default': 'my-light-theme',
                'alternative-1': 'my-other-theme',
                'alternative-2': 'my-dark-theme'
              };

  private themeObserver$ = new BehaviorSubject(this.themes['default']);
  constructor() { }

  observeThemeChange() {
    return this.themeObserver$;
  }

  changeTheme(newTheme: 'default' | 'alternative-1' | 'alternative-2') {
    this._temaAtual = newTheme;
    this.themeObserver$.next( this.themes[newTheme] );
  }

  get temaAtual() {
    return this._temaAtual;
  }

  get temaAtualName() {
    return this.themes[this._temaAtual];
  }
}
