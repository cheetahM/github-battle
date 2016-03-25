var React = require('react');
var Proptypes = React.Proptypes;
var transparentBg = require('../styles').transparentBg;

function puke (object) {
  return <pre>{JSON.stringify(object , null, ' ')}</pre>
}

function ConfirmBattle (props) {
  return props.isLoading === true
    ? <p> Loading! </p>
    : <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
        <h1>Confirm Players</h1>
        <div className='col-sm-8 col-sm-offset-2'>
          <div className='col-sm-6'>
            <p className='lead'>
              {puke(props.playersInfo[0])}
            </p>
          </div>
          <div className='col-sm-6'>
            <p className='lead'>
              {puke(props.playersInfo[1])}
            </p>
          </div>
        </div>
        <div className='col-sm-8 col-sm-offset-2'>
          <div className='col-sm-12' style={styles.space}>
            Initiate Battle Button
          </div>
          <div className='col-sm-12' style={styles.space}>
            Link to /PlayerOne
          </div>
        </div>
      </div>
}

ConfirmBattle.Proptypes = {
  isLoading: Proptypes.bool.isRequired,
  onInitiateBattle: Proptypes.func.isRequired,
  playersInfo: Proptypes.array.isRequired
}

module.exports = ConfirmBattle;
