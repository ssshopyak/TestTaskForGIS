import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBdFRKIbRgje_i19tjvqWyM_Y-TMkGimCE',
  authDomain: 'testtaskgis.firebaseapp.com',
  projectId: 'testtaskgis',
  storageBucket: 'testtaskgis.appspot.com',
  messagingSenderId: '135665979828',
  appId: '1:135665979828:web:9e643097220b2ef11522e1',
  measurementId: 'G-J1Z088FTTG',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};
