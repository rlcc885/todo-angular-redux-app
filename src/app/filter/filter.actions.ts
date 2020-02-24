import { Action } from '@ngrx/store';
import { type } from 'os';

export const SET_FILTRO = '[Filter] SET_FILTRO';

export type filtrosValidos = 'todos' | 'completados' | 'pendiente';

export class SetFiltroAction implements Action {
  readonly type = SET_FILTRO;

  constructor(public filtro: filtrosValidos) { }
}

export type acciones = SetFiltroAction;
