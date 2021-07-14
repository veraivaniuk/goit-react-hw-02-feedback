import s from './Buttons.module.css';
import PropTypes from 'prop-types';
function Buttons({ stateName, func }) {
  return (
    <div>
      {stateName.map(element => (
        <button
          key={element}
          onClick={func}
          type="button"
          className={s.button}
          name={element}
        >
          {element}
        </button>
      ))}
    </div>
  );
}

Buttons.propTypes = {
  stateName: PropTypes.arrayOf(PropTypes.string),
  func: PropTypes.func,
};

export default Buttons;
