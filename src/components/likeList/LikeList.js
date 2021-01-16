import React, { useState, useEffect } from 'react';
import Header from '../header/Header'; 
import { init } from 'emailjs-com';
import emailjs from 'emailjs-com'; 
import './LikeList.scss'; 
import Confirmation from './Confirmation';
    
init(process.env.EMAIL_USER);

const LikeList = () => {
    const [savedLikes, setSavedLikes] = useState([]); 
    const [recipient, setRecipient] = useState('');
    const [mailStatus, setMailStatus] = useState(false); 
    const [update, setUpdate] = useState(''); 
    const [displayError, setDisplayError] = useState(false); 
    const [empty, setEmpty] = useState(true); 

    useEffect(() => {
        let list = window.localStorage.getItem('likes'); 
        let likesInLS = JSON.parse(list); 
        setSavedLikes(likesInLS); 

        if(likesInLS == undefined) {
            console.log(savedLikes)
            setEmpty(true); 
        } else {
            setEmpty(false)
        }
    }, [update]); 

    //TODOD: Empty input field value = ''
    const updateRecipient = (e) => {
        setRecipient(e.target.value);  
    }; 

    const removeItem = (e, index) => {
        savedLikes.splice(index, 1);
        window.localStorage.setItem('likes', JSON.stringify(savedLikes));  
        setUpdate(e); 
    }; 

    const submit = (e) => {
        e.preventDefault(); 
        let sendTo = recipient; 
        //funktion som returnerar html li-taggar, inte objekt 

        if(empty === false) {

            const sendLikes = () => {
                //return for main function
                return savedLikes.map((item) => {
                    //returns sring literal with li's 
                    return `<li>${item.title}</li>`   
                })
            }; 
    
            let templateParams = {
                to: sendTo, //from input
                html: `${sendLikes()}` //function to return string literals 
            }; 
    
            emailjs.send('default_service', 'template_ey9wjk9', templateParams)
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    setMailStatus(true); //rendera confirmation  
                    localStorage.clear('likes'); 
    
                }, (error) => {
                   
                    console.log('FAILED...', error);
                    setDisplayError(true); 
                    setMailStatus(false); //rendera fail
                });


        } else {
            setDisplayError(true); 
        }

    };

    if(mailStatus == true) {
       return <Confirmation props={'test'} />
    } else {
        return (
            <>
                <section className="page">
                    <div className="page__header">
                        <Header props='My likes' /> 
                    </div>
                        { empty == false && savedLikes.length > 0 ?
                            <ul className="likes__list">
                                { 
                                    savedLikes.map((item, index) => {
                                        let id = item.id; 
                                        return( 
                                            <li key={index} 
                                                className="likes__item"
                                            >{item.title}
                                            <button type="button" onClick={() => removeItem(id, index)}>
                                                Remove
                                            </button>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                            : <h3>Your list is empty!</h3> }
                  
                    <div className="page__input">
                        <form className="email__form">
                            <label htmlFor="mail">Email me my list:</label>
                            <input type="mail" name="mail" onChange={updateRecipient}/>
                            {/* empty input field  */}
                            <input type="submit" value="Send" onClick={submit}/>
                            { displayError 
                                ? <p>Error! Try another emailadress.</p>
                                : null
                            } 
                        </form>
                    </div>
                </section>
            </>
        );
    }
}

export default LikeList;
