import React from "react";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null
    };
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any child components and re-renders with an error message
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.error) {
      // Fallback UI if an error occurs
      return (
        <div>
          <h2>{"Oh-no! Something went wrong"}</h2>
          <p style={{ color: "red" }}>
            {this.state.error && this.state.error.toString()}
          </p>
          <div>{"Component Stack Error Details: "}</div>
          <p style={{ color: "red" }}>{this.state.errorInfo.componentStack}</p>
        </div>
      );
    }
    // component normally just renders children
    return this.props.children;
  }
}
