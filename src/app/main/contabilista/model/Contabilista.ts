import { AbstractDataSort } from 'src/app/general/AbstractDataSort';
import { MatSort } from '@angular/material';

export class Contabilista {
  idContabilista: number;
  nome: string;
  cpf: string;
  cnpj: string;
  fone: string;
  municipio: string;
  uf: string;

  crc?: string;
  codMunicipio?: string;
  endereco?: string;
  numero?: string;
  complemento?: string;
  bairro?: string;
  cep?: string;
  fax?: string;
  email?: string;

  // tslint:disable-next-line:member-ordering
  static model?: Contabilista[] = [
      { idContabilista: 1, nome: 'Cassio', cpf: '456.331.183-91', cnpj: '02.986.672/0001-43',
          fone: '303292812', municipio: 'FORTALEZA', uf: 'CE' },
      { idContabilista: 2, nome: 'Welligton', cpf: '456.331.183-91', cnpj: '02.986.672/0001-43',
          fone: '8534563012', municipio: 'FORTALEZA', uf: 'CE' },
      { idContabilista: 3, nome: 'Augusto', cpf: '384.977.524-06', cnpj: '02.986.672/0001-43',
          fone: '8534563012', municipio: 'FORTALEZA', uf: 'CE' },
      { idContabilista: 4, nome: 'Daniel', cpf: '082.932.198-87', cnpj: '02.986.672/0001-43',
          fone: '85923568129', municipio: 'FORTALEZA', uf: 'CE' },
      { idContabilista: 5, nome: 'Murilo', cpf: '156.932.198-22', cnpj: '02.986.672/0001-43',
          fone: '85923568129', municipio: 'FORTALEZA', uf: 'CE' },
      { idContabilista: 6, nome: 'Ana Paula', cpf: '954.932.198-88', cnpj: '02.986.672/0001-43',
          fone: '85923568129', municipio: 'FORTALEZA', uf: 'CE' },
      { idContabilista: 7, nome: 'Alicia', cpf: '276.932.198-45', cnpj: '02.986.672/0001-43',
          fone: '85923568129', municipio: 'FORTALEZA', uf: 'CE' },
      { idContabilista: 8, nome: 'Amanda', cpf: '276.932.198-45', cnpj: '02.986.672/0001-43',
          fone: '85923568129', municipio: 'FORTALEZA', uf: 'CE' },
      { idContabilista: 9, nome: 'Danilo', cpf: '276.932.198-45', cnpj: '02.986.672/0001-43',
          fone: '85923568129', municipio: 'FORTALEZA', uf: 'CE' },
      { idContabilista: 10, nome: 'Camila', cpf: '276.932.198-45', cnpj: '02.986.672/0001-43',
          fone: '85923568129', municipio: 'FORTALEZA', uf: 'CE' },
      { idContabilista: 11, nome: 'Paulo', cpf: '276.932.198-45', cnpj: '02.986.672/0001-43',
          fone: '85923568129', municipio: 'FORTALEZA', uf: 'CE' },
      { idContabilista: 12, nome: 'Leonardo', cpf: '276.932.198-45', cnpj: '02.986.672/0001-43',
          fone: '85923568129', municipio: 'FORTALEZA', uf: 'CE' },
      { idContabilista: 13, nome: 'Douglas', cpf: '276.932.198-45', cnpj: '02.986.672/0001-43',
          fone: '85923568129', municipio: 'FORTALEZA', uf: 'CE' },
      { idContabilista: 14, nome: 'Emanuela', cpf: '276.932.198-45', cnpj: '02.986.672/0001-43',
          fone: '85923568129', municipio: 'FORTALEZA', uf: 'CE' },
      { idContabilista: 15, nome: 'Gabriela', cpf: '276.932.198-45', cnpj: '02.986.672/0001-43',
          fone: '85923568129', municipio: 'FORTALEZA', uf: 'CE' },
      { idContabilista: 16, nome: 'Gomes', cpf: '276.932.198-45', cnpj: '02.986.672/0001-43',
          fone: '85923568129', municipio: 'FORTALEZA', uf: 'CE' },
      { idContabilista: 17, nome: 'Erica', cpf: '276.932.198-45', cnpj: '02.986.672/0001-43',
          fone: '85923568129', municipio: 'FORTALEZA', uf: 'CE' },
      { idContabilista: 18, nome: 'Helio', cpf: '276.932.198-45', cnpj: '02.986.672/0001-43',
          fone: '85923568129', municipio: 'FORTALEZA', uf: 'CE' },
      { idContabilista: 19, nome: 'Carla', cpf: '276.932.198-45', cnpj: '02.986.672/0001-43',
          fone: '85923568129', municipio: 'FORTALEZA', uf: 'CE' },
      { idContabilista: 20, nome: 'Patricia', cpf: '276.932.198-45', cnpj: '02.986.672/0001-43',
          fone: '85923568129', municipio: 'FORTALEZA', uf: 'CE' },
  ];
}

export class ContabilistaSort extends AbstractDataSort<Contabilista> {

  constructor(sort: MatSort) { super(sort); }

  compare(a: Contabilista, b: Contabilista): number {
    const isAsc = this.sort.direction === 'asc';

    if (this.active === 'select') { return compare(a['nome'], b['nome'], isAsc); }

    switch (this.active) {
      case 'idContabilista': return compare(+a.idContabilista, +b.idContabilista, isAsc);
      case 'nome':
      case 'cpf':
      case 'cnpj':
      case 'fone':
      case 'municipio':
      case 'uf': return compare(a[this.active], b[this.active], isAsc);

      default: return 0;
    }
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
