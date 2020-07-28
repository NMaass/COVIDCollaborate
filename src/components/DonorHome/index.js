import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import {getRequests} from "../../api";
import DonorCard from "../DonorCard";


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
        <Button onClick = {onClick}>View Requests</Button>
        {Boolean(request.length) && request.map((request, i) => {
            return(
                <DonorCard
                    key={i}
                    heading={request.item}
                    body={request.description}
                    date={request.date}
                    amount={request.amount}
                >
                    <h1>{request.name}</h1>
                </DonorCard>
            )
        }
        </div>



}
