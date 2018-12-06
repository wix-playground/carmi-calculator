import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'carmi-react';

import { Calculator } from './calculator';
import model from './calculator.carmi';

class Application extends React.Component {

  constructor(props) {
    super(props);

    this.state = model({
      expression: 'Click any button Sir!',
      clearOnNextAction: true
    }, {});
  }

  onButtonClick(e) {
    if (this.state.clearOnNextAction) {
      this.state.setExpression('');
    }
    const btn = e.target.innerText;
    this.state.setExpression(this.state.expression + btn);
    if (btn === '=') {
      try {
      this.state.setExpression(eval(
        this.state.expression
          .replace(/÷/g, '/')
          .replace(/×/g, '*')
          .replace(/−/g, '-')
          .replace(/\./g, '.')
          .replace(/\=/g, '')
          .replace(/\+/g, '+')));
      } catch (error) {
        this.state.setExpression('Oops!');
      }
      this.state.setClearOnNextAction(true);
    } else {
      this.state.setClearOnNextAction(false);
    }
  }

  render() {
    return (
      <Provider value={this.state}>
        {() =>
          <Calculator
            expression={this.state.expression}
            onButtonClick={e => this.onButtonClick(e)}
            />
        }
      </Provider>
    )
  }

}

const root = document.getElementById('root');
ReactDOM.render(React.createElement(Application), root);
