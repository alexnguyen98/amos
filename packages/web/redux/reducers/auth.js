const initialState = {
  accessToken: '',
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'SET_ACCESS_TOKEN':
      return { ...state, accessToken: action.payload }
  }
  return state
}