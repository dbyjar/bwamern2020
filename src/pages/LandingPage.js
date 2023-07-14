import React from 'react'
import Header from 'parts/Header'
import Hero from 'parts/Hero'

export default class LandingPage extends React.Component {
  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <Hero></Hero>
      </>
    )
  }
}
