import './index.css';
import './components/button.js';

console.log('index')

const fn = (params) => {
  console.log(params)
}

fn('fn test')

class Root {
  constructor(title, value) {
    this.title = title;
    this.value = value;
  }
  // version = '1.0.0'
}

const root = new Root('root', 'root');
console.log(root.version);