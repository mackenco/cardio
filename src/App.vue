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
        <v-list-group
          v-for="item in items"
          :value="item.active"
          :key="item.title">
          <v-list-tile slot="activator">
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile
            v-for="subItem in item.items"
            :key="subItem.title"
            v-model="subItem.selected"
            @click="selectItem(subItem)">
            <v-list-tile-action>
              <v-icon>mdi-{{ subItem.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

        </v-list-group>
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
/*
 * ideas: https://github.com/karan/Projects
 * API: distance between two cities
 * API: rss feed generator
 * API: current weather
 * string: reverse a string
 * string: caesar cipher
 * interactive: blue apron game
 */

import brackets from './components/Brackets';
import change from './components/Change';
import fibonacci from './components/Fibonacci';
import fizzbuzz from './components/Fizzbuzz';
import palindrome from './components/Palindrome';
import pigLatin from './components/PigLatin';

const strings = [
  { key: 'brackets', title: 'Balanced Brackets', icon: 'code-brackets', selected: true },
  { key: 'fizzbuzz', title: 'Fizz Buzz', icon: 'format-align-center' },
  { key: 'palindrome', title: 'Palindrome Potential', icon: 'account-convert' },
  { key: 'pigLatin', title: 'Pig Latinizer', icon: 'pig' },
];

const numbers = [
  { key: 'change', title: 'Make Change', icon: 'database' },
  { key: 'fibonacci', title: 'Fibonacci Calculator', icon: 'calculator' },
];

const items = [
  { title: 'Numbers', items: numbers },
  { title: 'Strings', items: strings, active: true },
];

export default {
  components: {
    brackets,
    change,
    fibonacci,
    fizzbuzz,
    palindrome,
    pigLatin,
  },
  data: () => ({
    drawer: null,
    items,
    selected: strings[0],
  }),
  methods: {
    selectItem(item) {
      this.selected = item;
      this.items = this.items.map((i) => {
        const it = i.items.map(si => ({ ...si, selected: si.key === item.key }));
        return { ...i, items: it };
      });
    },
  },
};
</script>
