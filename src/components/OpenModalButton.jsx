import './OpenModalButton.css'

function OpenModalButton (props) {

    return (
        <>
            <svg style={{cursor:'pointer'}} className='modal-open-button' aria-label="Open modal" onClick={() => props.openProjectModal(props.detail)} 
            width="40px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier"> <path d="M9.00002 3.99998H4.00004L4 9M20 8.99999V4L15 3.99997M15 20H20L20 15M4 15L4 20L9.00002 20" stroke="#bde5f5"
                 strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
        </>
    )
}

export default OpenModalButton
