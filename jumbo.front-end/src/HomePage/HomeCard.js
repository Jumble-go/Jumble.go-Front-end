import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { DateTime } from "luxon";
import * as React from 'react';
import { useEffect, useState } from 'react';
import Example from './HomeComments';

export default function MediaCard(props) {

    const [comments, setComments] = useState([])

    useEffect(() => {

        fetch('http://localhost:8000/get_post_commenst', {
            method: "POST",
            body: JSON.stringify({
                id: props.id
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(data => {
                setComments(data)
                console.log(data)
            })
    }, [])


    return (
        <div className='Card' id={props.id}>
            <Card sx={{ maxWidth: 455 }}>
                <CardMedia
                    sx={{ height: 303, objectFit: 'contain' }}
                    image={props.image}
                    title="Itenm"
                />
                <CardContent sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'baseline'
                }}>
                    <Typography gutterBottom component="div" style={{
                        display: 'flex',
                        justifyContent: "space-between",
                        width: "100%"
                    }}>
                        <h5>{props.tittle}</h5>
                        {/* <h10 style={{ opacity: '0.5' }}>{props.date}</h10> */}
                        <h10 style={{ opacity: '0.5' }} >{DateTime.fromISO(props.date).toRelative()}</h10>
                    </Typography>
                    <Typography gutterBottom variant="h9" component="div" sx={{ opacity: '0.5', fontSize: '15px' }}>
                        By: {props.userName}
                    </Typography>
                    <Typography variant="body2" style={{ opacity: '0.9', fontSize: '17px', wordBreak: 'break-all', whiteSpace: 'normal'}} >
                        {props.des}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small"   >
                        <FavoriteIcon onClick={(e) => { console.log('hello') }} />
                    </Button>
                    <Button size="small">Share</Button>
                    <h5 style={{ color: 'green', marginLeft: '60%' }}> {'$' + props.price}</h5>
                </CardActions>
                <div>
                    <Example />
                    {}
                </div>
            </Card>
        </div>
    );
}