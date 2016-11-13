import React from 'react';
import ReactDOM from 'react-dom';
import Square from './square';
import Label from './label';

class ColorCard extends React.Component {
  render() {
    const cardStyle = {
      height: 200,
      width: 150,
      padding: 0,
      backgroundColor: '#FFF',
      WebkitFilter: 'drop-shadow(0px 0px 5px #666)',
      filter: 'drop-shadow(0px 0px 5px #666)',
    };

    return (
      <div style={cardStyle}>
        <Square color={this.props.color} />
        <Label color={this.props.color} />
      </div>
    );
  }
}

export default ColorCard;
