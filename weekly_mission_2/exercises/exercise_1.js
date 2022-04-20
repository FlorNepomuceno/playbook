const facebook = {
    user: "Flor",
    post: "10",
    bio: "Kuyashi",
    friends: "271",
    photo: "300",
    videos: "5",
}

console.log("Nombre de perfil: " + facebook.user)
console.log("Numero de publicaciones: " + facebook.post)
console.log(facebook)


const twitter = {
    user: {
        user: "Flor Nepomuceno",
        username: "LadyFleurNk",
        bio: "Diseñadora Grafica, amo el diseño web, las películas y los videojuegos. Soy un intento de ilustradora. PD: no se usar Twitter",
        city: "GDL",
    },
    trending_topic: ["Lenny Kravitz", "Mixcoac", "Amber Heard"], 
    hashtag: ["#420day ", " #CEANiegaAguaEnQro "],
}

console.log("Nombre de perfil: " + twitter.user.user)
console.log("Biografía: " + twitter.user.bio)
console.log("Los trending topics de hoy son: " + twitter.trending_topic)
console.log("Los hashtags de hoy son: " + twitter.hashtag)


const Uber = {
    profile: {
        user: "Flor Nepomuceno",
        stars: "4.81",
    },
    travel: "20",
}