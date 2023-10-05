module.exports = {
    heading: 'Видео из моих любимых мест',
    description: 'Здесь я собрала видео из моих любимых регионов Европы, чтобы воспоминания были всегда рядом.',
    videosInfo: [
        {
            id: 1,
            title: 'Италия',
            cover: {
                src: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/pastel-colored-houses-and-boats-on-canal-burano-venice-veneto-italy-lost-horizon-images.jpg',
                alt: 'Италия'
            },
            records: [
                {
                    key: 'Пьемонт',
                    label: 'Пьемонт',
                    children: `<iframe className="video_styles" src="https://www.youtube.com/embed/Muz720S9uVw" title="Пьемонт, горы, фиат и нутелла. Италия" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
                },
                {
                    key: 'Тоскана',
                    label: 'Тоскана',
                    children: `<iframe className="video_styles" src="https://www.youtube.com/embed/ChgwxHJTqXc" title="Топ самых красивых мест в Тоскане" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
                },
                {
                    key: 'Венето',
                    label: 'Венето',
                    children: `<iframe className="video_styles" src="https://www.youtube.com/embed/X90w67ZYvCk" title="Veneto - Northern Italy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
                }
            ]
        },
        {
            id: 2,
            title: 'Франция',
            cover: {
                src: 'https://media.cntraveler.com/photos/641bafd0428c1c5485f37616/3:2/w_4713,h_3142,c_limit/Dinan-france-GettyImages-1155533043.jpg',
                alt: 'Франция'
            },
            records: [
                {
                    key: 'Бретань',
                    label: 'Бретань',
                    children: `<iframe className="video_styles" src="https://www.youtube.com/embed/2IEuDbhq0Gw" title="Бретань с высоты птичьего полета | Видео с дрона | Франция, Бретань с воздуха" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
                },
                {
                    key: 'Нормандия',
                    label: 'Нормандия',
                    children: `<iframe className="video_styles" src="https://www.youtube.com/embed/w40C8G97sdA" title="Берега Нормандии в регионе Этрета" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
                },
                {
                    key: 'О-де-Франс',
                    label: 'О-де-Франс',
                    children: `<iframe className="video_styles" src="https://www.youtube.com/embed/qt-bAXVcSlA" title="О-де-Франс с высоты птичьего полета | Видео с дрона в 4к | Франция, О-де-Франс с воздуха" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
                }
            ]   
        },
        {
            id: 3,
            title: 'Бельгия',
            cover: {
                src: 'https://lp-cms-production.imgix.net/2022-05/GettyRF_597070535.jpg',
                alt: 'Бельгия'
            },
            records: [
                {
                    key: 'Фландрия',
                    label: 'Фландрия',
                    children: `<iframe className="video_styles"src="https://www.youtube.com/embed/j9_GsJfsXPk" title="Провинция Восточная Фландрия с высоты | Видео с дрона в 4к | Бельгия с воздуха" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
                },
                {
                    key: 'Валлония',
                    label: 'Валлония',
                    children: `<iframe className="video_styles" src="https://www.youtube.com/embed/X0SgVUPvGaM" title="Бельгия. Часть 2. Валлония" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
                },
                {
                    key: 'Брюссельский столичный регион',
                    label: 'Брюссельский столичный регион',
                    children: `<iframe className="video_styles" src="https://www.youtube.com/embed/vjT7c-GK3yw" title="Brussels in 2 minutes | Брюссель за 2 минуты | Бельгия" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
                }
            ]
        },
    ]
}


