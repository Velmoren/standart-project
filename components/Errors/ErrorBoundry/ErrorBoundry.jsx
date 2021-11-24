import React from "react";

export default class ErrorBoundry extends React.Component {
	state = {
		error: false,
	};

	componentDidCatch() {
		this.setState({ error: true });
	}

	render() {
		if (this.state.error) {
			return "ERROR";
		}

		return this.props.children;
	}
}
