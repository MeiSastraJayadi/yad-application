import React from 'react'
import Select from 'react-select'
import { useState } from 'react'
import './profile.css'
import Image from './image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faIdBadge, 
    faUser, 
    faLock, 
    faEnvelope, 
    faPencil, 
    faXmark, 
    faPaperPlane, 
    } from '@fortawesome/free-solid-svg-icons'
import BaseComment from './baseComment'

const timeOptions = [
    { value : 'today', label : 'Today' }, 
    { value : 'week', label : 'This Week' }, 
    { value : 'month', label : 'This Month' }, 
    { value : 'year', label : 'This Year' }, 
    { value : 'all', label : 'Any Time' }, 
]; 


const UserProfile = () => {
    let someData = {
        username : "dek mei", 
        first_name : "Dek", 
        last_name : "Mei", 
        user_id : "dekmei_13",
        password : "meisastrajayadi13", 
        email : "kadeksastra201@gmail.com"
    }; 
    const [day, setDay] = useState(timeOptions[0]);  
    const [dayVal, setVal] = useState(timeOptions[0].value); 
    const selectOption = (event) => {
       setDay(event);  
        setVal(event.value)
    }

    const [fullImage, setFull] = useState(false)
    const [firstName, setFName] = useState(someData.first_name); 
    const [lastName, setLName] = useState(someData.last_name); 
    const [userId, setId] = useState(someData.user_id); 
    const [password, setPassword] = useState(someData.password); 
    const [email, setEmail] = useState(someData.email); 

    const [data, setData] = useState(someData); 
    const [writeLogo1, set1] = useState(faPencil); 
    const [writeLogo2, set2] = useState(faPencil); 
    const [writeLogo3, set3] = useState(faPencil); 
    const [writeLogo4, set4] = useState(faPencil); 
    const [writeLogo5, set5] = useState(faPencil); 
    const [showLogo, setShow] = useState(false); 

    const changeLogo = (setLogo, Logo) => {
        if (Logo === faPencil) { setLogo(faXmark) }
        else { setLogo(faPencil) }
    }

    const clickImage = () => {
        if (!fullImage) {
            setFull(true); 
            const wrapper = document.querySelector(".profile-base .wrapper"); 
            const gallery = document.querySelector(".profile-base .gallery"); 
            wrapper.classList.toggle("blur"); 
            gallery.classList.toggle("blur")

        }
        else {
            setFull(false); 
            const wrapper = document.querySelector(".profile-base .wrapper"); 
            const gallery = document.querySelector(".profile-base .gallery"); 
            wrapper.classList.toggle("blur"); 
            gallery.classList.toggle("blur")

        }
    }

    return (
        <div className="profile-base">
            <div className="wrapper">
            <div className="bio">
                <div className="user-profile-img">
                </div>
                { !data &&  <h1>Username</h1>}
                { data &&  <h1>{ data.username }</h1>}
                <div className="data">
                    <form>
                        <div className="two-input">
                            <div className="input-box">
                                <FontAwesomeIcon icon={faIdBadge} className="font-awesome"/>
                                { !data && 
                                    <input placeholder="First Name" className="user-input" disabled/>
                                }
                                { ((writeLogo1 === faPencil) && data) && 
                                    <input className="user-input" value={firstName} disabled/>
                                }
                                { ((writeLogo1 === faXmark) && data) && 
                                    <input className="user-input active" value={firstName} onChange={ e => {setFName(e.target.value); e.preventDefault();} }/>
                                }
                                <button className="write" onClick = {e => {changeLogo(set1, writeLogo1); e.preventDefault()}}>
                                    <FontAwesomeIcon icon={writeLogo1} className="pencil"/>
                                </button>
                            </div>
                            <div className="input-box">
                                <FontAwesomeIcon icon={faIdBadge} className="font-awesome"/>
                                { !data && 
                                    <input placeholder="Last Name" className="user-input" disabled/>
                                }
                                { ((writeLogo2 === faPencil) && data) && 
                                    <input className="user-input" value={lastName} disabled/>
                                }
                                { ((writeLogo2 === faXmark) && data) && 
                                    <input className="user-input active" value={lastName} onChange={ e => {setLName(e.target.value); e.preventDefault();} }/>
                                }
                                <button className="write" onClick = {e => {changeLogo(set2, writeLogo2); e.preventDefault()}}>
                                    <FontAwesomeIcon icon={writeLogo2} className="pencil"/>
                                </button>
                            </div>
                        </div>
                        <div className="two-input">
                            <div className="input-box">
                                <FontAwesomeIcon icon={faUser} className="font-awesome"/>
                                { !data && 
                                    <input placeholder="User ID" className="user-input" disabled/>
                                }
                                { ((writeLogo3 === faPencil) && data) && 
                                    <input className="user-input" value={userId} disabled/>
                                }
                                { ((writeLogo3 === faXmark) && data) && 
                                    <input className="user-input active" value={userId} onChange={ e => {setId(e.target.value); e.preventDefault();} }/>
                                }
                                <button className="write" onClick = {e => {changeLogo(set3, writeLogo3); e.preventDefault()}}>
                                    <FontAwesomeIcon icon={writeLogo3} className="pencil"/>
                                </button>
                            </div>
                            <div className="input-box">
                                <FontAwesomeIcon icon={faLock} className="font-awesome"/>
                                { !data && 
                                    <input placeholder="Password" className="user-input" disabled/>
                                }
                                { ((writeLogo4 === faPencil) && data) && 
                                    <input className="user-input" type="password" value={password} disabled/>
                                }
                                { ((writeLogo4 === faXmark) && data) && 
                                    <input className="user-input active" type="password" value={password} onChange={ e => {setPassword(e.target.value); e.preventDefault();} }/>
                                }
                                <button className="write" onClick = {e => {changeLogo(set4, writeLogo4); e.preventDefault()}}>
                                    <FontAwesomeIcon icon={writeLogo4} className="pencil"/>
                                </button>
                            </div>
                        </div>
                        <div className="input-box for-email">
                            <FontAwesomeIcon icon={faEnvelope} className="font-awesome"/>
                            { !data && 
                                <input placeholder="Email" className="user-input" disabled/>
                            }
                            { ((writeLogo5 === faPencil) && data) && 
                                <input className="user-input" type="email" value={email} disabled/>
                            }
                            { ((writeLogo5 === faXmark) && data) && 
                                <input className="user-input active" type="email" value={email} onChange={ e => {setEmail(e.target.value); e.preventDefault();} }/>
                            }
                            <button className="write" onClick = {e => {changeLogo(set5, writeLogo5); e.preventDefault()}}>
                                <FontAwesomeIcon icon={writeLogo5} className="pencil"/>
                            </button>
                        </div>
                        <div className="input-box">
                            <input type="submit" value="Submit Change"/>
                        </div>
                    </form>
                </div>
                <button className="logout">Log Out</button>
            </div>
            </div>
            <div className="gallery">
                <h1>All Post</h1>
                <Select 
                options = { timeOptions } 
                />
                <div className="post-gallery">
                    <div className="some-image" onClick={clickImage}>
                        <img src={require('/home/freak_mei/Projects/yad-application/src/profile/sample-image/pexels-fabian-wiktor-994605.jpg')} alt="some sample"/>
                    </div>
                    <div className="some-image">
                        <img src={require('/home/freak_mei/Projects/yad-application/src/profile/sample-image/pexels-pixabay-206359.jpg')} alt="some sample"/>
                    </div>
                    <div className="some-image">
                        <img src={require('/home/freak_mei/Projects/yad-application/src/profile/sample-image/pexels-fabian-wiktor-994605.jpg')} alt="some sample"/>
                    </div>
                    <div className="some-image">
                        <img src={require('/home/freak_mei/Projects/yad-application/src/profile/sample-image/pexels-pixabay-206359.jpg')} alt="some sample"/>
                    </div>
                    <div className="some-image">
                        <img src={require('/home/freak_mei/Projects/yad-application/src/profile/sample-image/pexels-fabian-wiktor-994605.jpg')} alt="some sample"/>
                    </div>
                    <div className="some-image">
                        <img src={require('/home/freak_mei/Projects/yad-application/src/profile/sample-image/pexels-pixabay-206359.jpg')} alt="some sample"/>
                    </div>
                    <div className="some-image">
                        <img src={require('/home/freak_mei/Projects/yad-application/src/profile/sample-image/pexels-fabian-wiktor-994605.jpg')} alt="some sample"/>
                    </div>
                    <div className="some-image">
                        <img src={require('/home/freak_mei/Projects/yad-application/src/profile/sample-image/pexels-pixabay-206359.jpg')} alt="some sample"/>
                    </div>
                    <div className="some-image">
                        <img src={require('/home/freak_mei/Projects/yad-application/src/profile/sample-image/pexels-fabian-wiktor-994605.jpg')} alt="some sample"/>
                    </div>
                    <div className="some-image">
                        <img src={require('/home/freak_mei/Projects/yad-application/src/profile/sample-image/pexels-pixabay-206359.jpg')} alt="some sample"/>
                    </div>
                    <div className="some-image">
                        <img src={require('/home/freak_mei/Projects/yad-application/src/profile/sample-image/pexels-fabian-wiktor-994605.jpg')} alt="some sample"/>
                    </div>
                    <div className="some-image">
                        <img src={require('/home/freak_mei/Projects/yad-application/src/profile/sample-image/pexels-pixabay-206359.jpg')} alt="some sample"/>
                    </div>
                    <div className="some-image">
                        <img src={require('/home/freak_mei/Projects/yad-application/src/profile/sample-image/pexels-fabian-wiktor-994605.jpg')} alt="some sample"/>
                    </div>
                </div>
            </div>
            { fullImage && <Image image={'./sample-image/pexels-pixabay-206359.jpg'} closeFunction={clickImage} setShow={ setShow }></Image>}
            { showLogo && <BaseComment setShow={setShow} closeImage={clickImage}></BaseComment> }
        </div>
    )
}

export default UserProfile; 
