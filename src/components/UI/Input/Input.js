const Input = (props) => {
    return (
        <input type={props.type} placeholder={props.placeholder} className="w-full border-2 border-gray-300 bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none" onChange={props.onChange} value={props.value} />
    )
}

export default Input;