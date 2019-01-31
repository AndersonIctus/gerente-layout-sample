import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

import { Contabilista, ContabilistaSort } from '../model/Contabilista';
import { Router } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';
import { DialogService } from 'src/app/general/sample-dialog/dialog.service';

@Component({
  selector: 'app-listar-contabilistas',
  templateUrl: './listar-contabilistas.component.html',
  styleUrls: ['./listar-contabilistas.component.scss']
})
export class ListarContabilistasComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @ViewChild('main_container') main_container: ElementRef;

  height = 592;

  selection = new SelectionModel<Contabilista>(true, []);
  dataSource: MatTableDataSource<Contabilista>;

  // columnsToDisplay = ['idContabilista', 'nome', 'cpf', 'cnpj', 'fone', 'municipio', 'uf'];
  // columnsToDisplay = ['nome', 'cpf', 'cnpj', 'fone', 'municipio'];
  columnsToDisplay = ['select', 'nome', 'cpf', 'cnpj', 'fone', 'municipio', 'edit'];

  constructor(
    private dialog: DialogService,

    private router: Router
  ) { }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    // console.log( JSON.stringify(this.main_container) );
    this.height = event.target.innerHeight - 64;
  }

  ngOnInit() {
      this.dataSource = new MatTableDataSource(Contabilista.model);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

      this.height = window.innerHeight - 64;
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

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach(row => this.selection.select(row));
  }

  openCancelDialog() {
    const dialogRef = this.dialog.openDialog('Deletar Contabilista', 'Deseja excluir esses contabilistas ?');
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
