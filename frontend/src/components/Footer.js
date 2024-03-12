import React from "react";


function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="text-center bg-light py-3">
            <p className="mb-0"> 
                 Copyright ⓒ {year} Boring Co. All rights reserved.
            </p>
        </footer>
    );
}

export default Footer;

