interface Props {
    submitted: boolean
    answer : number
    optionNum: number
    selected: boolean
    onIndexChange: (newIndex: number) => void
}

function Option(props: Props){
    
    const handleClick = () =>{
        props.onIndexChange(props.optionNum)
    }
    
    return(
        <button type="button" onClick={handleClick} className = "h-[15%] w-[70%] m-3 rounded-xl border border-solid custom-border hover:w-[75%]">
            <input type="checkbox" checked={props.selected} />
        </button>
    )
}

export default Option
