import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <a className='text-decoration-none text-white d-inline-block px-3' aria-current="true" href="#">Home</a>
        <a className='text-decoration-none text-white-50 d-inline-block px-3' href="#">About</a>
        <a className='text-decoration-none text-white-50 d-inline-block px-3' href="#">Contact</a>
      </div>
    )
  }
}
