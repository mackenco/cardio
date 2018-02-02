<template>
  <Card
    :source="source"
    :title="title">
    <div slot="demo">
      <v-text-field
        @click="handleChange"
        type="number"
        label="Amount"
        prefix="$"
        min="0"
        step="0.01"
        v-model="num" />
      {{ string }}
    </div>
  </Card>
</template>

<script>
import Card from './Card';

/* eslint-disable no-param-reassign */
function makeChange(cents) {
  const coins = [25, 10, 5, 1];

  return coins.map((coin) => {
    const amount = Math.floor(cents / coin);
    cents -= coin * amount;

    return amount;
  });
}

export default {
  name: 'Change',
  components: {
    Card,
  },
  data() {
    return {
      num: 1.00,
      string: '',
      source: makeChange.toString(),
      title: 'Make Change',
    };
  },
  methods: {
    handleChange() {
      this.string = makeChange(this.num * 100).join(', ');
    },
  },
};
</script>
