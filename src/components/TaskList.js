import React, { Component } from 'react';
import './TaskList.css'
import Question from './Question'



class TaksList extends Component {

  state = {
    activeTaskList: true,
    qustions: [],

  }




  componentDidUpdate() {
    if (this.state.activeTaskList) {
      this.props.change()
      this.setState({
        activeTaskList: false,
      })

    }
  }





  render() {

    let items = ''
    if (this.props.result.length > 0) {

      const arr = this.props.result

      // result.map(item=>item.push(this.state.results))
      // const [array0, array1, array2,array3,array4,array5,array6,array7,array8,array9,] = result.map(x => x);
      this.state.qustions.push(arr)
      const { qustions } = this.state;
      items = [...qustions[0]]
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