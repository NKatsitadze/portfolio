import './OpenModalButton.css'

function OpenModalButton (props) {

    return (
        <>
            <button className='modal-open-button' aria-label="Open modal" onClick={() => props.openProjectModal(props.detail)}></button>
        </>
    )
}

export default OpenModalButton
