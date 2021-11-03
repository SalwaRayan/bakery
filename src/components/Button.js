import React from 'react';

class Button extends React.Component {
  render() {
    const { handleClick, children, isSelected } = this.props

    console.log("this.props di Button :", this.props)

    return (
      <>
        <button 
          className={`
            btn btn-outline-dark  m-3
            ${isSelected && "bg-primary"}
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