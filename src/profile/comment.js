import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faCommentDots } from '@fortawesome/free-solid-svg-icons'

const Comment = () => {
    return (
        <div className="user-comment">
            <div className="for-user-img">
            </div>
            <div className="comment-content">
                <h2>some user</h2>
                <p>
                    fasfj fahb fsafsabh fsafhb fsafasb 
                    fabfh fashfb fashbf fashfbas fasbf
                    fsafbh fsabfh fsabfh fasbh fasbfh
                    fahjf lgnj geun fasba fsb shb bfhabf 
                    fahjfa fasbh fsafbh fasfbh fabh kfsaf
                    fsajfb fahbf fasbfh fasbfah fsabhfb fsafh
                    fasbfh fasbh fahfb fsafbhb fahb fbah
                    fahf fashbf fahfb fashbf fahb fsabfh 
                    fafj fahb fsahfbas fahbf asfahb hb 
                    fsbafh fashbf safhb fsafb asfhhb
                    fasfj fahb fsafsabh fsafhb fsafasb 
                    fabfh fashfb fashbf fashfbas fasbf
                    fsafbh fsabfh fsabfh fasbh fasbfh
                </p>
                <div className="responses">
                    <input placeholder="Write your repply here.."/>
                    <button>
                        <FontAwesomeIcon icon={faPaperPlane} className="font-action"/>
                    </button>
                    <div className="repply">
                        <FontAwesomeIcon icon={faCommentDots} className="font-action"/>
                        <p>20</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comment; 
