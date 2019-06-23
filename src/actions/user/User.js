import firebase from 'firebase';

export const FETCH_USER = 'fetch_user';

export const userFetch = () => {
    return async (dispatch) => {

        const user = await firebase.auth().currentUser

        if (user.uid) {
            firebase.database().ref(`/users/${user.uid}/`)
                .on('value', snapshot => {
                    console.log("SNAPSHOT:", snapshot.val())
                    dispatch({ type: FETCH_USER, payload: snapshot.val() });
                });
        } else {

        }
    }
};