import React, { Component } from 'react';

class Control extends Component {
    render() {
      console.log('Subject render')
      return (
        <ul>
          <li><a href="/create" onClick={function(e){ //클릭했을 때
            e.preventDefault();
            this.props.onChangeMode('create'); //나는 create모드라는 것을 알려줌
          }.bind(this)}>create</a></li>
          <li><a href="/update" onClick={function(e){
            e.preventDefault();
            this.props.onChangeMode('update');
          }.bind(this)}>update</a></li>
          <li><input onClick={function(e){
            e.preventDefault();
            this.props.onChangeMode('delete'); 
          }.bind(this)} type="button" value="delete"></input></li>
        </ul>
    );
  }
  }
  
export default Control;