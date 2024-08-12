import React from 'react';

const Button = (props) => {
    return (
        <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700">
       {props.name}
      </button>
    )
}

export default Button