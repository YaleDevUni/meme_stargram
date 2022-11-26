import React from 'react';

function print_env() {
    console.log(1)
    console.log(process.env.REACT_APP_NOT_SECRET_CODE)
    console.log(process.env.REACT_APP_DOMAIN)
}

export default function Body() {
    print_env()
    return null;
}