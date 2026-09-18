import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const StarRating = ({ rating }) => {
    const stars = [];

    const value = Number(rating);

    for (let i = 1; i <= 5; i++) {
        if (value >= i) {
            stars.push(<FaStar key={i} className="text-yellow-400" />);
        } else if (value >= i - 0.5) {
            stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
        } else {
            stars.push(<FaRegStar key={i} className="text-yellow-400" />);
        }
    }

    return <div className="flex items-center gap-1">{stars}</div>;
};

export default StarRating;