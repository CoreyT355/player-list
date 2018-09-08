import React, { Component } from 'react';
//import ReactImageFallback from 'react-image-fallback';

class PlayerCard extends Component {
  render() {
    return (
      <div className="col-lg-4 col-md-6 col-12">
        <div className="card shadow bg-light m-3">
          {/* <ReactImageFallback
            src={this.props.player.officialImageSrc}
            fallbackImage="https://picsum.photos/200"
            alt="player"
            className="card-img-top"
          /> */}
          <div className="card-body">
            <div>
              <h5 className="card-title">
                {this.props.player.lastName}, {this.props.player.firstName}
              </h5>
            </div>
            {this.props.player.currentTeam && (
              <div className="card-text team-info">
                <span>{this.props.player.currentTeam.abbreviation}</span>
                <small className="pl-2">
                  {this.props.player.primaryPosition}
                </small>
                <small className="pl-2">
                  #{this.props.player.jerseyNumber}
                </small>
              </div>
            )}
            <div className="card-text physical-stats">
              <small>
                Age: {this.props.player.age} / Height:{' '}
                {this.props.player.height} / Weight: {this.props.player.weight}{' '}
                lbs
              </small>
            </div>
            {this.props.player.currentInjury && (
              <p className="card-text text-warning">
                Injuries:
                {this.props.player.currentInjury.description}
                <small className="pl-2">
                  ({this.props.player.currentInjury.playingProbability})
                </small>
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default PlayerCard;
