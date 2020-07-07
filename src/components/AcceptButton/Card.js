import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 200
    },

    bullet: {
        display: "inline-Black",
        margin: "0 2px",
        transform: "scale(0.8)"
    },

    Title: {
        fontSize: 14
    },

    pos: {
        marginBottom: 12
    }

});

export default function ImgMediaCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Gloves"
                    height="140"
                    image="/static/images/cards/Gloves.jpg"
                    title="Gloves Request"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Gloves
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Hospital Request For Gloves
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Accept
                </Button>
                <Button size="small" color="primary">
                    Decline
                </Button>
            </CardActions>
        </Card>
    );
}