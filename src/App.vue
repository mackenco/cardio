<template>
  <v-app>
    <v-navigation-drawer
      app
      light
      fixed
      v-model="drawer">
      <v-toolbar flat>
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title">
              Snippets
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-divider />

      <v-list
        dense
        class="pt-0">
        <v-list-tile
          v-for="item in items"
          :key="item.title"
          @click="selectItem(item)"
          v-model="item.selected">
          <v-list-tile-action>
            <v-icon>mdi-{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

    </v-navigation-drawer>

    <v-toolbar
      color="indigo"
      dark
      fixed
      app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>{{ selected.title }}</v-toolbar-title>
    </v-toolbar>

    <v-content>
      <v-container
        fluid
        fill-height>
        <v-layout
          justify-center
          align-center>

          <v-flex xs10>
            <component :is="selected.key" />
          </v-flex>

        </v-layout>
      </v-container>
    </v-content>

    <v-footer
      color="indigo"
      app>
      <span class="white--text">&copy; 2018</span>
    </v-footer>

  </v-app>
</template>

<script>
import fibonacci from './components/Fibonacci';
import primes from './components/Primes';

const items = [
  { key: 'fibonacci', title: 'Fibonacci Calculator', icon: 'calculator', selected: true },
  { key: 'primes', title: 'Prime Factorization', icon: 'cube-unfolded' },
];

export default {
  components: {
    fibonacci,
    primes,
  },
  data: () => ({
    drawer: null,
    items,
    selected: items[0],
  }),
  methods: {
    selectItem(item) {
      this.selected = item;
      this.items = this.items.map(i => ({ ...i, selected: i.key === item.key }));
    },
  },
};
</script>
