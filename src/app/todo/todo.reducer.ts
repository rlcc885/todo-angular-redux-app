import * as fromTodo from './todo.actions';
import { Todo } from './model/todo.model';

const todo1 = new Todo('Estudiar');
const todo2 = new Todo('Trabajar');
const todo3 = new Todo('Comer');

todo2.completado = true;

const estadoInicial: Todo[] = [todo1, todo2, todo3];

export function todoReducer ( state = estadoInicial,
                              action: fromTodo.Acciones): Todo[]{
  switch (action.type) {
    case fromTodo.AGREGAR_TODO:
      const todo = new Todo( action.texto );
      return [...state, todo];
    case fromTodo.TOGGLE_TODO:
      return state.map( todoEdit => {
        if (todoEdit.id === action.id) {
          return {
            ...todoEdit,
            completado: !todoEdit.completado
          };
        }else{
          return todoEdit;
        }
      });
    case fromTodo.EDITAR_TODO:
      return state.map( todoEdit => {
        if(todoEdit.id === action.id){
          return {
            ...todoEdit,
            texto: action.texto
          }
        }
      })
    default:
      return state;
  }
}
