import { Component } from 'react';
import Container from 'components/Container/Container';
import Buttons from './components/Buttons/Buttons';
import Statistics from './components/Statistics/Statistics';
import Section from './components/Section/Section';
import Notification from './components/Notification/Notification';
import './App.css';

const INITIAL_STATE = {
  good: 0,
  neutral: 0,
  bad: 0,
};

class App extends Component {
  state = { ...INITIAL_STATE };

  handleIncrement = event => {
    const value = event.target.name;
    this.setState(state => ({
      [value]: state[value] + 1,
    }));
  };

  countTotalFeedback() {
    const value = Object.values(this.state);
    return value.reduce((acc, el) => acc + el, 0);
  }

  countPositiveFeedbackPercentage() {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  }

  render() {
    const nameButtons = Object.keys(this.state);
    const total = this.countTotalFeedback();
    return (
      <Container>
        <Section title="Please leave your feedback">
          <Buttons stateName={nameButtons} func={this.handleIncrement} />
        </Section>
        <Section title="Statistics">
          {total === 0 && <Notification message="No feedback given" />}
          {total > 0 && (
            <Statistics
              stateName={this.state}
              func1={this.countTotalFeedback()}
              func2={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </Container>
    );
  }
}

export default App;
