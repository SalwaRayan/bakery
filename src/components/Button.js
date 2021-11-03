import React from 'react';

class Button extends React.Component {
  render() {
    const { handleClick, children, isSelected } = this.props

    return (
      <>
        <button 
          className={`
            btn btn-outline-dark  m-3
            ${isSelected && "bg-info"}
          `}
          onClick={() => handleClick(children)}
        >
          {children}
        </button>
      </>
    );
  }
}

export default Button;