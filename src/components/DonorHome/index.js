import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import {getRequests} from "../../api";
import {DonorCard} from "../DonorCard";
import MaskCard from "../DonorCard/masks";
import GlovesCard from "../DonorCard/gloves";
import SurgMaskCard from "../DonorCard/n95";




export default function DonorHome() {
    const [request, setRequest] = useState([])
    const [payload, setPayload] = useState([])

    const onClick = async e => {
       e.preventDefault();
       const payload = await getRequests(requests => {
            setRequest(requests);
       })
        setPayload(payload)
    };

    return(
    <div>
        {/*Ok so this is nasty and I will fix it*/}
        {/*<Button onClick = {onClick}>View Requests</Button>*/}
        {/*{Boolean(request.length) && request.map((request, i) => (*/}
        {/*    <Card*/}
        {/*        key={i}*/}
        {/*    >*/}
        {/*        <h1>{request.name}</h1>*/}
        {/*    </Card>*/}
        {/*    )*/}
        {/*)}*/}
        <DonorCard></DonorCard>
        <MaskCard></MaskCard>
        <GlovesCard></GlovesCard>
        <SurgMaskCard></SurgMaskCard>
    </div>
    )
}
