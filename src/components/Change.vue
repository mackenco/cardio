<template>
  <Card
    :source="source"
    :title="title">
    <div slot="demo">
      <v-text-field
        @input="handleChange"
        type="number"
        label="Amount"
        prefix="$"
        min="0"
        step="0.01"
        v-model="num" />
      <div class="purse">
        <div
          class="stack"
          v-for="num in change">
          <div class="label">{{ num }}</div>
          <div
            class="coin"
            v-for="n in num"/>
        </div>
      </div>

    </div>
  </Card>
</template>

<script>
import Card from './Card';

function makeChange(_cents) {
  const coins = [25, 10, 5, 1];
  let cents = _cents > 0 ? _cents : 0;

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
      change: [4, 0, 0, 0],
      num: 1.00,
      source: makeChange.toString(),
      title: 'Make Change',
    };
  },
  methods: {
    handleChange() {
      this.change = makeChange(this.num * 100);
    },
  },
};
</script>

<style>
.purse {
  display: flex;
  align-items: flex-end;
}

.stack {
  display: flex;
  flex-direction: column;
  width: 6rem;
}

.label {
  margin: auto;
}

.coin {
  margin: 1px auto;
  border-radius: 5px;
  width: calc(.25rem * var(--width));
  height: calc(.25rem * var(--height));
}

.stack:nth-child(1) .coin {
  background-color: #9E9E9E;
  --width: 24.26;
  --height: 1.75;
}

.stack:nth-child(2) .coin {
  background-color: #E0E0E0;
  --width: 17.91;
  --height: 1.35;
}

.stack:nth-child(3) .coin {
  background-color: #9E9E9E;
  --width: 21.21;
  --height: 1.95;
}

.stack:nth-child(4) .coin {
  background-color: #A1887F;
  --width: 19.05;
  --height: 1.52;
}
</style>
