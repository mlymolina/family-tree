import React from 'react'
import { TreeNode } from './TreeNode'

export default class FamilyTree extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      initialized: false,
      familyTree: []
    }
  }

  componentDidMount(){
    this.setState(this._initializeFamilyTree())
  }

  render() {
    return(
      <div>
        {!(this.state.initialized) && (
          <div>Loading...</div>
        )}
        {this.state.initialized && (
          <div>{this._renderTree(this.state.familyTree)}</div>
        )}
      </div>
    )
  }

  _initializeFamilyTree() {
    const tree = new TreeNode({ name: 'Nona Rosa', age: 79 })

    tree.children.push(new TreeNode({ name: 'Antonio' }))
    tree.children.push(new TreeNode({ name: 'Gustavo' }))
    tree.children.push(new TreeNode({ name: 'Isabella' }))

    tree.children[0].children.push(new TreeNode({ name: 'Emely', married: true, dogs: true }))
    tree.children[0].children.push(new TreeNode({ name: 'Luanny', married: false }))
    tree.children[0].children.push(new TreeNode({ name: 'Carolina', married: true }))

    return {initialized: true, familyTree: tree}
  }

  _renderTree(TreeNode) {
    return(
      <div className='TreeNode'>
        <h3>
          {' '}{TreeNode.name}
        </h3>
        {TreeNode.children && TreeNode.children.length > 0 &&
          <ul>
            {TreeNode.children.map((child, index) => <li key={index}>{this._renderTree(child)}</li>)}
          </ul>
        }
      </div>
    )
  }
}