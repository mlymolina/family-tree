/* eslint-disable jsx-a11y/anchor-is-valid */
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

  toggleVisibility(node){
    node.visible = !(node.visible)
    // force a state change by updating the root element
    this.setState({
      tree: this.state.tree
    })
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

  _renderTree(treeNode) {
    return(
      <div className='treeNode'>
        <h3>
          {treeNode.children.length > 0 &&
            <a href="#" onClick={() => this.toggleVisibility(treeNode)}>
              {treeNode.visible ? '[-]' : '[+]'}
            </a>
          }
          {' '}{treeNode.name}
          <div className="actions">
            <button>DEL</button>
            <button>ADD</button>
          </div>
          {/* TODO: Do I need to render the other dynamic props here? */}
        </h3>
        {treeNode.visible && treeNode.children && treeNode.children.length > 0 &&
          <ul>
            {treeNode.children.map((child, index) => <li key={index}>{this._renderTree(child)}</li>)}
          </ul>
        }
      </div>
    )
  }
}