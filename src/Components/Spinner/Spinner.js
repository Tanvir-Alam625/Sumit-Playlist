import React from 'react';
import "./Spinner.css"
const Spinner = () => {
    return (
        <div className='absolute top-0 right-0 left-0 bottom-0 z-10 bg-[#494D80] flex items-center justify-center '>
            <div class="sk-cube-grid">
                <div class="sk-cube sk-cube1"></div>
                <div class="sk-cube sk-cube2"></div>
                <div class="sk-cube sk-cube3"></div>
                <div class="sk-cube sk-cube4"></div>
                <div class="sk-cube sk-cube5"></div>
                <div class="sk-cube sk-cube6"></div>
                <div class="sk-cube sk-cube7"></div>
                <div class="sk-cube sk-cube8"></div>
                <div class="sk-cube sk-cube9"></div>
            </div>
        </div>
    );
};

export default Spinner;