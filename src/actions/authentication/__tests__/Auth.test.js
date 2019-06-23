import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import * as actions from '../Auth';
import reducers from '../../../reducers';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

// Testing email changed function.
it('EMAIL CHANGED', () => {
    store.dispatch(actions.emailChanged('user@gmail.com'));
    expect(store).toMatchSnapshot();
});

it('EMAIL CHANGED', () => {
    store.dispatch(actions.emailChanged(null));
    expect(store).toMatchSnapshot();
});