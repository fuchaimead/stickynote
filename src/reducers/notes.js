const notes = ( state = [], action ) => {
  switch(action.type) {
    case 'ADD_NOTE':
      return [action.note, ...state];
    case 'DELETE_NOTE':
      return state.filter( note => note.id !== action.id )
    default:
      return state
  }
}

export default notes;