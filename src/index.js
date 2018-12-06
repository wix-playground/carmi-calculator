import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'carmi-react';

import { Calculator } from './calculator';
import model from './calculator.carmi';

class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = model({
      expression: ''
    }, {
    });

  }
  onButtonClick(e) {
    const btn = e.target.innerText;
    this.state.setExpression(this.state.getExpression + btn);
    if (btn === '=') {
      this.state.setExpression(eval(
        this.state.getExpression
          .replace(/÷/g, '/')
          .replace(/×/g, '*')
          .replace(/−/g, '-')
          .replace(/\./g, '.')
          .replace(/\=/g, '')
          .replace(/\+/g, '+')));
    }
  }
  render() {
    return (
      <Provider value={this.state}>
        {value => {
          return <Calculator expression={this.state.getExpression} onButtonClick={e => this.onButtonClick(e)}/>
        }}
      </Provider>
    )
  }
}

ReactDOM.render(React.createElement(Application, {
  value: model
}), document.getElementById('root'));
