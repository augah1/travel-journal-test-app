import markerIcon from "../images/marker.png"

export default function Entry(props) {
    const { img, country, googleMapsLink, title, dates, text } = props.entry;
    return (
        <article className="journal-entry">
            <div className="main-image-container">
                <img 
                    className="main-image"
                    src={img.src} 
                    alt={img.alt}
                />
            </div>
            <div className="info-container">
                <img 
                    className="marker"
                    src={markerIcon} 
                    alt="map marker icon"
                />
                <span className="country">{country}</span>
                <a href={googleMapsLink} target="_blank">View on Google Maps</a>
                <h2 className="entry-title">{title}</h2>
                <p className="trip-dates">{dates}</p>
                <p className="entry-text">{text}</p>
            </div>
            
        </article>
    )
}