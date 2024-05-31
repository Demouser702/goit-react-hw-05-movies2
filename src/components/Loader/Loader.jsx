import PropTypes from 'prop-types';
import './Loader.module.css';

export const Loader = ({ children }) => {
  return <div className="loader-container">{children}</div>;
};

Loader.propTypes = {
  children: PropTypes.node.isRequired,
};
