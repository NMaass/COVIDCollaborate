import React from 'react';

import {getUserType} from "../../api";
import HospitalHome from "../HospitalHome";
import DonorHome from "../DonorHome";
//this is where we're going to check user type, more on that later
export default function homePage() {
    const userType = getUserType();
    if(userType == 'hospital'){
        return <HospitalHome></HospitalHome>
    }
    else{
        return <DonorHome></DonorHome>
    }
}
