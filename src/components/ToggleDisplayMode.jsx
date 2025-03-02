import './ToggleDisplayMode.css'

function ToggleDisplayMode (props) {

    return (
        <>
            <div className='grid-actions'>
                <button className='grid-actions__grid' onClick={props.setGridDisplay}></button>
                <button className='grid-actions__list' onClick={() => props.setGridDisplay(false)}></button>
            </div> 
        </>
    )
}

export default ToggleDisplayMode
