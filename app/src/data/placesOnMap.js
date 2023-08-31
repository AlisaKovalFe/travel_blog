import { destinations } from './destinations'

let features = []
let copy = [...destinations]

copy.map((el) => {
    el.countries.map((item) => {
        item.info.visits.recomendations.map((elem) => {    
            features.push({
                type: "Feature",
                id: elem.id,               
                geometry: {
                    type: "Point",
                    coordinates: elem.coordinates
                },
                properties: {
                    balloonContentHeader: elem.destination,         
                    balloonContentBody: `
                                        <div > 
                                            <img class="map-image" src=${elem.image.src} alt=${elem.image.alt} />    
                                    </div>`,    
                    hintContent: elem.destination,  
                },
                options: {
                    preset: 'islands#yellowIcon'
                },
            })
            return elem
        })
        return item
    })
    return el
})


export const placesOnMap = {
    "type": "FeatureCollection",
    "features": features
}