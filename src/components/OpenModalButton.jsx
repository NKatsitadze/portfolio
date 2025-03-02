import './OpenModalButton.css'

function OpenModalButton (props) {

    return (
        <>
            <button className='modal-open-button' onClick={() => props.openProjectModal(props.detail)}></button>
        </>
    )
}

export default OpenModalButton
