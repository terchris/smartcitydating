import getMenuItems from './menuItems'
import locales from './locales'
import routes from './routes'
import themes from './themes'
import grants from './grants'

const config = {
  firebase_config: {
    apiKey: 'AIzaSyB9SH5NS1R5m6F1D9VAFcaX9AR3wL09T3o',
    authDomain: 'smartcitydating.firebaseapp.com',
    databaseURL: 'https://smartcitydating.firebaseio.com',
    projectId: 'smartcitydating',
    storageBucket: 'smartcitydating.appspot.com',
    messagingSenderId: '754128896826'
  },
  firebase_config_dev: {
    apiKey: 'AIzaSyDB1Ups0Zdd7O7FOFbDxEZ04ub82jdM5tU',
    authDomain: 'smartcitydating-dev.firebaseapp.com',
    databaseURL: 'https://smartcitydating-dev.firebaseio.com',
    projectId: 'smartcitydating-dev',
    storageBucket: 'smartcitydating-dev.appspot.com',
    messagingSenderId: '75363293548'
  },
  firebase_providers: [
    'google.com',
    'facebook.com',
    'twitter.com',
    'github.com',
    'password',
    'phone'
  ],
  initial_state: {
    themeSource: {
      isNightModeOn: true,
      source: 'light'
    },
    locale: 'en'
  },
  drawer_width: 256,
  locales,
  themes,
  grants,
  routes,
  getMenuItems,
  firebaseLoad: () => import('./firebase'),
}

export default config
