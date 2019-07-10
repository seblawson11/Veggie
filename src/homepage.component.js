import React from 'react';
import './homepage.styles.scss'

const HomePage = () => (
<div className= 'homepage'>
  <div className='directory-menu'>
    <div className='menu-item'>
      <div className='content'>
        <h1 className='title'>Landscape Art</h1>
        <span className='subtitle'>Discover Now</span>
      </div>
    </div>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>Abstract Art</h1>
          <span className='subtitle'>Discover Now</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>Photography</h1>
          <span className='subtitle'>Discover Now</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>Sculpture</h1>
          <span className='subtitle'>Discover Now</span>
        </div>
      </div>
    </div>
</div>
)

export default HomePage;
