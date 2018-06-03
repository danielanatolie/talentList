import { combineReducers } from 'redux';
import TalentsReducer from './reducer_talents';
import ActiveTalent from './reducer_active_talent';

const rootReducer = combineReducers({
  talents: TalentsReducer,
  activeTalent: ActiveTalent
});

export default rootReducer;
