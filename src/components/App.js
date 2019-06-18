import React, { Component } from 'react';
import './App.css'
import TaskList from './TaskList'

class QuizApp extends Component {
  state = {
    time: "",
    inactive: false,
    active: true,
    activeTaskList: true,

    results: [],
    counter: 0,

  }



  toggleClass = (e) => {
    const inactive = this.state.inactive;
    const active = this.state.active;
    const time = new Date().getTime();
    const activeTaskList = this.state.activeTaskList;
    this.changeActiveTaskList();
    this.setState(
      {
        inactive: !inactive,
        active: !active,
        activeTaskList: !activeTaskList,
        time,

      })
    let API = '';

    if (e.target.id === "film") {
      API = "https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple&encode=url3986";

    } else if (e.target.id === "video game") {
      API = 'https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=multiple&encode=url3986';
    } else if (e.target.id === "mathematics") {
      API = 'https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple&encode=url3986';
    } else if (e.target.id === "sports") {
      API = 'https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple&encode=url3986';
    }

    fetch(API)
      .then(resposne => {
        if (resposne.ok) {
          return resposne;
        }
        throw Error(resposne.status)
      })
      .then(resposne => resposne.json())
      .then(data => {

        this.setState({
          results: data.results

        })

      })



  }
  changeActiveTaskList = () => {

    const taskList = this.state.activeTaskList
    return taskList
  }


  changeCounter = (counter) => {
    let count = counter;
    count++
    this.setState({
      counter: count
    })



  }




  render() {

    return (
      <div className="wrapp active ">
        <div className={this.state.inactive ? "inactive" : "active"}>
          <p>pick your test</p>
          <button onClick={this.toggleClass} id="film">film</button>
          <button onClick={this.toggleClass} id="video game">video game</button>
          <button onClick={this.toggleClass} id="mathematics">Science computers</button>
          <button onClick={this.toggleClass} id="sports">sports</button>
        </div>


        <TaskList change={this.changeActiveTaskList} result={this.state.results} counters={this.state.counter}
          changeCounter={this.changeCounter} />




      </div>

    );
  }
}

export default QuizApp;