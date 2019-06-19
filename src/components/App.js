import React, { Component } from 'react';
import './App.css'
import TaskList from './TaskList'
import FinalScrin from './FinalScrin'

class QuizApp extends Component {
  state = {
    time: "",
    inactive: false,
    active: true,
    activeTaskList: true,
    score: 0,
    mistakes: 0,
    counter: 0,

    results: [],


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


  changeCounter = (counter, score, mistakes) => {
    if (score) {


      this.setState(prevState => ({
        counter: prevState.counter + 1,
        score: prevState.score + 1,
      }))
    } else if (mistakes) {


      this.setState(prevState => ({
        counter: prevState.counter + 1,
        mistakes: prevState.mistakes + 1,
      }))

    }
  }

  restart = () => {
    this.setState({
      time: "",
      inactive: false,
      active: true,
      activeTaskList: true,
      score: 0,
      mistakes: 0,
      counter: 0,

      results: [],

    })

  }

  render() {

    const { results, counter, time, score, mistakes } = this.state
    console.log(score)
    console.log(mistakes)
    console.log(counter)
    return (
      <div className="wrapp active ">
        <div className={this.state.inactive ? "inactive" : "active"}>
          <p>pick your test</p>
          <button onClick={this.toggleClass} id="film">film</button>
          <button onClick={this.toggleClass} id="video game">video game</button>
          <button onClick={this.toggleClass} id="mathematics">Science computers</button>
          <button onClick={this.toggleClass} id="sports">sports</button>
        </div>


        <TaskList change={this.changeActiveTaskList} result={results} counters={counter}
          changeCounter={this.changeCounter} />

        {this.state.counter === 10 ? <FinalScrin time={time} score={score} mistakes={mistakes} restart={this.restart} /> : null}




      </div>

    );
  }
}

export default QuizApp;