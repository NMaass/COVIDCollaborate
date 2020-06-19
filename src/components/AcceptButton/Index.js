import React from "react";
import "./styles.css";
import Card from "Card";
import { Grid } from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";




const useStyles = makeStyles({
    GridContainer: {
        paddingLeft: '20px',
        padingRight: '20px',

    }


});
export default function AcceptButton() {
    return (
        <Grid container spacing ={4}>
            <Grid item xs={12} sm= {6} md= {4}>
                <Card/>
            </Grid>
            <Grid item xs={12} sm= {6} md= {4}>
                <Card/>
            </Grid>
            <Grid item xs={12} sm= {6} md= {4}>
                <Card/>
            </Grid>
            <Grid item xs={12} sm= {6} md= {4}>
                <Card/>
            </Grid>
            <Grid item xs={12} sm= {6} md= {4}>
                <Card/>
            </Grid>
        </Grid>
    );

}

