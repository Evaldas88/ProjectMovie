import { auth } from '../firebase';

export const handleSignOut = navigation => {
  auth
    .signOut()
    .then(() => {
      navigation.replace('Login');
    })
    .catch(error => alert(error.message));
};
