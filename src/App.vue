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
            <v-icon>{{ item.icon }}</v-icon>
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
            <component
              v-for="item in items"
              :key="item.key"
              :is="item.key"
              v-show="item.selected" />

            <v-card v-show="selected.key === 'primes'">
              <v-card-title primary-title>
                <h3>Its some primes shit</h3>
              </v-card-title>
              <v-card-text>
                Hi
              </v-card-text>
            </v-card>

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

const items = [
  { key: 'fibonacci', title: 'Fibonacci Calculator', icon: 'mdi-calculator', selected: true },
  { key: 'primes', title: 'Prime Factorization', icon: 'mdi-cube-unfolded' },
];

export default {
  components: {
    fibonacci,
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
