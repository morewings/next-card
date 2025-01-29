import {type Context, type Dispatch, useContext} from 'react';

export const useDispatch = <TState, TAction>(
    context: Context<{state: TState; dispatch: Dispatch<TAction>}>
) => {
    const useProvidedContext = () =>
        useContext<{state: TState; dispatch: Dispatch<TAction>}>(context);
    const {dispatch} = useProvidedContext();
    return dispatch;
};
