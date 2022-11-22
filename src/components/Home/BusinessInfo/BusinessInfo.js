import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock,faMapMarker,faPhone } from '@fortawesome/free-solid-svg-icons'
  const infosdata =[{
    title:'Opening Hours',
    description:'we are open 7 days',
    icon:faClock,
    background:'primary'
  },
   {
    title:'Visit out location',
    description:'Brooklyn, NY 10002 USA',
    icon:faMapMarker,
    background:'dark'
  },
  {
    title:'Call us now',
    description:'+15697854124',
    icon:faPhone,
    background:'primary'
  }
]
  
const BusinessInfo = () => {
    
    return (
         <section className='row'>
             {
                infosdata.map(info=><InfoCard info={info}></InfoCard>)
             }
         </section>
    );
};

export default BusinessInfo;