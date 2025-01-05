const { NotImplementedError } = require('../extensions/index.js');

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
    this.rootNode = this.addNode(this.rootNode, data);
  }

  addNode(node, data) {
    if (node === null) {
      return new Node(data);
    }
    if (data < node.data) {
      node.left = this.addNode(node.left, data);
    } else if (data > node.data) {
      node.right = this.addNode(node.right, data);
    }
    return node;
  }

  has(data) {
    return this.hasNode(this.rootNode, data);
  }

  hasNode(node, data) {
    if (node === null) {
      return false;
    }
    if (data < node.data) {
      return this.hasNode(node.left, data);
    } else if (data > node.data) {
      return this.hasNode(node.right, data);
    } else {
      return true;
    }
  }

  find(data) {
    return this.findNode(this.rootNode, data);
  }

  findNode(node, data) {
    if (node === null) {
      return null;
    }
    if (data < node.data) {
      return this.findNode(node.left, data);
    } else if (data > node.data) {
      return this.findNode(node.right, data);
    } else {
      return node;
    }
  }

  remove(data) {
    this.rootNode = this.removeNode(this.rootNode, data);
  }

  removeNode(node, data) {
    if (node === null) {
      return null;
    }
    if (data === node.data) {
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
      node.right = this.removeNode(node.right, tempNode.data);
      return node;
    } else if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else {
      node.right = this.removeNode(node.right, data);
      return node;
    }
  }

  min() {
    return this.getMin(this.rootNode).data;
  }

  max() {
    return this.getMax(this.rootNode).data;
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