import React from 'react';
import "./Header.css";
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import SportsMmaIcon from '@mui/icons-material/SportsMma';
import IconButton from '@mui/material/IconButton';

function Header() {
  return (
    // BEM
    <div className='header'>
        <IconButton>
        <PersonIcon className='header__icon' fontSize='large'/>
        </IconButton>
        <SportsMmaIcon className='header__icon' fontSize='large'/>
        <IconButton>
        <ForumIcon className='header__icon' fontSize='large'/>
        </IconButton>
    </div>
  )
}

export default Header