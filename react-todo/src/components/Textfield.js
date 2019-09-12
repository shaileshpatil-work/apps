import React from 'react'

const TextField = (props) => {
    return (
        <div>
            <input type="text" placeholder={props.placeholderVal}/>
        </div>
    )
}

export default TextField;