import { FirebaseApp, getApp, getApps, initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyCWl9RofDyU-2D4NnEIUrxtTv_wfWuPPLU',
  authDomain: 'expensesapp-c0bc8.firebaseapp.com',
  projectId: 'expensesapp-c0bc8',
  storageBucket: 'expensesapp-c0bc8.appspot.com',
  messagingSenderId: '1054115578938',
  appId: '1:1054115578938:web:d08ad65a1b3d12e1f96103',
};

export const app: FirebaseApp = initializeApp(firebaseConfig);

getApps().length === 0 ? app : getApp();

export default firebaseConfig;
