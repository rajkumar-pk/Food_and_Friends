import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

const NotFound = () => {
  return (
    <section className='notFound'>
      <div className="container">
        <img src="/notFound.svg" alt="Not Found" />
        <h1>LOOKS LIKE YOU GOT LOST</h1>
        <p>We can't seem to find the page you're looking for.</p>
        <Link to="/" className='btn'>Back to Home <span><HiOutlineArrowNarrowRight /></span></Link>
      </div>
    </section>
  )
}

export default NotFound