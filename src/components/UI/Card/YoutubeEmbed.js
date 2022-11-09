
const YoutubeEmbed = ({embedId}) => {
    return (
        <iframe
            className="w-full aspect-video mt-5"
            src={`https://www.youtube.com/embed/${embedId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
        />
    )
}

export default YoutubeEmbed;