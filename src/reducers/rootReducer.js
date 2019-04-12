const initState = {
  posts: [
    {
      id: '1', title: 'Заголовок 1', body: 'Текст 1', comments: [
        { id: '1', body: 'Комментарий 1', },
        { id: '2', body: 'Комментарий 2', },
      ],
    },
    { id: '2', title: 'Заголовок 2', body: 'Текст 2', comments: [], },
    { id: '3', title: 'Заголовок 3', body: 'Текст 3', comments: [], },
  ],
  isOpen: false,
}

const rootReducer = (state = initState, action) => {
  if (action.type === 'SHOW_COMMENTS') {
    return {
      ...state,
      isOpen: !state.isOpen,
    }
  }
  return state;
}

export default rootReducer;