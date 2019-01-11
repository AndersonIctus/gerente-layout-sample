import { MatSort } from '@angular/material';

export abstract class AbstractDataSort<M> {
  constructor(public sort: MatSort) { }

  abstract compare(a: M, b: M): number;

  get sortChange() { return this.sort.sortChange; }
  get active() { return this.sort.active; }
  get direction() { return this.sort.direction; }
}
