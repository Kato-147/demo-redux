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
            <img className='info-ava' src='https://www.youtube.com/redirect?event=comments&redir_token=QUFFLUhqbGZNaU1ycUNUUkZxS2lOalBVa3Z1a1AwWEJOUXxBQ3Jtc0tsd05ydEtfRnctZlpDMWR0TGRiU20tVnRpTEltaHJHSkV1SlFfZXRReW5tT3pOZWZlQnFYSXlMZzk3Q01uU3l6LXVnM3pIVjZVQVBlbUxiejlUY1UzMU9wVUk5azNtY3dxMDkwYUN6N2RQMlQxcUhmUQ&q=https%3A%2F%2Fpreview.redd.it%2Frrz3hmsxcll71.png%3Fwidth%3D640%26crop%3Dsmart%26auto%3Dwebp%26s%3D87cc5ed38d8f088ef9fffef7a4c5756b64309d6a' alt='avatar'/>
            <div className='info-username'>Ton dep chai</div>
            <div className='info-age'>21 years old</div>
            <div className='info-about'>i'm a software engineer</div>
        </div>
    </header>
    </>
  )
}

export default Header