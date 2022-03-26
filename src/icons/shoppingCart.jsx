import React, { useState } from 'react'



const shoppingCart = (color, wh ) => {

    return (
        <>
            <svg
                className=''
                viewBox="0 0 24 24"
                fill={color}
                height={wh}
                width={wh}
            >
                <path d="M17 16a3 3 0 11-2.83 2H9.83a3 3 0 11-5.62-.1A3 3 0 015 12V4H3a1 1 0 110-2h3a1 1 0 011 1v1h14a1 1 0 01.9 1.45l-4 8a1 1 0 01-.9.55H5a1 1 0 000 2h12zM7 12h9.38l3-6H7v6zm0 8a1 1 0 100-2 1 1 0 000 2zm10 0a1 1 0 100-2 1 1 0 000 2z" />
            </svg>
        </>
    )
}

export default shoppingCart