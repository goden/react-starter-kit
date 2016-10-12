import React, {Component} from 'react';
import {TodoList} from './TodoList';


export class TodoApp extends Component {
    constructor(props, context) {
      super(props, context);

      // this.state = {
      //
      // };
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
      return (
        <div>
            <TodoList />
            <input value='' />
            <button>Add</button>
        </div>
      );
    }

}

TodoApp.defaultProps = {

}
