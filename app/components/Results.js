var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');
var UserDetails = require('../components/UserDetails');
var UserDetailsWrapper = require('../components/UserDetailsWrapper');
var Link = require('react-router').Link;
var MainContainer = require('./MainContainer');

function StartOver() {
  return(
    <div className='col-sm-12' style={styles.space}>
      <Link to='/playerOne'>
        <button type='button' className='btn btn-lg btn-danger'>Start Over</button>
      </Link>
    </div>
  );
}

function Results(props) {
  if(props.isLoading === true) {
    return (
      <p> Loading...</p>
    )
  }
  if(props.scores[0] === props.scores[1]) {
    return (
      <MainContainer>
        <h1>Results: Its a Tie</h1>
        <StartOver />
      </MainContainer>
    )
  }
  var winningIndex = props.scores[0] > props.scores[1]? 0 : 1;
  var losingIndex = winningIndex === 0? 1 : 0;
  return (
    <div>
      <MainContainer>
        <h1>Results</h1>
        <UserDetailsWrapper header='Winner'>
          <UserDetails score={props.scores[winningIndex]} info={props.playersInfo[winningIndex]} />
        </UserDetailsWrapper>
        <UserDetailsWrapper header='Loser'>
          <UserDetails score={props.scores[losingIndex]} info={props.playersInfo[losingIndex]} />
        </UserDetailsWrapper>
      </MainContainer>
      <StartOver />
    </div>
  );
}

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  scores: PropTypes.array.isRequired,
  getPlayersInfo: PropTypes.array.isRequired
}

module.exports = Results;
