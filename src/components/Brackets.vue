<template>
  <Card
    :source="source"
    :title="title">
    <div slot="demo">
      This function will determine if a sequence of brackets and parenthesis are "balanced"
      <v-text-field
        v-model="string"
        label="Enter a sequence like (([]{}[]))()"
        :rules="rules"
      />
      <div>
        <h3>Example Sequences:</h3>
        <v-btn
          color="success"
          @click="handleChange('(([]{}[]))()')"
        >(([]{}[]))()
        </v-btn>
        <v-btn
          color="success"
          @click="handleChange('()[]{}')"
        >()[]{}
        </v-btn>
        <v-btn
          color="error"
          @click="handleChange('{[(])}')"
        >{[(])}
        </v-btn>
        <v-btn
          color="error"
          @click="handleChange('{[]}([]])')"
        >{[]}([]])
        </v-btn>
      </div>
    </div>
  </Card>
</template>

<script>
import Card from './Card';

const source = `function bracketValidator(str) {
  const left = { '{': true, '[': true, '(': true };
  const right = { '}': '{', ']': '[', ')': '(' };
  const stack = [];

  for (let char of str) {
    if (left[char]) {
      stack.push(char);
      continue;
    }

    if (stack.pop() !== right[char]) {
      return false;
    }
  }
  return true;
}`;

function bracketValidator(str) {
  const left = { '{': true, '[': true, '(': true };
  const right = { '}': '{', ']': '[', ')': '(' };
  const stack = [];

  str.split('').forEach((char) => {
    if (left[char]) {
      stack.push(char);
      return;
    }

    const peek = stack[stack.length - 1];
    if (right[char] === peek) {
      stack.pop();
    } else {
      stack.push(char);
    }
  });

  return stack.length === 0 || 'Not a balanced set';
}

function brackets(str) {
  return /^[[({})\]]*$/.test(str) || 'Only [, ], (, ), {, and } are valid characers';
}

export default {
  name: 'Brackets',
  components: {
    Card,
  },
  data() {
    return {
      rules: [
        brackets,
        bracketValidator,
      ],
      string: '',
      source,
      title: 'Balanced Brackets',
    };
  },
  methods: {
    handleChange(str) {
      this.string = str;
    },
  },
};
</script>
