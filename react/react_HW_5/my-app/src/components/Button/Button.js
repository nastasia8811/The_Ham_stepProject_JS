import PropTypes from "prop-types";

function Button(props) {
  return (
    <>
      <button
        className={props.className}
        style={{
          background: props.backgroundColor,
        }}
        onClick={props.onClick}
      >
        {props.text}
      </button>
    </>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
  ]),
    onClick: PropTypes.any,
};

export default Button;
