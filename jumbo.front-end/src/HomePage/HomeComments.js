import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Collapse from 'react-bootstrap/Collapse';
import WithHeaderAndQuoteExample from './Homecomment';

export default function Example() {
    const [open, setOpen] = useState(false);

    return (
        <div style={{
            width: '98%',
        }}>
            <div style={{
                width: '100%',
                display: 'flex',
            }}>
                <Button
                    size='small'
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                >
                    Comments
                </Button>
            </div>
            <div>
                <Collapse in={open} >

                    <div id="example-collapse-text" style={{
                        overflowY: 'auto',
                        maxHeight: '150px'
                    }}>
                        {/* <p style={{ borderBottom: "1px solid rgb(212, 212, 212)" }} > lashdajskdjas</p>
                        <p style={{ borderBottom: "1px solid rgb(212, 212, 212)" }}>lashdajskdjas</p>
                        <p style={{ borderBottom: "1px solid rgb(212, 212, 212)" }} > lashdajskdjas</p>
                        <p style={{ borderBottom: "1px solid rgb(212, 212, 212)" }} > lashdajskdjas</p>
                        <p style={{ borderBottom: "1px solid rgb(212, 212, 212)" }} > lashdajskdjas</p>
                        <p style={{ borderBottom: "1px solid rgb(212, 212, 212)" }} > lashdajskdjas</p>
                        <p style={{ borderBottom: "1px solid rgb(212, 212, 212)" }} > lashdajskdjas</p>
                        <p style={{ borderBottom: "1px solid rgb(212, 212, 212)" }} > lashdajskdjas</p>
                        <p style={{ borderBottom: "1px solid rgb(212, 212, 212)" }} > lashdajskdjas</p>
                        <p style={{ borderBottom: "1px solid rgb(212, 212, 212)" }} > lashdajskdjas</p>
                        <p style={{ borderBottom: "1px solid rgb(212, 212, 212)" }} > lashdajskdjas</p>
                        <p style={{ borderBottom: "1px solid rgb(212, 212, 212)" }} > lashdajskdjas</p>
                        <p style={{ borderBottom: "1px solid rgb(212, 212, 212)" }} > lashdajskdjas</p>
                        <p style={{ borderBottom: "1px solid rgb(212, 212, 212)" }} > lashdajskdjas</p> */}
                        <WithHeaderAndQuoteExample/>
                        <WithHeaderAndQuoteExample/>
                        <WithHeaderAndQuoteExample/>
                        <WithHeaderAndQuoteExample/>
                        <WithHeaderAndQuoteExample/>
                        <WithHeaderAndQuoteExample/>
                        <WithHeaderAndQuoteExample/>
                        <WithHeaderAndQuoteExample/>



                    </div>

                </Collapse >
            </div>
        </div >
    );
}

