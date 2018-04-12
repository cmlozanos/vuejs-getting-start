<template>
  <v-app>
    <v-navigation-drawer
      persistent
      temporary
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
      <v-toolbar flat>
        <v-list>
          <v-list-tile avatar>
            <v-list-tile-avatar>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <img src="http://www.lazyengineers.com/wp-content/uploads/2016/02/free1.jpg" >
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-divider></v-divider>
      <div
        v-for="(group, i) in groups"
        :key="i"
      >
        <v-list>
          <v-list-tile
            value="true"
            v-for="(item, i) in group.items"
            :key="i"
            :to="item.route"
          >
            <v-list-tile-action>
              <v-icon v-html="item.icon"></v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-text="item.title"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
        <v-divider></v-divider>
      </div>
    </v-navigation-drawer>
    <v-toolbar 
      app
      :clipped-left="clipped"
      tabs
      color="primary"
      dark
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="toolbar.title" align-baseline ></v-toolbar-title>
      <v-container grid-list-xs>
        <v-layout row wrap>
          <v-flex xs1 offset-xs11>
            <v-select
              :items="toolbar.currencies"
              v-model="toolbar.currency"
              single-line
              item-text="value"
              item-value="id"
              hint="Currency"
              persistent-hint
            ></v-select>
          </v-flex> 
        </v-layout>
      </v-container>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer height="auto" color="primary">
      <v-layout row wrap justify-center>
        <v-flex xs12 py-3 text-xs-center white--text>
          <img 
            src="http://www.lazyengineers.com/wp-content/uploads/2016/02/free1.jpg"
            height="60"
          >
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        clipped: false,
        drawer: false,
        fixed: false,
        miniVariant: false,
        {
          items: [{
            icon: 'exit_to_app',
            title: 'Log out',
            route: '/logout'
          }]
        }],
        groups: [{
          items: [{
            icon: 'home',
            title: 'Home',
            route: '/'
          }
        ],
        toolbar: {
          title: 'App Ejemplo',
          currency: 1,
          currencies: [
            {
              id: 1,
              name: 'Euro',
              value: '€'
            },
            {
              id: 2,
              name: 'USD',
              value: '$'
            }
          ]
        }
      }
    },
    name: 'App'
  }
</script>
