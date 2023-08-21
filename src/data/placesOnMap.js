import { destinations } from './destinations'

const geometry = {
    type: "Point",
    coordinates: [55.738571, 37.605032]
}

const optionsOfIcon = {
    iconLayout: "default#image",
    iconImageHref: "https://img.icons8.com/?size=512&id=63653&format=png",
    iconImageSize: [40, 40],
    iconImageOffset: [-10, -10],                            
    balloonCloseButton: true,
}

let features = []

let copy = [...destinations]

copy.map((el) => {
    el.countries.map((item) => {
        item.info.visits.recomendations.map((elem) => {
            features.push({
                type: "Feature",
                id: elem.id,
                geometry: geometry,
                properties: {
                    balloonContentHeader: elem.destination,         
                    balloonContentBody: `
                                        <div > 
                                            <img class="" src=${elem.image.src} alt=${elem.image.alt} />
                                        </div>
                                    </div>`,    
                    hintContent: elem.destination,  
                },
                options: optionsOfIcon,
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