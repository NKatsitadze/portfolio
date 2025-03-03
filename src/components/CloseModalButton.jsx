import './CloseModalButton.css'

function CloseModalButton (props) {

    return (
        <>
            <button onClick={props.closeModal} className='modal__close-button'></button>
        </>
    )
}

export default CloseModalButton
