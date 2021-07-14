import s from './Buttons.module.css';

export function Buttons({ stateName, func }) {
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
