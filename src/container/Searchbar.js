import React from 'react'
import iconsearch from '../images/icon-search.svg';
import mic from '../images/mic.svg';


export default function Searchbar() {
  return (
    <div className='contain'>
        <form action='' className='searchbar'>
            <img className='iconsearch' src= {iconsearch} alt= 'Logo' />
            <input className='input'  autoComplete="aff" spellCheck="false" role={'combobox'} placeholder="Search Google or type a URL" aria-live='polite'></input>
            <img src= {mic} alt= 'mic' />
        </form>
    </div>
  );
}
