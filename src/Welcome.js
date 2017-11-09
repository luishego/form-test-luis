import React, { Component } from 'react';

class Welcome extends Component {
  constructor(props){
    super(props);
    this.data = this.props.location.query;
  }

  handleNewRoute = () => {
    this.props.history.push({
      pathname: `/`,
    })
  }

  render(){
    return(
      <div>
      <button className="btn btn-primary" onClick={this.handleNewRoute}>Volver</button>
        <pre>
          {JSON.stringify(this.data, null, 2) }
        </pre>
      </div>
    );
  }
}

export default Welcome;
