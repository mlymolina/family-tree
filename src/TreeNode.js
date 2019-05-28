export class TreeNode {
  constructor(props, visible = false) {
    // dinamyc assignment of values
    // assumes that "name" is always given
    // TODO: Make sure this gets types either via propTypes of using Typescript
    for (let propKey of Object.keys(props)) {
      this[propKey] = props[propKey]
    }

    this.visibility = visible
    this.children = []
  }
}