import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStarHalfAlt, faStar } from '@fortawesome/free-solid-svg-icons'

function getStar(value, i) {
    switch (value) {
        case 0:
            return <FontAwesomeIcon key={i} icon={faStar} style={{ color: "black", opacity: "0.5" }} className="mr-1" />
        case 50:
            return <FontAwesomeIcon key={i} icon={faStarHalfAlt} style={{ color: "blue", opacity: "0.5" }} className="mr-1" />
        case 100:
            return <FontAwesomeIcon key={i} icon={faStar} style={{ color: "blue", opacity: "0.5" }} className="mr-1" />

        default: return <FontAwesomeIcon key={i} icon={faStar} style={{ color: "black", opacity: "0.5" }} className="mr-1" />
    }
}

function getStarts(value) {
    const stars = []
    const [whole, part] = parseFloat(value).toString().split(".")

    for (let i = 0; i < whole; i++) stars.push(100)
        if (part) stars.push(50)
    for (let i = whole; i < (part ? 4 : 5); i++) stars.push(0)

    return stars;
}

const Rating = ({ value }) => {
    return (

        getStarts(value).map((value,i) =>
            getStar(value, i)
        )

    )
}

export default Rating;