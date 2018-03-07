<template>
  <Card
    :source="source"
    :title="title">
    <div slot="demo">
      This function will determine if a word or sentence <i>could</i> be rearranged to form a palindrome.
      <v-text-field
        v-model="string"
        label="Enter a word of sentence"
        :rules="rules"
      />
    </div>
  </Card>
</template>

<script>
import Card from './Card';

const source = `function palindromeValidator(str) {
  const freq = {};
  let oddCount = 0;

  for (let char of str) {
    if (char === '') { continue; }

    if (!freq[char]) {
        freq[char] = 0;
    }
    freq[char]++;

    freq[char] % 2 === 0 ? oddCount-- : oddCount++;
  }

  return oddCount <= 1;
}`;

function palindromeValidator(str) {
  const freq = {};
  let oddCount = 0;

  str.split('').forEach((char) => {
    if (char === '') { return; }

    if (!freq[char]) {
      freq[char] = 0;
    }
    freq[char] += 1;

    // eslint-disable-next-line no-unused-expressions
    freq[char] % 2 === 0 ? oddCount -= 1 : oddCount += 1;
  });

  return oddCount <= 1 || 'Not a potential palindrome';
}

function letterOrWhitespace(str) {
  return /^[a-zA-Z_ ]*$/.test(str) || 'Only enter letters or spaces';
}

export default {
  name: 'Palindrome',
  components: {
    Card,
  },
  data() {
    return {
      rules: [
        letterOrWhitespace,
        palindromeValidator,
      ],
      string: '',
      source,
      title: 'Palindrome Potential',
    };
  },
  methods: {
    handleChange() {

    },
  },
};
</script>
