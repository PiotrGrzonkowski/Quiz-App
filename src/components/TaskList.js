import React, { Component } from 'react';
import './TaskList.css'
import Question from './Question'

class TaksList extends Component {



  state = {
    activeTaskList: true,


  }

  componentDidUpdate() {
    if (this.state.activeTaskList) {
      this.setState({
        activeTaskList: false,
        
      })

    }

  }

  
  render() {


    let items = ''
    
    if (this.props.result.length > 0) {

      const arr = this.props.result
      
      items = [...arr]
      items.map(item => (<Question
        key={item.question} item={items} />))

      }

    return (
      <div className="wrapper">
        <div className={this.state.activeTaskList ? null : "activeTaskList"}>
          <Question item={items} counters={this.props.counters} changeCounter={this.props.changeCounter} />
        </div>
      </div>
    );
  }
}

export default TaksList;