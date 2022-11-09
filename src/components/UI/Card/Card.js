import { Link } from 'react-router-dom';

const Card = (props) => {
    return (
        <div className="rounded overflow-hidden shadow-lg">
            <Link to={props.url}>
                <img className="rounded-t-lg mx-auto" src={props.img} alt="" />
            </Link>
            <div className="px-6 py-4">
                <Link to={props.url}>
                    <h5 className="font-bold text-base mb-2">{props.title}</h5>
                </Link>
                <p className="text-gray-700 text-sm truncate">
                    {props.inst}
                </p>
            </div>
        </div>

    )
}

export default Card;