import React, { Component } from 'react'

class Welcome extends Component {
	render() {
		return <h1>Welcome {this.props.coin} a.k.a. {this.props.ticker}</h1>
	}
}

export default Welcome