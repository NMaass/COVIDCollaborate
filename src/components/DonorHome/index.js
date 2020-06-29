import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import {getRequests} from "../../api";
import Card from "@material-ui/core/Card";


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
        {Boolean(request.length) && request.map((request, i) => (
            <Card
                key={i}
            >
                <h1>{request.name}</h1>
            </Card>
            )
        )}
    </div>
)
}
