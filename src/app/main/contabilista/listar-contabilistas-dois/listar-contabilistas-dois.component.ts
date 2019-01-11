import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import {animate, state, style, transition, trigger} from '@angular/animations';

import { Contabilista } from '../model/Contabilista';
import { Router } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';
import { DialogService } from 'src/app/general/sample-dialog/dialog.service';

@Component({
  templateUrl: './listar-contabilistas-dois.component.html',
  styleUrls: ['./listar-contabilistas-dois.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])
  ]
})
export class ListarContabilistasDoisComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  selection = new SelectionModel<Contabilista>(true, []);
  dataSource: MatTableDataSource<Contabilista>;
  expandedElement: Contabilista | null;

  // columnsToDisplay = ['idContabilista', 'nome', 'cpf', 'cnpj', 'fone', 'municipio', 'uf'];
  // columnsToDisplay = ['nome', 'cpf', 'cnpj', 'fone', 'municipio'];
  // columnsToDisplay = ['select', 'nome', 'cpf', 'cnpj', 'fone', 'municipio', 'edit'];
  columnsToDisplay = ['idContabilista', 'nome', 'fone'];

  constructor(
    private dialog: DialogService,

    private router: Router
  ) { }

  ngOnInit() {
      this.dataSource = new MatTableDataSource(Contabilista.model);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  hasSelectedValue() {
    return this.selection.isEmpty() === false;
  }

  isSelectedRow(row: Contabilista) {
    return this.selection.selected[0].idContabilista === row.idContabilista;
  }

  selectRow(row: Contabilista) {
    if ( this.selection.isEmpty() === false && this.isSelectedRow(row) === true ) {
      this.selection.toggle(row);
    } else {
      this.selection.clear();
      this.selection.toggle(row);
    }
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach(row => this.selection.select(row));
  }

  openCancelDialog() {
    const contTexto = (this.selection.selected.length === 1) ? '' : 'esses contabilistas';
    const dialogRef = this.dialog.openDialog('Deletar Contabilista', `Deseja excluir ${contTexto} ?`);
    dialogRef
      .beforeClose()
      .subscribe( (result) => {
        if ( result === true) {
          const ids = this.selection.selected.map( ele => ele.idContabilista );

          this.dataSource.data = this.dataSource.data.filter(ele => {
            return ids.includes(ele.idContabilista) === false;
          });

          this.selection.clear();
        }
      });
  }

}
