import React from 'react';

const Info = (props) => { 
 
    if(props.info === 'About') {
        return (
            <span>
                This page is created as an FrontEnd Examproject.
                The data is collected using a v.2 of a closed API to Consupedia.
                I wanted to enhance the look of a possible product search, and potentially
                further elaborate a price function, and filter functions.
            </span>
        ); 
    } 
    if(props.info === 'The ConsuValue') {
        return (
            <>
            <span>
                The ConsuValue is a value calculated
               based on each products five key points:
           </span>
                <ul>
                    <li>
                        Health,
                    </li>
                    <li>
                        Environment,
                    </li>
                    <li>
                        Social justice,
                    </li>
                    <li>
                        Quality,
                    </li>
                    <li>
                        Price
                    </li>
                </ul>
            <span>
            A simple guideline is:
                "The higher ConsuValue, the better the product".
                Details about each products values can be found on ConsuPedia!
            </span>
            <a href="https://consupedia.se/about-consuvalue">Read more</a>
        </> 
        ); 
    } 
    if(props.info === 'Contact') {
        return(
            <span>
                Reach out if you have any questions!
                <ul>
                    <li>
                        If you have questions about the data:
                        <a href="www.consupedia.se">Visit Consupedia!</a>
                    </li>
                    <li>
                        If you have questions to the page creator:
                        <a href="mailto:f.vforsman@gmail.com">My email</a>
                    </li>
                    <li>
                        General life questions:
                        <a href="www.google.se">Go here</a>
                    </li>
                </ul>
            </span>
        );
    }
    return( null ); 
}

export default Info; 
