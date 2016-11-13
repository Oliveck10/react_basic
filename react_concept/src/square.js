import React from 'react';

class Square extends React.Component {
  render() {
    const squareStyle = {
      height: 150,
      backgroundColor: this.props.color,
    };
    return (
      <div style={squareStyle} />
    );
  }
}

export default Square;
