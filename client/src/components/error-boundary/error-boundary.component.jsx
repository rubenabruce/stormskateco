import React from "react";
import NotFoundPage from "../../pages/not-found-page/not-found-page.component";

class ErrorBoundary extends React.Component {
	state = {
		hasErrored: false,
	};

	static getDerivedStateFromError(error) {
		return { hasErrored: true };
	}

	componentDidCatch(error, info) {
		console.log(error);
	}

	render() {
		if (this.state.hasErrored) {
			return <NotFoundPage />;
		}
		return this.props.children;
	}
}

export default ErrorBoundary;
