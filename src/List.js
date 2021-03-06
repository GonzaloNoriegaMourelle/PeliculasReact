import React from 'react';
import Item from './Item';

function List (props){
    return(

        <div className="list">
            {props.items.map(item =>
               <Item
               key    = {item.id}
               title  = {item.title}
               id     = {item.id}
               image  = {item.image}
               rating = {item.rating}
               onupdaterating={props.onupdaterating}
               onremove = {props.onremove}
               />
               
                )}
        </div> 
        
    )
}


export default List;