function Avatar({ url }) {
    return (
        <img
            loading="lazy"
            className="h-10 rounded-full cursor-pointer transition duration-100 transform hover:scale-110"
            src={url}
            alt="profile pic"
        />
    )
}

export default Avatar
