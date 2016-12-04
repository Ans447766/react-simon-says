import {
  START_PRESENTATION,
  FINISH_PRESENTATION,
  GUESS_COLOR,
  NEXT_LEVEL,
  START_GAME,
} from '../actions/game';

const initialState = {
  presentation: true,
  gameOver: false,
  score: 0,
  highscore: 0,
}

export default function game(state = initialState, action) {
  const { type, payload } = action;
  switch(type) {
    case START_GAME:
      return {
        ...state,
        gameOver: false,
        score: 0,
      }

    case START_PRESENTATION:
      return {
        ...state,
        presentation: true,
      }

    case FINISH_PRESENTATION:
      return {
        ...state,
        presentation: false,
      }

    case NEXT_LEVEL:
      return {
        ...state,
        score: state.score + 1,
      }

    case GUESS_COLOR:
      return {
        ...state,
        gameOver: !payload.succeeded,
        highscore: state.score > state.highscore ? state.score : state.highscore,
      }

    default:
      return state;
  }
}
