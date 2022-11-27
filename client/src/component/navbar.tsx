import React, { FunctionComponent } from "react";

type NavbarProps = {
    is_signed_in: boolean,
    name: string,
    new_alarm: number
}

export const Navbar: FunctionComponent<NavbarProps> = ({ is_signed_in, name, new_alarm}) => {
    if (is_signed_in) {
        return(
            <nav className="navbar-container">
                Hello, {name}. You have new {new_alarm} memes while you left.
            </nav> 
        )
    } else {
        return(
            <nav className="navbar-container">
                Hello, anonymous.
            </nav> 
        )
    }
}
