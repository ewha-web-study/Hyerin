import React, { Component } from 'react';

class Subject extends Component {
    render() {
      console.log('Subject render')
      return (
        <header>
          <h1><a href="/" onClick={function(e){ //링크를 클릭했을 때(이벤트가 발생했을 때)
            e.preventDefault();
            this.props.onChangePage(); //onChangePage 함수 호출
          }.bind(this)}>{this.props.title}</a></h1>
          {this.props.sub}
        </header>
    );
  }
  }
  
export default Subject;