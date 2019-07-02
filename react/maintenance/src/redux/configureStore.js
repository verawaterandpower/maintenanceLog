import {createStore, combineReducers, applyMiddleware } from 'redux';
import {EQUIPLIST} from '../shared/equipList';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createForms } from 'react-redux-form';
import { InitialNewEquip, InitialNewService } from './forms';



export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            equipList: EQUIPLIST,
            
            ...createForms({
                newService: InitialNewService,
                newEquip: InitialNewEquip
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}