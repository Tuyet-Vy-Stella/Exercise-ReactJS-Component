import React, { Component } from 'react'

export default class Item extends Component {
  render() {
    return (
      <div className='my-5'>
        <div className='row d-flex'>
            <div className='col-lg-6 mb-5'>
                <div className='content bg-light'>
                    <div className='text position-relative p-5'>
                        <div className='icon d-inline-flex bg-primary text-white rounded-3 position-absolute top-0 start-50 translate-middle'>
                            <i className="fa fa-newspaper-o fs-2 p-3" aria-hidden="true"></i>
                        </div>
                        <h2 className='fs-4 fw-bold'>
                            Fresh new layout
                        </h2>
                        <p>With Bootstrap 5, we've created a fresh new layout for this template!</p>
                    </div>
                </div>
            </div>
            <div className='col-lg-6 mb-5'>
                <div className='content bg-light'>
                    <div className='text position-relative p-5'>
                        <div className='icon d-inline-flex bg-primary text-white rounded-3 position-absolute top-0 start-50 translate-middle'>
                            <i className="fa fa-download fs-2 p-3" aria-hidden="true"></i>
                        </div>
                        <h2 className='fs-4 fw-bold'>
                            Free to download
                        </h2>
                        <p>As always, Start Bootstrap has a powerful collectin of free templates.</p>
                    </div>
                </div>
            </div>
            <div className='col-lg-6 mb-5'>
                <div className='content bg-light'>
                    <div className='text position-relative p-5'>
                        <div className='icon d-inline-flex bg-primary text-white rounded-3 position-absolute top-0 start-50 translate-middle'>
                            <i className="fa fa-id-card fs-2 p-3" aria-hidden="true"></i>
                        </div>
                        <h2 className='fs-4 fw-bold'>
                            Jumbotron hero header
                        </h2>
                        <p>The heroic part of this template is the jumbotron hero header!</p>
                    </div>
                </div>
            </div>
            <div className='col-lg-6 mb-5'>
                <div className='content bg-light'>
                    <div className='text position-relative p-5'>
                        <div className='icon d-inline-flex bg-primary text-white rounded-3 position-absolute top-0 start-50 translate-middle'>
                            <i className="fa fa-bluetooth fs-2 p-3" aria-hidden="true"></i>
                        </div>
                        <h2 className='fs-4 fw-bold'>
                            Feature boxes
                        </h2>
                        <p>We've created some custom feature boxes using Bootstrap icons!</p>
                    </div>
                </div>
            </div>
            <div className='col-lg-6 mb-5'>
                <div className='content bg-light'>
                    <div className='text position-relative p-5'>
                        <div className='icon d-inline-flex bg-primary text-white rounded-3 position-absolute top-0 start-50 translate-middle'>
                            <i className="fa fa-code fs-2 p-3" aria-hidden="true"></i>
                        </div>
                        <h2 className='fs-4 fw-bold'>
                            Simple clean code
                        </h2>
                        <p>We keep our dependencies up to date and squash bugs as they come!</p>
                    </div>
                </div>
            </div>
            <div className='col-lg-6 mb-5'>
                <div className='content bg-light'>
                    <div className='text position-relative p-5'>
                        <div className='icon d-inline-flex bg-primary text-white rounded-3 position-absolute top-0 start-50 translate-middle'>
                            <i className="fa fa-check fs-2 p-3" aria-hidden="true"></i>
                        </div>
                        <h2 className='fs-4 fw-bold'>
                            A name you trust
                        </h2>
                        <p>Start Bootstrap has been the leader in free Bootstrap templates since 2013!</p>
                    </div>
                </div>
            </div>
            
        </div>
      </div>
    )
  }
}
