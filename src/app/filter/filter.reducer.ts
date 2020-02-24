import * as fromFiltro from "./filter.actions";

const estadoInicial: fromFiltro.filtrosValidos = "todos";

export function filtroReducer(
  state: fromFiltro.filtrosValidos = estadoInicial,
  action: fromFiltro.acciones
  ) {
    switch ( action.type ) {
      case fromFiltro.SET_FILTRO:
        return action.filtro;
      default:
        return state;
    }
}
