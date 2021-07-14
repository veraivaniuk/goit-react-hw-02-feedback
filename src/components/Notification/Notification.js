import s from './Notification.module.css';
import PropTypes from 'prop-types';

const Notification = ({ message }) => <h3 className={s.message}>{message}</h3>;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
