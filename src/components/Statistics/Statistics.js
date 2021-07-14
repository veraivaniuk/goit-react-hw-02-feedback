import s from './Statistics.module.css';
import PropTypes from 'prop-types';

function Statistics({ stateName, func1, func2 }) {
  return (
    <div>
      <ul>{statistic(stateName)}</ul>
      {func1 > 0 && <p className={s.total}>Total: {func1}</p>}
      {func1 > 0 && <p className={s.positive}>Positive feedback: {func2}%</p>}
    </div>
  );
}

function statistic(stateName) {
  const entries = Object.entries(stateName);
  const markup = [];
  for (const entry of entries) {
    const key = entry[0];
    const value = entry[1];
    markup.push(
      <li key={key} className={s.list}>
        {key}: {value}
      </li>,
    );
  }
  return markup;
}

Statistics.propTypes = {
  stateName: PropTypes.objectOf(PropTypes.number).isRequired,
  func1: PropTypes.number.isRequired,
  func2: PropTypes.number.isRequired,
};

export default Statistics;
