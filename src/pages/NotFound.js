import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-9xl font-extrabold text-pink-700 tracking-widest">404</h1>
            <div className="bg-pink-500 px-2 text-sm text-white rounded rotate-12 absolute">
                Page Not Found
            </div>
            <Link to="/" className="mt-5"> 
                <span
                    className="relative inline-block text-sm font-medium text-white group active:text-pink-700 focus:outline-none focus:ring"
                >
                    <span
                        className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-pink-700 group-hover:translate-y-0 group-hover:translate-x-0"
                    ></span>

                    <span className="relative block px-8 py-3 bg-rose-900 border border-current">
                        Go Home
                    </span>
                </span>
            </Link>
        </div>
    )
}

export default NotFound;