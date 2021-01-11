import React, { useState, useEffect, useContext } from 'react';
// import { LikeContext } from '../likeList/LikeContext';

const LikeList = (results) => {
    console.log('LL props', results);
    // const {likes, setLikes} = useContext(LikeContext);

    //state består av en array 
    // const [value, setValue] = useState([]); 

    //sätt LS varje gång komponenten laddas
    //stringify vår state-array 
    // useEffect(() => {
    //     localStorage.setItem('list', JSON.stringify(value));
    // }, [value]);


    // //hämta från local storage 
    // const [value, setValue] = useState(
    //     localStorage.getItem('myValueInLocalStorage') || ''
    // );

    //set with stringified array 
    // localStorage.setItem('dataKey', JSON.stringify(array));

    //get item and turn into array 
    // let val = localStorage.getItem('list');
    // JSON.parse(val); 
     
    return (
        <>
         like list
        </>
    );
}

export default LikeList;



            // However, 
            // using the local storage in React's function components 
            // is a side-effect which is best implemented 
            // with the Effect Hook which runs every time the value property changes

            /*

            useEffect(() => {
                localStorage.setItem('myValueInLocalStorage', value);
            }, [value]);

            */
            // // setter
            // localStorage.setItem('myData', data);
            
            // // getter
            // localStorage.getItem('myData');
            
            // // remove
            // localStorage.removeItem('myData');
            
            // // remove all
            // localStorage.clear();

