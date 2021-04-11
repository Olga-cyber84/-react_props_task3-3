import React from 'react'
import PropTypes from 'prop-types'

function Typing({from, message}) {
    return (
        <li className="clearfix" key={message.id}>
            <div className="message-data align-right">
                <span className="message-data-time">{message.time}</span> &nbsp; &nbsp;
                <span className="message-data-name">{from.name}</span>
                <i className="fa fa-circle me"></i>
            </div>
            <div className="typing">
                печатает ...
            </div>
        </li>  
    )
}

Typing.propTypes = {
    from: PropTypes.object,
    message: PropTypes.object
}

export default Typing

