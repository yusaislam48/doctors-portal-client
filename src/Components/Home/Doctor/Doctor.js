import React from 'react';
import img from '../../../images/doctor-sm.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
const Doctor = ({doctor}) => {
    
    return (
        <div className="col-md-4 text-center">
            {
                doctor.image
                ? <img style={{height: '300px'}} className="img-fluid mb-3" src={`data:image/png;base64,${doctor.image.img}`} alt=""/> 
                : <img style={{height: '300px'}} className="img-fluid mb-3" src={`https://doctors-portal01.herokuapp.com/${doctor.img}`} alt=""/>
            }
            <h4>{doctor.name}</h4>
            <p> <FontAwesomeIcon className="text-primary" icon={faPhoneAlt}/> +880-188-934789</p>
        </div>
    );
};

export default Doctor;