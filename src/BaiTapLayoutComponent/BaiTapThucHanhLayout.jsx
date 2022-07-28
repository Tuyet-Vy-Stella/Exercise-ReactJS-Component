// rcc
import React, { Component } from 'react'
import Logo from './Logo'
import Navbar from './Navbar'

export default class BaiTapThucHanhLayout extends Component {
  render() {
    return (
      <div>
        <header className='bg-dark text-white'>
            <div className='container d-flex justify-content-between align-items-center p-3'>
                <div>
                    <Logo/>
                </div>
                <nav>
                    <Navbar/>
                </nav>
            </div>
        </header>
        <section className='body'>
            <div>Banner</div>
            <div>Item</div>
        </section>
        <footer></footer>
      </div>
    )
  }
}
