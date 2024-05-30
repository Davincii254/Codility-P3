// 1. ReactRatings
// Create a system to display star ratings using React components.
// Task description
// Write a system to display star ratings using React components.
// Requirements
// Your task is to create three components in React which, based on supplied data, will allow the display of individual ratings, a list of ratings and an average rating. The components are:
// Rating component
// Displays an individual rating. It takes name, rate, content properties and, depending on the rating, displays the appropriate number of filled and empty stars. For example: a rating of 4 means displaying four filled stars and one empty star.
// The Rating component should have the div with className ratings__item.
// In the Rating component, name should be rendered in <h3></h3> tags and content in <p></p> tags.
// Each star must be wrapped in its own <span></span> tag.
// AverageRating component
// Displays the average rating. Depending on the given ratings property, it should calculate the average rating from all ratings rounded up (4.01 to 5, but 4.0 to 4) and display an appropriate number of stars, as with the Rating component.
// The AverageRating component should have the div with className ratings__average.
// RatingsList component
// Takes ratings as its property and displays both the average rating and all individual ratings.
// The RatingsList component should have the div with className ratings.
// Remember to export Rating and AverageRating as named exports and RatingsList as the default export
// Assumptions
// The rate property of the ratings element is always an integer.
// The ratings list will appear as follows:
// const ratings = [
//     {
//         "name": "John Doe",
//         "content": "Nice thing!",
//         "rate": 5,
//     },
//     {
//         // next rating
//     }
// ]


// Evaluation will always be possible on a scale from 1 to 5.
// Rating lists will be at least two items long.
// The empty star is the &#9734; HTML element.
// The filled star is the &#9733; HTML element.


import React from "react";

// Use these stars (HTML entities) for displaying ratings: "★", "☆"

// Rating component to display individual rating
const Rating = ({ name, rate, content }) => {
    // Calculate the number of filled and empty stars
    const filledStars = Math.floor(rate); // Round down the rating to get filled stars
    const emptyStars = 5 - filledStars; // Calculate the remaining empty stars

    return (
        <div className="ratings__item">
            <div>
                {/* Generate filled stars */}
                {[...Array(filledStars)].map((_, index) => (
                    <span key={index}>★</span> // Display filled star
                ))}
                {/* Generate empty stars */}
                {[...Array(emptyStars)].map((_, index) => (
                    <span key={index}>☆</span> // Display empty star
                ))}
            </div>
            <h3>{name}</h3> {/* Display the name of the rater */}
            <p>{content}</p> {/* Display the content of the rating */}
        </div>
    );
};

// AverageRating component to display the average rating
const AverageRating = ({ ratings }) => {
    // Calculate the total rating sum
    const totalRating = ratings.reduce((sum, rating) => sum + rating.rate, 0);
    // Calculate the average rating and round up
    const averageRating = Math.ceil(totalRating / ratings.length);

    // Calculate the number of filled and empty stars for the average rating
    const filledStars = averageRating;
    const emptyStars = 5 - filledStars;

    return (
        <div className="ratings__average">
            {/* Generate filled stars for average rating */}
            {[...Array(filledStars)].map((_, index) => (
                <span key={index}>&#9733;</span> // Display filled star
            ))}
            {/* Generate empty stars for average rating */}
            {[...Array(emptyStars)].map((_, index) => (
                <span key={index}>&#9734;</span> // Display empty star
            ))}
        </div>
    );
};

// RatingsList component to display a list of ratings
const RatingsList = ({ ratings }) => {
    return (
        <div className="ratings">
            {/* Display the average rating */}
            <AverageRating ratings={ratings} />
            {/* Map through each rating and display it using the Rating component */}
            {ratings.map((rating, index) => (
                <Rating key={index} {...rating} /> // Spread the rating properties
            ))}
        </div>
    );
};

// Export the Rating and AverageRating components for use in other parts of the application
export { Rating, AverageRating };

// Export the RatingsList component as the default export
export default RatingsList;
