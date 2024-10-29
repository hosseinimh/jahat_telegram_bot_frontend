import React from "react";

import FallbackErrorPage from "./FallbackErrorPage";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // errorService.store(
    //   error.stack.toString(),
    //   errorInfo.componentStack.toString()
    // );
  }

  render() {
    if (this.state.hasError) {
      return <FallbackErrorPage />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
