import * as React from 'react';
import {string, func} from 'prop-types';

import css from './calculator.css';

export class Calculator extends React.Component {
  render() {
    const {expression, onButtonClick} = this.props;
    return (
      <div className={css.calculator}>
        <div className={css.results}>&nbsp;{expression}</div>
        <div className={css.buttons}>
          <div onClick={onButtonClick}>7</div>
          <div onClick={onButtonClick}>8</div>
          <div onClick={onButtonClick}>9</div>
          <div onClick={onButtonClick}>÷</div>
        </div>
        <div className={css.buttons}>
          <div onClick={onButtonClick}>4</div>
          <div onClick={onButtonClick}>5</div>
          <div onClick={onButtonClick}>6</div>
          <div onClick={onButtonClick}>×</div>
        </div>
        <div className={css.buttons}>
          <div onClick={onButtonClick}>1</div>
          <div onClick={onButtonClick}>2</div>
          <div onClick={onButtonClick}>3</div>
          <div onClick={onButtonClick}>−</div>
        </div>
        <div className={css.buttons}>
          <div onClick={onButtonClick}>0</div>
          <div onClick={onButtonClick}>.</div>
          <div onClick={onButtonClick}>=</div>
          <div onClick={onButtonClick}>+</div>
        </div>
      </div>
    );
  }
}

Calculator.propTypes = {
  expression: string,
  onButtonClick: func
};
