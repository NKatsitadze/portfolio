import './ToggleDisplayMode.css'

function ToggleDisplayMode (props) {

    return (
        <>
            <div className='grid-actions'>
                <button className='grid-actions__grid' aria-label='Show projects as grid' onClick={props.setGridDisplay}></button>
                <button className='grid-actions__list' aria-label='Show projects as list' onClick={() => props.setGridDisplay(false)}></button>
            </div> 
        </>
    )
}

export default ToggleDisplayMode
