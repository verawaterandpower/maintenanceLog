import {createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createForms } from 'react-redux-form';
import { InitialNewEquip, InitialNewService } from './forms';
import { Equipment } from './equipment';
import { Locations } from './locations';
import {Services} from './services';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            locations: Locations,
            equipment:Equipment,
            services: Services,
            ...createForms({
                newService: InitialNewService,
                newEquip: InitialNewEquip
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}