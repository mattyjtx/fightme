import React from 'react';
import "./Header.css";
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';

function Header() {
  return (
    // BEM
    <div className='header'>
        <PersonIcon />
        <h2>ima header</h2>
        <ForumIcon />
    </div>
  )
}

export default Header