import React from 'react'

const List = (props) => {
// console.log(props)
    return(
        <ul>
            {
              props.listDetails.map((listItem) => <li key={listItem}><span>{listItem}</span><button onClick={()=>props.delete(listItem)}>Delete</button></li>)
            }
        </ul>
    )
}

export default List;