import React from 'react'
import './header.css'
const Header = (props) => {

  const {setEdit} = props;

  const handleEdit = () => {
    setEdit(true);
  }

  return (
    <>
    <header style={{
        backgroundColor: '#ff9051', 
        backgroundImage: 'linear-gradient(180deg, #ff9051 2%, #ff9051, 65%, #181818 100%)',
    }}>
        <div className='info-container'>
            <div className='info-edit' onClick={handleEdit}>Edit</div>
            <img className='info-ava' src='https://preview.redd.it/rrz3hmsxcll71.png?width=640&crop=smart&auto=webp&s=87cc5ed38d8f088ef9fffef7a4c5756b64309d6a' alt='avatar'/>
            <div className='info-username'>Ton dep chai</div>
            <div className='info-age'>21 years old</div>
            <div className='info-about'>i'm a software engineer</div>
        </div>
    </header>
    </>
  )
}

export default Header