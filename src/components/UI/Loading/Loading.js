const Loading = () => {
    return (
        <div className="rounded-md p-4 w-full mx-auto my-10 flex items-center justify-center">
            Loading
            <div className="relative inline-flex ml-5">
                <span className="flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-700 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-700"></span>
                </span>
            </div>
        </div>
    )
}

export default Loading;