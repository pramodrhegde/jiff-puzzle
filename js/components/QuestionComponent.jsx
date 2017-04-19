import React from 'react';
import '../../sass/question.scss';
import LoaderComponent from './LoaderComponent.jsx';

export default class QuestionComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };
  }

  handleOptionSelect(option) {
    let self = this;
    this.setState({
      isLoading: true
    }, () => {
      setTimeout(function() {
        self.setState({
          isLoading: false
        });
        self.props.saveAnswer(option);
      }, 500);
    });
  }

  render() {
    let currentQuestion = this.props.question;
    const optionLabels = ['A', 'B', 'C', 'D'];

    if(!currentQuestion) {
      return null;
    }

    return !this.state.isLoading ?
    <div className='questions-container'>
      <p className='question'>{currentQuestion.text}</p>
      <ul className='options'>
        {
          currentQuestion.options.map((option, i) => {
            return <li key={i}>{optionLabels[i] + ' - ' + option}</li>
          })
        }
      </ul>
      <ul className='controls-container'>
        {
          optionLabels.map((control, i) => {
            return <li key={i}><button type='buton'
                              role='button'
                              onClick={this.handleOptionSelect.bind(this, i)}>{control}</button></li>
          })
        }
      </ul>
    </div>
    :
    <LoaderComponent/>
  }
}
