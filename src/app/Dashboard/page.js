import React from 'react';

const page = ({cheldren}) => {
    return (
        <div>
        <nav>
            <a href=''>dashboard</a>
            </nav> 
            {cheldren}   
        </div>
        
    );
};

export default page;