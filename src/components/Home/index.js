import React from 'react';

import {getUserType} from "../../api";
//this is where we're going to check user type, more on that later
export default function homePage() {
    const userType = getUserType();
    if(userType == 'hospital'){
        return <HospitalHome />;
    }
    else{
        return <DonorHome />
    }
}
