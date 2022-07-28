import React, { Component } from 'react'

export default class Banner extends Component {
  render() {
    return (
      <div className='bg-light my-5'>
        <div className='content p-5'>
            <h1 className='fw-bold mt-5'>A warm welcome!</h1>
            <p className='fs-4 text-center mx-3'>Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
            <button className='btn btn-primary btn-lg mb-5'>Call to action</button>
        </div>
      </div>
    )
  }
}
