import React, { Component } from 'react';

class TOC extends Component { //Table Of Content
    shouldComponentUpdate(newProps, newState) {
        console.log(newProps.data, this.props.data);
        if(this.props.data === newProps.data) { //바뀐 것이 없다면
            return false; //렌더함수 호출X
        }
        return true; //렌더함수 호출O
    }
    render() {
        console.log('TOC render');
        var lists = [];
        var data = this.props.data;
        var i = 0;
        while(i < data.length) {
            lists.push(
            <li key={data[i].id}>
                <a 
                href={"/content/"+data[i].id}
                data-id={data[i].id}
                onClick={function(e){
                    e.preventDefault();
                    this.props.onChangePage(e.target.dataset.id);
                }.bind(this)}
                >{data[i].title}</a></li>);
            i = i + 1;
        }
      return (
        <nav>
          <ul>
            {lists}
          </ul>
        </nav>
      );
    }
  } 

export default TOC;