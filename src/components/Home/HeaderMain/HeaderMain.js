import React from 'react';
import chair from '../../../Images/images/chair.png';

const HeaderMain = () => {
    return (
     <main className='row'>
        <div className="col-md-4 offset-md-1">

        </div>
        <div className="col-md-6">
            <img src={chair} alt="" className="img-fluid" />
        </div>

     </main>
    );
};

export default HeaderMain;