import React, { useState, useEffect } from 'react';
import Header from '../header/Header'; 
import { init } from 'emailjs-com';
import emailjs from 'emailjs-com'; 
import './LikeList.scss'; 
import Confirmation from './Confirmation';
    
//Save in env
init("user_UMrGuKNuZujxb66Utvg71");

const LikeList = () => {
    const [savedLikes, setSavedLikes] = useState([]); 
    const [recipient, setRecipient] = useState('');
    const [mailStatus, setMailStatus] = useState(false); 
    const [update, setUpdate] = useState(''); 

    useEffect(() => {
        let list = window.localStorage.getItem('likes'); 
        let likesInLS = JSON.parse(list); 
        setSavedLikes(likesInLS); 
    }, [update]); 

    //TODOD: Empty input field value = ''
    const updateRecipient = (e) => {
        setRecipient(e.target.value);  
    }; 

    const removeItem = (e, index) => {
        savedLikes.splice(index, 1);
        window.localStorage.setItem('likes', JSON.stringify(savedLikes)); 
        //rendera  
        setUpdate(e); 
    }; 

    const submit = (e) => {
        e.preventDefault(); 
        let sendTo = recipient; 
        //Save in env
        // User ID
        // user_UMrGuKNuZujxb66Utvg71
        // Access Token
        // 89f543c5a453d39bcb8b70b685bda6df

        const myList = () => savedLikes.map((item, index) => {
                return( 
                    <li key={index} 
                        className="likes__list"
                    >{item.title}</li>
                )
            })
        console.log(myList); 

        //TODO: fix html for email? how to return the entire list 
        let templateParams = {
            to: sendTo, //from input
            html: `${myList}` //ger tomt 
        }; 
        
        //TODO: 
        //Save templade in env???
        emailjs.send('default_service', 'template_ey9wjk9', templateParams)
            .then((response) => {
                
                console.log('SUCCESS!', response.status, response.text);
                setMailStatus(!mailStatus); //rendera confirmation  
            }, (error) => {
               
                console.log('FAILED...', error);
                setMailStatus(false); //rendera fail
            });
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
                    <div className="page__input">
                        <form className="email__form">
                            <label htmlFor="mail">Email me my list:</label>
                            <input type="mail" name="mail" onChange={updateRecipient}/>
                            {/* empty input field  */}
                            <input type="submit" value="Send" onClick={submit}/>
                            { mailStatus 
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
