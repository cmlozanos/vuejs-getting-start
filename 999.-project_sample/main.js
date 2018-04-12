// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  VTabs,
  VCard,
  VSelect,
  VTextField,
  VExpansionPanel,
  vMenu,
  vDivider,
  vDatePicker,
  transitions,
  vForm,
  vDataTable
} from 'vuetify'
// Styles
import '../node_modules/vuetify/src/stylus/app.styl'
import '@/assets/styles/main.scss'

const defaultTheme = {
  primary: '#1976D2',
  secondary: '#424242',
  accent: '#82B1FF',
  error: '#FF5252',
  warning: '#2196F3',
  info: '#4CAF50',
  success: '#FFC107'
}
const celgeneThemeOne = {
  primary: '#2196F3',
  secondary: '#424242',
  accent: '#00B8D4',
  error: '#f44336',
  warning: '#ffeb3b',
  info: '#90CAF9',
  success: '#4caf50'
}

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    VTabs,
    VCard,
    VSelect,
    VTextField,
    VExpansionPanel,
    vMenu,
    vDivider,
    vDatePicker,
    transitions,
    vForm,
    vDataTable
  },
  theme: celgeneThemeOne
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
