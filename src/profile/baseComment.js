import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import Comment from './comment'

const BaseComment = ({ setShow, closeImage }) => {
    return (
    <div className="comment">
            <FontAwesomeIcon icon={faXmark} className="x-mark" onClick={() => { setShow(false); closeImage(false) }}/>
            <div className="comment-wrapper">
               <Comment></Comment> 
               <Comment></Comment> 
                <div className="gap"></div>
            </div>
            <div className="form-wrapper">
                <div className="wrap">
                    <input placeholder="Write comment in here..."/>
                    <button>
                        <FontAwesomeIcon icon={faPaperPlane} className="font-action"/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BaseComment; 
