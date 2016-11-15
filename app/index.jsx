import React from 'react';



function Scoreboard(props) {
  return (
    <div className="header">
      <h1>{props.title}</h1>
    </div>
  );
}
Scoreboard.propTypes = {
  title: React.PropTypes.string.isRequired,
}
Scoreboard.defaultProps = {
  title: "scoreboard",
}

function Player(props) {
  return (
    <div className="players">
      <div className="player">
        <div className="player-name">
          {props.name}
        </div>
        <div className="player-score">
          <Counter initialScore={props.score}/>
        </div>
      </div>
    </div>
  );
}
Player.propTypes = {
  name: React.PropTypes.string.isRequired,
  score: React.PropTypes.number.isRequired,
}
Player.defaultProps = {
  name: "Name",
  score: 0,
}
var Counter = React.createClass ({
  // propTypes: {
  //   // initialScore: React.PropsTypes.number.isRequired,
  // },
  // defaultProps: {},
  getInitialState: function() {
    return {
      score: this.props.initialScore,
    }
  },
  incrementScore: function(e) {
    this.setState({
      score: (this.state.score + 1),
    })
  },
  decrementScore: function(e) {
    this.setState({
      score: (this.state.score - 1)
    })
  },
  render: function() {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={this.decrementScore}>
        -
        </button>
        <div className="counter-score">
          {this.state.score}
        </div>
        <button className="counter-action increment" onClick={this.incrementScore}>
        +
        </button>
      </div>
    )
  }
})




export default class Application extends React.Component {
  render() {
    return (
      <div className="scoreboard">
        <Scoreboard title={this.props.title}/>
        {this.props.players.map((players) => {
          return <Player key={players.id} name={players.name} score={players.score}/>
        })}
      </div>
    );
  }
}



Application.propTypes = {
  title: React.PropTypes.string.isRequired,
  players: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
    name: React.PropTypes.string.isRequired,
    score: React.PropTypes.number.isRequired,
  })).isRequired,
}
