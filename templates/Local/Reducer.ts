import {Actions} from './actionTypes';

export type State = {
    value: number;
};

export const initialState: State = {
    value: 0,
};

export type Action = {
    type: keyof typeof Actions;
    value: number;
};

export const Reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case Actions.INCREMENT_TEMPLATE_NAME: {
            return {...state, value: action.value};
        }

        default:
            return state;
    }
};
