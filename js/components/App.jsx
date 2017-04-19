import React from 'react';
import $ from 'jquery';

import '../../sass/main.scss';
import QuestionComponent from './QuestionComponent.jsx';
import ResultsComponent from './ResultsComponent.jsx';

export default class App extends React.Component  {
  constructor(props) {
    super(props);

    this.state = {
      questions: [],
      currentQuestion: null,
    }
  }

  componentDidMount() {
    // fetch questions
    $.ajax({
      type: 'GET',
      async: true,
      cache: false,
      dataType: 'json',
      url: 'https://cdn.rawgit.com/santosh-suresh/39e58e451d724574f3cb/raw/784d83b460d6c0150e338c34713f3a1c2371e20a/assignment.json',
      success: function(data) {
        this.setState({
          questions: data,
          currentQuestion: 1
        });
      }.bind(this),
      error: function(xhr) {
        console.log('error');
      }.bind(this)
    });
  }

  onAnswerSelect(option) {
    let questions = this.state.questions;

    questions[this.state.currentQuestion - 1].choice = option;

    this.setState({
      questions: questions,
      currentQuestion: this.state.currentQuestion + 1
    });
  }

  onRetakePuzzle() {
    this.setState({
      currentQuestion: 1
    });
  }

  render() {
    if(!this.state.questions.length) {
      return null;
    }

    return this.state.currentQuestion <= this.state.questions.length ?
    <div className='container'>
      <p>Javascript quiz {this.state.currentQuestion} of  {this.state.questions.length} </p>
      <QuestionComponent question={this.state.questions[this.state.currentQuestion - 1]}
                              saveAnswer={this.onAnswerSelect.bind(this)}/>
    </div>
    :
    <ResultsComponent data={this.state.questions}
                      retakePuzzleHandler={this.onRetakePuzzle.bind(this)}/>
  }
}
