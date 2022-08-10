import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faXmark, faComment, faTrash } from '@fortawesome/free-solid-svg-icons'

const Image = ({ image, closeFunction, setShow }) => {
    return (
        <div className="image-full">
            <FontAwesomeIcon icon={faXmark} className="x-image" onClick={closeFunction}/>
            <img src={require("" + image)} alt="some sample"/>
            <div className="some-action">
                <div className="action">
                    <FontAwesomeIcon icon={faHeart} className="font-action"/>
                    <p>200</p>
                </div>
                <div className="action" onClick={() => { setShow(true) }}>
                    <FontAwesomeIcon icon={faComment} className="font-action" onClick={ () => { setShow(true) } }/>
                    <p>200</p>
                </div>
                <div className="action">
                    <FontAwesomeIcon icon={faTrash} className="font-action"/>
                    <p className="delete">Delete</p>
                </div>
            </div>
        </div>
    )
}

export default Image; 
