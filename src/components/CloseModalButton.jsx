import './CloseModalButton.css'

function CloseModalButton (props) {

    return (
        <>
            <button onClick={props.closeModal} aria-label="Close modal" className='modal__close-button'></button>
        </>
    )
}

export default CloseModalButton
