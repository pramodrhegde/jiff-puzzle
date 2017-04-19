import React from 'react';
import '../../sass/result.scss';

import ResultChartComponent from './ResultChartComponent.jsx';

export default class ResultsComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      correctAnswers: 0
    };
  }

  componentWillMount() {
    this.calculateResult();
  }

  calculateResult() {
    let results = this.props.data;
    let correctAnswers = this.state.correctAnswers;

    results.map((question, i) => {
      if(question.choice && question.choice === question.answer) {
        correctAnswers++;
      }
    });

    this.setState({
      correctAnswers: correctAnswers
    })
  }

  handleRetryQuiz() {
    this.props.retakePuzzleHandler();
  }

  render() {
    let totalQuestions = this.props.data.length;

    return <div className='container text-center'>
      <h2>Quiz Result</h2>
      <ResultChartComponent data={[{value: this.state.correctAnswers / totalQuestions * 100},
                {value: 100 - this.state.correctAnswers / totalQuestions * 100}]}/>

      <div className='chart-indicators'>
        <span>correct answer %</span>
        <span>Incorrect answer %</span>
      </div>

      <div>
        <p>Total Questions : <span className='pull-right'>{totalQuestions}</span></p>
        <p>Correct Answers : <span className='pull-right'>{this.state.correctAnswers}</span></p>
        <p>InCorrect Answers : <span className='pull-right'>{totalQuestions - this.state.correctAnswers}</span></p>
        <hr/>
        <h3>Your Score : <span className='pull-right'>{this.state.correctAnswers / totalQuestions * 100}%</span></h3>
      </div>

      <a href='javascript:void(0);' onClick={this.handleRetryQuiz.bind(this)}>Retry Quiz</a>
    </div>;
  }
}
