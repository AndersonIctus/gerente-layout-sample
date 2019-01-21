
import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'acs-dialog',
  templateUrl: './general-dialog.component.html',
  styleUrls: ['./general-dialog.component.css']
})
export class GeneralDialogComponent<T> implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @ViewChild('filter') filter: ElementRef;

  title = 'Dialog Title';
  columnsToDisplay: string[] = []; // ['codigo', 'descricao'];
  dataSource: MatTableDataSource<T>;

  actual_response: any;

  constructor(
    public dialogRef: MatDialogRef<GeneralDialogComponent<T>>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.title = this.data.title;
    this.columnsToDisplay = this.data.columnsToDisplay;

    this.dataSource = new MatTableDataSource( this.data.dataModel );
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getResponse() {
    return this.actual_response;
  }

  choseRow(row: T) {
    this.dialogRef.close( row );
  }

  filterInput(event) {
    if (event['keyCode'] === 13) { // faz o search se apertar enter !
      this.searchFilter();
    }
  }

  searchFilter() {
    let filterValue = this.filter.nativeElement.value;
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches

    this.dataSource.filter = filterValue;
  }
}
