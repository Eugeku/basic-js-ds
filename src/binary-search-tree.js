const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(rootNode = null) {
    this.rootNode = rootNode;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const node = this.rootNode;
    if (node === null) {
      this.rootNode = new Node(data);
      return;
    } else {
      const addNode = function (node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return addNode(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return addNode(node.right);
          }
        } else {
          return null;
        }
      };
      return addNode(node);
    }
  }

  has(data) {
    const node = this.rootNode;
    if (node === null) {
      return false;
    } else {
      const findNode = function (node) {
        if (data < node.data) {
          if (node.left === null) {
            return false;
          } else if (node.left !== null) {
            return findNode(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            return false;
          } else if (node.right !== null) {
            return findNode(node.right);
          }
        } else {
          return data === node.data;
        }
      };
      return findNode(node);
    }
  }

  find(data) {
    const node = this.rootNode;
    if (node === null) {
      return null;
    } else {
      const findNode = function (node) {
        if (data < node.data) {
          if (node.left === null) {
            return null;
          } else if (node.left !== null) {
            return findNode(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            return null;
          } else if (node.right !== null) {
            return findNode(node.right);
          }
        } else if (data === node.data) {
          return node;
        } else {
          return null;
        }
      };
      return findNode(node);
    }
  }

  remove(data) {
    const removeNode = (node, data) => {
      if (node === null) {
        return null;
      } if (data === node.data) {
        if (node.left === null && node.right === null) {
          return null;
        }
        if (node.left === null) {
          return node.right;
        }
        if (node.right === null) {
          return node.left;
        }
        let tempNode = this.getMin(node.right);
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };
    this.rootNode = removeNode(this.rootNode, data);
  }

  min() {
    let node = this.rootNode;
    return this.getMin(node).data;
  }

  max() {
    let node = this.rootNode;
    return this.getMax(node).data;
  }

  getMin(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }

  getMax(node) {
    while (node.right !== null) {
      node = node.right;
    }
    return node;
  }
}

class Node {
  constructor(data, right = null, left = null) {
    this.data = data;
    this.right = right;
    this.left = left;
  }
}

module.exports = {
  BinarySearchTree
};