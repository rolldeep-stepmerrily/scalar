'use strict'

module.exports = {
  'no-array-index-key': {
    meta: {
      type: 'suggestion',
      docs: {
        description: 'Prevent using array index in v-for as key',
        category: 'Best Practices',
        recommended: true,
      },
      schema: [],
    },

    create(context) {
      console.log('we got a context', context)
      return {
        VElement(node) {
          console.log('we got a node', node)
          if (!node.directive) return

          // Find v-for directive
          const vFor = node.directives.find(
            (dir) => dir.key.name.name === 'for',
          )
          if (!vFor) return

          console.log('we got a v for', vFor)

          // Find :key or v-bind:key directive
          const key = node.directives.find(
            (dir) =>
              (dir.key.name.name === 'bind' &&
                dir.key.argument.name === 'key') ||
              dir.key.name.name === 'key',
          )
          if (!key) return

          // Check if the key value is the index variable from v-for
          const vForParams = vFor.value.expression
          if (vForParams.type === 'VForExpression') {
            const indexVar = vForParams.right.variables[1] // Second variable is index
            if (indexVar && key.value.expression.name === indexVar.name) {
              context.report({
                node: key,
                message: 'Do not use v-for index as key. Prefer a unique id.',
              })
            }
          }
        },
      }
    },
  },
}
