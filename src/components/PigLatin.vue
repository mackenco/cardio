<template>
  <Card
    :source="source"
    :title="title">
    <div slot="demo">
      <v-text-field
        @keyup.stop="handleChange"
        label="Enter a word or phrase"
        v-model="str" />
      {{ pigLatin }}
    </div>
  </Card>
</template>

<script>
import Card from './Card';

function pigLatinize(string) {
  return string.split(' ').map((word) => {
    if (word.length === 0) { return ''; }

    const chars = word.toLowerCase().split('');
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    if (vowels.includes(chars[0])) {
      chars.unshift('y');
    }

    const firstChar = chars.shift();
    return `${chars.join('')}${firstChar}ay`;
  }).join(' ');
}

export default {
  name: 'PigLatinizer',
  components: {
    Card,
  },
  data() {
    return {
      pigLatin: '',
      source: pigLatinize.toString(),
      str: '',
      title: 'Pig Latinizer',
    };
  },
  methods: {
    handleChange() {
      this.pigLatin = pigLatinize(this.str);
    },
  },
};
</script>
