import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';


export const fetchLocations = () => (dispatch) => {
    
    dispatch(locationsLoading());

    return fetch(baseUrl + 'locations')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(locations => dispatch(addLocations(locations)))
    .catch(error => dispatch(locationsFailed(error.message)));
}


export const locationsLoading = () => ({
    type: ActionTypes.LOCATIONS_LOADING
});

export const locationsFailed = (errmess) => ({
    type: ActionTypes.LOCATIONS_FAILED,
    payload: errmess
});

export const addLocations = (dishes) => ({
    type: ActionTypes.ADD_LOCATIONS,
    payload: dishes
});

export const fetchEquipment = () => (dispatch) => {
    
    dispatch(equipmentLoading());

    return fetch(baseUrl + 'equipment')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(equipment => dispatch(addEquipment(equipment)))
    .catch(error => dispatch(equipmentFailed(error.message)));
}


export const equipmentLoading = () => ({
    type: ActionTypes.EQUIPMENT_LOADING
});

export const equipmentFailed = (errmess) => ({
    type: ActionTypes.EQUIPMENT_FAILED,
    payload: errmess
});

export const addEquipment = (dishes) => ({
    type: ActionTypes.ADD_EQUIPMENT,
    payload: dishes
});

export const postEquipment = (dishId, rating, author, comment) => (dispatch) => {

    const newEquipment = {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    };
    newEquipment.date = new Date().toISOString();
    
    return fetch(baseUrl + 'equipment', {
        method: "POST",
        body: JSON.stringify(newEquipment),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            throw error;
      })
    .then(response => response.json())
    .then(response => dispatch(addEquipment(response)))
    .catch(error =>  { console.log('post equipment', error.message);
      alert('Your equipment could not be posted\nError: '+error.message); });
};

export const fetchService = () => (dispatch) => {
    
    dispatch(serviceLoading());

    return fetch(baseUrl + 'services')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(promos => dispatch(addService(promos)))
    .catch(error => dispatch(serviceFailed(error.message)));
}


export const serviceLoading = () => ({
    type: ActionTypes.SERVICE_LOADING
});

export const serviceFailed = (errmess) => ({
    type: ActionTypes.SERVICE_FAILED,
    payload: errmess
});

export const addService = (dishes) => ({
    type: ActionTypes.ADD_SERVICE,
    payload: dishes
});

export const postService = (dishId, rating, author, comment) => (dispatch) => {

    const newService = {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    };
    newService.date = new Date().toISOString();
    
    return fetch(baseUrl + 'comments', {
        method: "POST",
        body: JSON.stringify(newService),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            throw error;
      })
    .then(response => response.json())
    .then(response => dispatch(addService(response)))
    .catch(error =>  { console.log('post service', error.message);
      alert('Your service could not be posted\nError: '+error.message); });
};