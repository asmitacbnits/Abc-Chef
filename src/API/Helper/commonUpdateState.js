import { updateObject } from "./helpers";
export const setItems = (state, data, name) => {

    let updateStateName = `${name.toLowerCase()}List`;  // roleList,userList
    return updateObject(state, {
        [updateStateName]: data.data ||[],
        action: data,
        isLoading: false
    });
};

export const setItem = (state, data, name) => {
    return updateObject(state, {
        [`${name.toLowerCase()}`]: data.data,
        action: data,
        isLoading: false
    });
};
const addItem = (state, data, name) => {
    return updateObject(state, {
        action: data
    });
}
const updateItem = (state, data, name) => {
    return updateObject(state, {
        action: data
    });
}
const deleteItem = (state, data, name) => {
    return updateObject(state, {
        action: data
    });
}
export const setItemAction = (state, data, name) => {
    if (data.isSuccess) {
        switch (data.type) {
            case 'ADD': {
                return addItem(state, data, name);
            };
            case 'UPDATE': {
                return updateItem(state, data, name);
            };
            case 'DELETE': {
                return deleteItem(state, data, name);
            };
            case "GET_ALL":{
                return setItems(state,data,name);
            }
            case "GET" :{
                return setItem(state,data,name);
            }
        }
    }
    return updateObject(state, {
        action: data
    });
};
export const resetItemAction = (state, name) => {
    return updateObject(state, {
        action: {
            type: null,
            isSuccess: false,
            data: null
        }
    })
}