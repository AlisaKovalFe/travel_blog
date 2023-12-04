const dayjs = require('dayjs')

module.exports = {
    heading: 'Видео из моих любимых мест',
    description: 'Здесь я собрала видео из моих любимых регионов Европы, чтобы воспоминания были всегда рядом.',
    videosInfo: [
        {
            id: 1,
            title: 'Италия',
            cover: {
                src: 'https://www.studyitalian.ru/uploads/server/awUBqpEUsGMpgkRW.jpg',
                alt: 'Италия'
            },
            records: [
                {
                    key: 'Пьемонт',
                    city: 'Пьемонт',
                    videoUrl: "https://youtu.be/Muz720S9uVw",
                    title: "Пьемонт, горы, фиат и нутелла. Италия",
                    dateStamp: dayjs("2023-12-01").unix()
                },
                {
                    key: 'Тоскана',
                    city: 'Тоскана',
                    videoUrl: "https://youtu.be/ChgwxHJTqXc",
                    title: "Топ самых красивых мест в Тоскане",
                    dateStamp: dayjs("2023-12-02").unix()
                },
                {
                    key: 'Венето',
                    city: 'Пьемонт',     //повтор!!! для проверки!!!
                    videoUrl: "https://youtu.be/X90w67ZYvCk",
                    title: "Veneto - Northern Italy",
                    dateStamp: dayjs("2023-12-11").unix()
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
                    city: 'Бретань',
                    videoUrl: "https://youtu.be/2IEuDbhq0Gw",
                    title: "Бретань с высоты птичьего полета | Видео с дрона | Франция, Бретань с воздуха",
                    dateStamp: dayjs("2023-12-03 19:18").unix()
                },
                {
                    key: 'Нормандия',
                    city: 'Нормандия',
                    videoUrl: "https://youtu.be/w40C8G97sdA",
                    title: "Берега Нормандии в регионе Этрета",
                    dateStamp: dayjs("2023-12-13 19:18").unix()
                },
                {
                    key: 'О-де-Франс',
                    city: 'О-де-Франс',
                    videoUrl: "https://youtu.be/qt-bAXVcSlA",
                    title: "О-де-Франс с высоты птичьего полета | Видео с дрона в 4к | Франция, О-де-Франс с воздуха",
                    dateStamp: dayjs("2023-12-03 19:18").unix()
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
                    city: 'Фландрия',
                    videoUrl: "https://youtu.be/j9_GsJfsXPk",
                    title: "Провинция Восточная Фландрия с высоты | Видео с дрона в 4к | Бельгия с воздуха",
                    dateStamp: dayjs("2023-12-10 19:18").unix()
                },
                {
                    key: 'Валлония',
                    city: 'Валлония',
                    videoUrl: "https://youtu.be/X0SgVUPvGaM",
                    title: "Бельгия. Часть 2. Валлония",
                    dateStamp: dayjs("2023-12-09 11:18").unix()
                },
                {
                    key: 'Брюссельский столичный регион',
                    city: 'Брюссельский столичный регион',
                    videoUrl: "https://youtu.be/vjT7c-GK3yw",
                    title: "Brussels in 2 minutes | Брюссель за 2 минуты | Бельгия",
                    dateStamp: dayjs("2023-12-01 19:18").unix()
                }
            ]
        },
    ]
}


