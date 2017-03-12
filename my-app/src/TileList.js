import React from 'react';
import Tile from './Tile.js';





export default (props) =>(

    <div>
        {
            props.list.map((item)=>(
                <Tile {...item} />
            ))
        }
    </div>
    

);