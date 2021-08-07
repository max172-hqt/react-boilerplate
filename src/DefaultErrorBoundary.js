import React from 'react'
import propTypes from 'prop-types'

class DefaultErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>
    }

    return this.props.children
  }
}

DefaultErrorBoundary.propTypes = {
  children: propTypes.node.isRequired,
}

export default DefaultErrorBoundary
