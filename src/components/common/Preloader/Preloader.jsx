import React from 'react';
import preloader from './freloader.svg';

let Preloader = (props) => {
    return (
        <div className='preloader'>
            <img src={preloader} alt='#' />
        </div>)
}
export default Preloader;