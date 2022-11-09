const Error = ({ message }) => {
    return (
        <div className="rounded-md p-4 w-full mx-auto my-10 flex items-center justify-center font-bold text-pink-600">
            {message}
        </div>
    )
}

export default Error;