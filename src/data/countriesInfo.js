const facts = {
    src: 'https://charityvillage.com/wp-content/uploads/2019/12/facts_feature.png',
    alt: 'facts'
}

export const countriesInfo = {
    italy: {
        title: 'Италия',
        description: 'Италия - это средиземноморская страна на юге Европы, омываемая тремя морями (Адриатическим, Тирренским и Ионическим).Известна как родина западной культуры, страна, полная истории и красоты, обязательна к посещению для путешественников. От объектов Всемирного наследия ЮНЕСКО, таких как разрушенный город Помпеи, до прибрежных красот, таких как Амальфитанское побережье и Чинкве-Терре, Италия — отличное место для тех, кто хочет испытать что-то необычное Добавьте сюда великолепную итальянскую кухню, и отпуск станет идеальным.',

        image: {
            src: 'https://www.ourescapeclause.com/wp-content/uploads/2019/05/CinqueTerre-33.jpg',
            alt: 'Italy'
        },

        facts: {
            items: [
                'валюта: официальной валютой является евро, 1 евро и составляет от 1 евро до 1,35 доллара США.',
                'въезд: для въезда вам потребуется виза',
                'лучший способ передвижения – это общественный транспорт или аренда автомобиля',
                'лучшие сим-карты: TIM, Vodafone, WindTre и Iliad',
                'столица Италии — Рим. '],
            image: facts,
        },

        accomodation: {
            title: 'Размещение', 
            items: [
                {
                    title: 'Бюджетный вариант', 
                    text: 'В Италии можно найти несколько бюджетных отелей по цене от 30 до 40 евро за ночь. Наслаждайтесь бесплатным Wi-Fi и завтраком, отдельными номерами и прекрасным расположением в городе.',
                    id: '1',
                },
    
                {
                    title: 'Средний уровень', 
                    text: 'В отелях среднего класса рассчитывайте платить от 50 до 80 евро за ночь. Наслаждайтесь отдельными номерами с кондиционером, крытым и открытым бассейнами, рестораном и баром отеля, а также бесплатным Wi-Fi.',
                    id: '2',
                },
    
                {
                    title: 'Высокий класс', 
                    text: 'Высококлассные отели будут стоить от 150 до 1220 евро за ночь.',
                    id: '3',
                },
            ]
            
        },

        eating: {
            title: 'Кухня',
            text: 'Если вы собираетесь посетить Италию за едой, вы не будете разочарованы. Итальянская кухня славится пастой, помидорами, сыром, рыбой и мясом. Национальным блюдом является соус «Рагу алла болоньезе». Другие фавориты включают пиццу, лазанью и боттаргу.В общей сложности рассчитывайте заплатить около 10-20 евро за еду в большинстве ресторанов или 50 евро за еду в ресторанах из трех блюд',
            recomendations: {
                title: 'Рекомендации ресторанов',
                items: [
                    {
                        name: 'LA PERGOLA',
                        adress: 'Via Alberto Cadlolo 101 Rome Cavalieri',
                        image: {
                            src: 'https://www.recipesfromitaly.com/wp-content/uploads/2022/04/lemon-spaghetti-recipe-1x1-1200x1200-b.jpg',
                            alt: 'pasta'
                        },
                        id: '1',
                    },
                    {
                        name: 'LOCANDA CIPRIANI',
                        adress: 'Piazza Santa Fosca 29 Torcello Island - Venice',
                        image: {
                            src: 'https://s.wsj.net/public/resources/images/OD-AT791_LEMPIZ_OZ_20121010142211.jpg',
                            alt: 'pizza'
                        },
                        id: '2',
                    },
                    {
                        name: 'BICE',
                        adress: 'Via Borgospesso 12, Milano',
                        image: {
                            src: 'https://www.italian-feelings.com/wp-content/uploads/2016/11/italian-cheeses-940x625.jpg',
                            alt: 'cheese'
                        },
                        id: '3',
                    }
                ]
            }
        },

        visits: {
            title: 'Что посмотреть',
            recomendations: [
                {
                    destination: 'Гора Этна',
                    description: 'Поднимите свое приключение на новый уровень, поднявшись на самый высокий вулкан Италии',
                    image: {
                        src: 'https://cdn.britannica.com/78/150178-050-32C89734/Mount-Etna-Bronte-Italy.jpg',
                        alt: 'Etna'
                    },
                    id: '1',
                },
                {
                    destination: 'Пизанская башня',
                    description: 'Пиза может быть переполнена туристами, но это то место, которое вы не хотите пропустить.',
                    image: {
                        src: 'https://tourismmedia.italia.it/is/image/mitur/20210310164211-pisa-2?wid=1600&hei=900&fit=constrain,1&fmt=webp',
                        alt: 'Pisa'
                    },
                    id: '2',
                },
                {
                    destination: 'Романья ',
                    description: 'Романья является не только домом для Паваротти, Энцо Феррари, Ферручио Ламборгини, но и гастрономической столицей страны.',
                    image: {
                        src: 'https://www.wine-searcher.com/images/region/emilia-romagna-3835-1-2.jpg?width=734',
                        alt: 'Romagna'
                    },
                    id: '3',
                }
            ]
        }
    },

    france: {
        title: 'Франция',
        description: 'Франция известна как самое популярное туристическое направление в мире и является домом для самого известного памятника в мире: Эйфелевой башни. Но во Франции есть нечто большее, чем просто город огней. Путешественники могут посетить самые разные места, от Средиземного моря до в Пиренейских гор.',

        image: {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1PiAR1xop0cySwIfJ4Y4hNhOBd8va7RGUIw&usqp=CAU',
            alt: 'France'
        },

        facts: {
            items: [
                'валюта: официальной валютой является евро, 1 евро и составляет от 1 евро до 1,35 доллара США.',
                'если вы попросите воды в ресторане, вам подадут бутылку воды (списанную с вашего счета),',
                'в отличие от Канады, путешественникам разрешено употреблять алкоголь на улице',
                'налог на добавленную стоимость (НДС) взимается с покупок, таких как питание в ресторанах, расходы на покупки и проживание в отеле.'],
            image: facts,
        },

        accomodation: {
            title: 'Размещение', 
            items: [
                {
                    title: 'Бюджетный вариант', 
                    text: 'Во Франции есть множество хостелов, где можно остановиться всего за 15-45 евро за ночь. Наслаждайтесь общими или отдельными номерами, бесплатным Wi-Fi и завтраком и прекрасным расположением в городе.',
                    id: '1',
                },
    
                {
                    title: 'Средний уровень', 
                    text: 'Отели среднего класса будут стоить около 60-170 евро за ночь. В этих отелях есть номера и люксы с телевизорами с плоским экраном и кофеварками, фитнес-центр, крытый бассейн, ресторан и бар отеля, а также бесплатный завтрак.',
                    id: '2',
                },
    
                {
                    title: 'Высокий класс', 
                    text: 'За пятизвездочные отели рассчитывайте заплатить около 250-1600 евро за ночь, за эту цену вы увидите террассы и гостиными, массажем в номере, элегантной кухней, 24-часовым обслуживанием номеров, спа , изысканные дворы, услуги дворецкого и патио в саду.',
                    id: '3',
                },
            ]
            
        },

        eating: {
            title: 'Кухня',
            text: 'Кухня Франции, как правило, состоит из трех частей: закуска (иногда суп), основное блюдо и десерт или сыр после него. Еда может выглядеть как биск (сливочный суп из ракообразных), стейк фри (стейк и картофель фри) и десерт из крем-брюле. В общей сложности рассчитывайте платить около 30 евро в день за еду.',

            recomendations: {
                title: 'Рекомендации ресторанов',
                items: [
                    {
                        name: 'Le Bistro Marbeuf ',
                        adress: '21 Rue Marbeuf',
                        image: {
                            src: 'https://www.recipesfromitaly.com/wp-content/uploads/2022/04/lemon-spaghetti-recipe-1x1-1200x1200-b.jpg',
                            alt: 'soup'
                        },
                        id: '1',
                    },
                    {
                        name: 'Le Souffle',
                        adress: '36 Rue du Mont Thabor',
                        image: {
                            src: 'https://hips.hearstapps.com/hmg-prod/images/delish-202002-coq-au-vin-0108-landscape-pf-1582306355.jpg?crop=0.997xw:0.747xh;0.00325xw,0.124xh&resize=1200:*',
                            alt: 'ragu'
                        },
                        id: '2',
                    },
                    {
                        name: 'Café de Flore',
                        adress: '172 Boulevard Saint-Germain',
                        image: {
                            src: 'https://img.hilabel.nl/eyJidWNrZXQiOiJoaWxhYmVsLWNkbiIsImtleSI6InRyYXZlbHN0b3JpZXMvZnJhbmNlL3VwbG9hZHMvMjAyMy8wMi9mcmVuY2gtZm9vZC1zY2FsZWQuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxOTIwLCJmaXQiOiJjb3ZlciJ9fX0=',
                            alt: 'croussant'
                        },
                        id: '3',
                    }
                ]
            }
        },

        visits: {
            title: 'Что посмотреть',
            recomendations: [
                {
                    destination: 'Марсель',
                    description: 'Этот старый порт ошеломляет и наполнен необузданной энергией, которую вы ожидаете от оживленного портового города.',
                    image: {
                        src: 'https://lifeglobe.net/x/entry/9658/1.jpg',
                        alt: 'Marcel'
                    },
                    id: '1',
                },
                {
                    destination: 'Лагерь во Франции',
                    description: 'Сэкономьте деньги и исследуйте неизведанные тропы, разбив лагерь по всей Франции.',
                    image: {
                        src: 'https://about-france.com/photos-ext/camping3.jpg',
                        alt: 'camp'
                    },
                    id: '2',
                },
                {
                    destination: `Место, где была сожжена Жанна д'Арк`,
                    description: `Жанна д'Арк родилась и была казнена в маленьком городке Руан, расположенном в 135 км от Парижа`,
                    image: {
                        src: 'https://francetravelplanner.com/assets/alsace/domremy/joan_church5042-400.jpg',
                        alt: 'Romagna'
                    },
                    id: '3',
                }
            ]
        }
    },

    spain: {
        title: 'Испания',
        description: 'Испания известна своими дружелюбными жителями, непринужденным образом жизни, вкусной кухней, сумасшедшими ночными вечеринками и богатой историей. От кулинарной культуры мирового класса Сан-Себастьяна и Страны Басков до потрясающих пляжей Коста-дель-Соль, каждый регион Испании предлагает что-то свое. А еще эта страна занимает второе место по количеству объектов всемирного наследия ЮНЕСКО после Италии.',

        image: {
            src: 'https://img.traveltriangle.com/blog/wp-content/uploads/2020/02/Cover-image-of-Spain-in-August1.jpg',
            alt: 'Spain'
        },

        facts: {
            items: [
                'валюта: официальной валютой является евро, 1 евро и составляет от 1 евро до 1,35 доллара США.',
                'большинство испанских банков закрываются во второй половине дня',
                'Налог на добавленную стоимость (НДС) взимается с покупок, таких как питание в ресторанах, расходы на покупки и проживание в отеле. '],
            image: facts,
        },

        accomodation: {
            title: 'Размещение', 
            items: [
                {
                    title: 'Бюджетный вариант', 
                    text: 'Вы можете остановиться в хостелах и других недорогих отелях примерно за 30 долларов США за ночь в Испании. Они часто включают континентальный завтрак, отдельные комнаты и телевизор.',
                    id: '1',
                },
    
                {
                    title: 'Средний уровень', 
                    text: 'Отели среднего класса будут стоить вам около 50 долларов за ночь в Испании и могут включать в себя ресторан, трансфер из аэропорта и личный сейф.',
                    id: '2',
                },
    
                {
                    title: 'Высокий класс', 
                    text: 'Отели высокого класса начинаются примерно от 150 долларов за ночь и могут включать в себя отдельный балкон, бассейн и лаундж.',
                    id: '3',
                },
            ]
            
        },

        eating: {
            title: 'Кухня',
            text: 'Типичным блюдом Испаниия можно назвать крокеты, его можно найти во многих ресторанах Испании, где часто подают треску или джем с соусом бешамель. Также это вяленое мясо, такое как хамон (ветчина) или чоризо и суп гаспачо, который готовится из большого количества овощей, в том числе ароматных помидоров, и подается охлажденным в качестве закуски.',

            recomendations: {
                title: 'Рекомендации ресторанов',
                items: [
                    {
                        name: 'El Trispolet',
                        adress: 'Muralla de Sant Antoni, 20, 43800 Valls, Tarragona',
                        image: {
                            src: 'https://www.jamon.com/images/content/image-jamon-artisanal-hams.jpg',
                            alt: 'hamon'
                        },
                        id: '1',
                    },
                    {
                        name: 'Les Espelmes',
                        adress: 'Carretera 240 km.28, 43813, Valls, Tarragona',
                        image: {
                            src: 'https://www.allrecipes.com/thmb/d_1S6Av48F5LBfP-Z4W8VTD9U4I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/222331-Chef-Johns-Gazpacho-ddmfs-4x3-2781-67624a59fa4c4375b9149d06f6c32348.jpg',
                            alt: 'gaspacho'
                        },
                        id: '2',
                    },
                    {
                        name: 'Portal 22',
                        adress: 'Plaça Portal Nou, 22, 43800 Valls, Tarragona',
                        image: {
                            src: 'https://www.savoredjourneys.com/wp-content/uploads/2015/03/spanish-foods.jpg',
                            alt: 'paella'
                        },
                        id: '3',
                    }
                ]
            }
        },

        visits: {
            title: 'Что посмотреть',
            recomendations: [
                {
                    destination: 'Гауди',
                    description: 'Вы не можете посетить Барселону, не познакомившись с некоторыми из ее самых интересных архитектурных решений, спроектированными знаменитым архитектором Антонио Гауди.',
                    image: {
                        src: 'https://cdn.britannica.com/15/194815-050-08B5E7D1/Nativity-facade-Sagrada-Familia-cathedral-Barcelona-Spain.jpg',
                        alt: 'Gaudi'
                    },
                    id: '1',
                },
                {
                    destination: 'Санта-Мария-де-Риполь',
                    description: 'Это монастырь, построенный в 888 году, известен как родина Каталонии.',
                    image: {
                        src: 'https://ispaniagid.ru/wp-content/uploads/2011/12/Ripoll2.jpg',
                        alt: 'Santa Maria in Ripoll'
                    },
                    id: '2',
                },
                {
                    destination: 'Камино де Сантьяго',
                    description: 'Один из самых популярных походов в мире, который проходит через Испанию.',
                    image: {
                        src: 'https://cdn.getyourguide.com/img/tour/5e6606c78db7f.jpeg/132.jpg',
                        alt: 'Camino de Santiago'
                    },
                    id: '3',
                }
            ]
        }
    },

    portugal: {
        title: 'Португалия',
        description: 'Расположенная на краю Европы, Португалия была описана теми, кто был там, как отпуск мечты. Эта средиземноморская страна известна своей прекрасной архитектурой, солнечной погодой, отличным вином и великолепными пляжами. Местные жители известны своей дружелюбностью и теплотой. Цены в Португалии также ниже, чем в других европейских странах, что делает это место идеальным для людей с ограниченным бюджетом.',

        image: {
            src: 'https://img.traveltriangle.com/blog/wp-content/uploads/2020/02/Cover-image-of-Spain-in-August1.jpg',
            alt: 'Portigal'
        },

        facts: {
            items: [
                'валюта: официальной валютой является евро, 1 евро и составляет от 1 евро до 1,35 доллара США.',
                'путешествие на автобусе считается лучшим способом передвижения по Португалии.',
                'Вам не нужна туристическая виза, если срок вашего визита составляет менее 90 дней',
                'cамыми популярными сотовыми сетями в Португалии являются Vodafone, Optimus и TMN.'],
            image: facts,
        },

        accomodation: {
            title: 'Размещение', 
            items: [
                {
                    title: 'Бюджетный вариант', 
                    text: 'Португалия предлагает множество хостелов по цене от 25 до 50 евро за ночь.',
                    id: '1',
                },
    
                {
                    title: 'Средний уровень', 
                    text: 'В отелях среднего класса рассчитывайте платить от 90 до 150 евро за ночь. Вы можете иметь доступ в фитнес-центр и бесплатный завтрак.',
                    id: '2',
                },
    
                {
                    title: 'Высокий класс', 
                    text: 'Высококлассные отели будут стоить от 200 до 300 евро за ночь. В них часто есть элитные рестораны и лаунджи, а также спа-салоны.',
                    id: '3',
                },
            ]
            
        },

        eating: {
            title: 'Кухня',
            text: 'Поскольку местные жители обычно едят в кафе и в своем собственном темпе, поиск еды на ходу (или уличной еды) не является большой частью культуры. Тем не менее, есть множество уличных торговцев, которые подают португальскую еду. Отправляйтесь на фестиваль или мероприятие, чтобы найти фартуры (португальская версия чурро с более лимонным вкусом) или сушеных осьминогов, которые чаще встречаются в южной Португалии. Конечно, в Португалии также есть множество кафе и ресторанов, где подают блюда аутентичной кухни. В общей сложности рассчитывайте платить около 30-50 евро в день на еду.',

            recomendations: {
                title: 'Рекомендации ресторанов',
                items: [
                    {
                        name: 'Alcântara Café',
                        adress: 'Rua Maria Luísa Holstein 13',
                        image: {
                            src: 'https://www.johansens.com/wp-content/uploads/2014/05/pastel-de-belem-1024x576.jpg',
                            alt: 'pastel de nata'
                        },
                        id: '1',
                    },
                    {
                        name: 'Martinho da Arcada',
                        adress: 'Praça do Comércio 3',
                        image: {
                            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUjB50PmuduGXMZicrbbNhCbgy9wpuLWRikw&usqp=CAU',
                            alt: 'octopus'
                        },
                        id: '2',
                    },
                    {
                        name: 'Leão d’Ouro',
                        adress: 'Rua 1º de Dezembro 105',
                        image: {
                            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAncpg3etW7EDjQISVeUeIl5mnYo8LjYEZXWmjopzwEx-BhWXH7eoycmhmvAoPd7uGpe4&usqp=CAU',
                            alt: 'sardins'
                        },
                        id: '3',
                    }
                ]
            }
        },

        visits: {
            title: 'Что посмотреть',
            recomendations: [
                {
                    destination: 'Назаре',
                    description: 'Займитесь серфингом в Назаре.',
                    image: {
                        src: 'https://bnnvara-3opreis.cdn.prepr.io/w_1250,q_100/s3-3opreis-bnnvara/7af2875e-324d-4118-a128-d79e4148d3a8.jpg',
                        alt: 'Nazare'
                    },
                    id: '1',
                },
                {
                    destination: 'Обидуш',
                    description: 'Посетите средневековый город Обидуш.',
                    image: {
                        src: 'https://immigrantinvest.com/wp-content/uploads/2022/09/all-about-obidos_376550973.jpeg',
                        alt: 'Obidos'
                    },
                    id: '2',
                },
                {
                    destination: 'Лиссабон',
                    description: 'Окунитесь в красоту столицы Португалии.',
                    image: {
                        src: 'https://fullsuitcase.com/wp-content/uploads/2021/06/Yellow-tram-and-colorful-buildings-in-Lisbon-Portugal.jpg',
                        alt: 'Lisbon'
                    },
                    id: '3',
                }
            ]
        }
    },

    czech: {
        title: 'Чешская Республика',
        description: 'Хотя Чешская Республика существует только с 1993 года, это определенно страна с захватывающей историей. Прага может быть самым красивым и культурным городом в мире, но страна известна тем, что в ней находятся одни из лучших пивоварен, которые вы когда-либо видели, и она полна удивительных замков и замков, которые заставят вас затаить дыхание.',

        image: {
            src: 'https://res.cloudinary.com/worldpackers/image/upload/c_fill,f_auto,q_auto,w_1024/v1/guides/article_cover/n6s0tk9ykvtrnwvbba7f',
            alt: 'Czech Republic'
        },

        facts: {
            items: [
                'чешской валютой является чешская крона и составляет около 25 чешских крон за 1 доллар США.',
                'историческое название Чехии – Богемия, происходит от названия кельтского племени «боев», которые долгое время населяли территорию современной Чехии',
                'Влтава — самая длинная река в Республике Чехия. Её длина составляет 446 км, а площадь бассейна 28 090 кв.км.',
                'здесь изобрели пиво Pils, а Pilsner Urquell, первый в мире пилснер.'],
            image: facts,
        },

        accomodation: {
            title: 'Размещение', 
            items: [
                {
                    title: 'Бюджетный вариант', 
                    text: 'Вы можете найти хостелы за 210-600 чешских крон за ночь. Наслаждайтесь общими или отдельными номерами, запирающимися шкафчиками, бесплатным Wi-Fi, общей кухней, кофе и чаем, а также гостиной с телевизором.',
                    id: '1',
                },
    
                {
                    title: 'Средний уровень', 
                    text: 'Для среднего уровня рассчитывайте заплатить около 950–2110 чешских крон за ночь. К ним относятся отдельные номера с кофеварками и телевизорами с плоским экраном, завтрак "шведский стол", бесплатный Wi-Fi, крытый бассейн и спа-центр.',
                    id: '2',
                },
    
                {
                    title: 'Высокий класс', 
                    text: 'Роскошные отели будут стоить около 2 350-11 000 чешских крон за ночь. Наслаждайтесь отдельными люксами с зонами отдыха, рестораном отеля с изысканными ресторанами, услугами массажа, крытым бассейном и гидромассажной ванной, бесплатным завтраком и баром отеля.',
                    id: '3',
                },
            ]
            
        },

        eating: {
            title: 'Кухня',
            text: 'Кухня Чехии находится под влиянием соседних стран. Свинина, рыба, густые супы, хлеб на закваске, овощи, пельмени и десерты присутствуют во многих блюдах. Популярные блюда включают жареную свинину с кнедликами и капустой, маринованную вырезку и тушеную говядину с луком и специями. Есть много ресторанов, где вы можете попробовать больше блюд национальной кухни. В общей сложности рассчитывайте платить около 470 чешских крон в день за еду.',

            recomendations: {
                title: 'Рекомендации ресторанов',
                items: [
                    {
                        name: 'U Červeného Páva',
                        adress: '6, Kamzíková 543/6, Staré Město',
                        image: {
                            src: 'https://www.savoredjourneys.com/wp-content/uploads/2021/12/prague-food.jpg',
                            alt: 'trdelnik'
                        },
                        id: '1',
                    },
                    {
                        name: 'U Kroka',
                        adress: 'Vratislavova 28/12, 128 00 Praha 2',
                        image: {
                            src: 'https://media.istockphoto.com/id/648330428/photo/beef-tenderloin-and-sauce.jpg?s=612x612&w=0&k=20&c=1hpy0qgFz12EB7Gg5jLCM05KXt7WTJ8k9VoWGb2hw2M=',
                            alt: 'beaf with sous'
                        },
                        id: '2',
                    },
                    {
                        name: 'Kuchyň ',
                        adress: 'Hradčanské nám. 186/1, 118 00 Praha 1-Hradčany',
                        image: {
                            src: 'https://www.praguehere.com/photo/323/xb74yhx6ofi1mq8wnuf5.jpg',
                            alt: 'sardins'
                        },
                        id: '3',
                    }
                ]
            }
        },

        visits: {
            title: 'Что посмотреть',
            recomendations: [
                {
                    destination: 'Карлов мост',
                    description: 'Это культовый средневековый мост с 30 памятниками святым в стиле барокко. Когда-то мост использовался как торговый путь между Прагой и Восточной и Западной Европой, а сейчас мост является популярным местом для местных художников и любителей любоваться прекрасным видом на реку Влтаву внизу.',
                    image: {
                        src: 'https://image.arrivalguides.com/1230x800/05/90230aa1e71a891095c0364eab70674a.jpg',
                        alt: 'Karlov Bridge'
                    },
                    id: '1',
                },
                {
                    destination: 'Башня Петин',
                    description: 'Построенная в 1891 году и когда-то использовавшаяся в качестве смотровой и передающей башни, эта башня является популярным туристическим местом. Стоя на высоте 63,5 метра, посетители могут поразиться его размерам, прежде чем подняться по 299 ступеням, чтобы полюбоваться великолепным видом на город.',
                    image: {
                        src: 'https://www.amazingczechia.com/wp-content/uploads/2017/05/petrin-tower-prague-01.jpg',
                        alt: 'Petin Tower'
                    },
                    id: '2',
                },
                {
                    destination: 'Пражский Град',
                    description: 'Построенный в 9 веке, Пражский Град является официальной канцелярией президента Чешской Республики, а также крупнейшим замковым комплексом в мире. С готической и романской архитектурой это потрясающее зрелище.',
                    image: {
                        src: 'https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/zvgtdvhrwrshx6awtpy4/Prague%20Castle%20Walking%20Tour%2C%20Prague%2C%20Czech%20Republic.jpg',
                        alt: 'Prague Castle'
                    },
                    id: '3',
                }
            ]
        }
    },

    germany: {
        title: 'Германия',
        description: 'Германия, расположенная в Центральной Европе, представляет собой страну, состоящую из 16 государств. У нее самая большая национальная экономика в Европе и третье место по производству автомобилей в мире (известные компании из Германии включают BMW, Volkswagen и Mercedes-Benz). Более того, Германия славится своей потрясающей архитектурой, историческими соборами и замками, лесами и горами, а также отличным пивом и едой.',

        image: {
            src: 'https://media.nomadicmatt.com/2022/wheretostayberlin.jpeg',
            alt: 'Germany'
        },

        facts: {
            items: [
                'валюта: официальной валютой является евро, 1 евро и составляет от 1 евро до 1,35 доллара США.',
                'в Германии хорошо развита транспортная система. Автобусы и поезда считаются лучшими способами передвижения по городу',
                'самыми популярными сотовыми сетями в Германии являются Deutsche Telekom, Vodafone и O2',
                'НДС составляет 19%, налоговые скидки могут быть предоставлены для определенных покупок, таких как продукты питания, гостиницы и общественный транспорт. '],
            image: facts,
        },

        accomodation: {
            title: 'Размещение', 
            items: [
                {
                    title: 'Бюджетный вариант', 
                    text: 'Есть множество недорогих отелей по цене от 22 до 45 евро за ночь.',
                    id: '1',
                },
    
                {
                    title: 'Средний уровень', 
                    text: 'В отелях среднего уровня рассчитывайте заплатить примерно 65 евро за ночь.',
                    id: '2',
                },
    
                {
                    title: 'Высокий класс', 
                    text: 'За пятизвездочные отели рассчитывайте заплатить около 250-1600 евро за ночь, за эту цену вы увидите террассы и гостиными, массажем в номере, элегантной кухней, 24-часовым обслуживанием номеров и спа',
                    id: '3',
                },
            ]
            
        },

        eating: {
            title: 'Кухня',
            text: 'В Германии есть множество баров и ресторанов. Вы можете найти такие вещи, как врапы и донер-кебабы по 4-6 евро. Капучино будет стоить около 3 евро, а выпечка может стоить от 2 евро. В ресторанах есть много замечательных блюд, например, их национальное блюдо Sauerbraten (жаркое в горшочке, обычно приготовленное из говядины). Менее дорогие рестораны предлагают блюда за 8-15 евро, в то время как более средние рестораны обычно берут 30-60 евро.',

            recomendations: {
                title: 'Рекомендации ресторанов',
                items: [
                    {
                        name: 'VAU',
                        adress: 'Jaegerstr. 54/55, Berlin',
                        image: {
                            src: 'https://www.eligasht.co.uk/Blog/wp-content/uploads/2019/07/german-food.jpg',
                            alt: 'pork'
                        },
                        id: '1',
                    },
                    {
                        name: 'FISCHERS FRITZ',
                        adress: 'Charlottenstr. 49, Berlin',
                        image: {
                            src: 'https://d3h1lg3ksw6i6b.cloudfront.net/media/image/2017/10/02/8a2d48634c7f459d97f3121e928ce28c_rendered.jpg',
                            alt: 'sausages'
                        },
                        id: '2',
                    },
                    {
                        name: 'RUTZ WINEBAR',
                        adress: 'Chausseestr. 8 Berlin-Mitte, Berlin',
                        image: {
                            src: 'https://www.expatrio.com/sites/default/files/styles/medium/public/2019-11/pretzel.jpg?itok=uxwBrwIe',
                            alt: 'pretzel'
                        },
                        id: '3',
                    }
                ]
            }
        },

        visits: {
            title: 'Что посмотреть',
            recomendations: [
                {
                    destination: 'Бавария',
                    description: 'Прогуляйтесь по горам Баварии и посетите смотровую площадку Альпспикс и самую высокую вершину Германии Цугшпиц.',
                    image: {
                        src: 'https://www.goway.com/media/uploads/europe/germany/bavaria/rothenburg_ob_der_tauber,_franconia,_bavaria,_germany_551877808.jpg',
                        alt: 'Bavaria'
                    },
                    id: '1',
                },
                {
                    destination: 'Замок Нойшванштайн',
                    description: 'Самое фотографируемое место в Германии и замок, вдохновивший Диснея на создание «Спящей красавицы», считается воплощением волшебной сказки.',
                    image: {
                        src: 'https://www.travelandleisure.com/thmb/umcoSMJygYyG5OIYDdBPgnrJGLc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/01-neuschwanstein-castle-bavaria-NEUSCHWANSTEIN0417-273a040698f24fc1ac22e717bb3f1f0c.jpg',
                        alt: 'Castle Neuschwanstein'
                    },
                    id: '2',
                },
                {
                    destination: 'Берлин',
                    description: 'Самый артистичный и захватывающий город Германии',
                    image: {
                        src: 'https://a.cdn-hotels.com/gdcs/production50/d44/571ba00b-11cd-4a54-9f2a-5b38da2bc89e.jpg?impolicy=fcrop&w=800&h=533&q=medium',
                        alt: 'Berlin'
                    },
                    id: '3',
                }
            ]
        }
    },

    china: {
        title: 'Китай',
        description: 'Китай — страна, наполненная неожиданными сюрпризами. Теплый прием со стороны людей, красота ландшафта и огромные размеры городов сделали Китай сделают страну одним из любимых направлений.',

        image: {
            src: 'https://www.state.gov/wp-content/uploads/2019/04/China-2107x1406.jpg',
            alt: 'China'
        },

        facts: {
            items: [
                'валютой является китайский юань и составляет около 6,07 юаней за 1 доллар США. ',
                'интернет подвергается цензуре в Китае. Вам нужен VPN, чтобы использовать большинство сайтов социальных сетей.',
                'Китайцы используют, в среднем, 45 млрд палочек в год',
                'Китай является второй самой густонаселенной страной в мире и насчитывает 1,4 млрд жителей'],
            image: facts,
        },

        accomodation: {
            title: 'Размещение', 
            items: [
                {
                    title: 'Бюджетный вариант', 
                    text: 'Вы можете получить общежитие в Китае, начиная с 15 долларов США. Это часто включает в себя общую комнату, общую ванную комнату и гостиную.',
                    id: '1',
                },
    
                {
                    title: 'Средний уровень', 
                    text: 'Отели среднего класса в Китае начинаются от 75 долларов США. Они могут включать бесплатный завтрак, бассейн и семейные апартаменты.',
                    id: '2',
                },
    
                {
                    title: 'Высокий класс', 
                    text: 'Роскошные отели в Китае начинаются от 150 долларов США за ночь. Обычно они включают в себя ресторан, бар и транспорт до аэропорта.',
                    id: '3',
                },
            ]
            
        },

        eating: {
            title: 'Кухня',
            text: 'Среди традиционных блюд Китая можно выделать пельмени, их можно найти как на улице, так и в ресторанах, чау-мейн — это жареная лапша, смешанная с соусом, луком, сельдереем и мясом. Также национальными блюдом является утка по-пекински и вонтоны с креветками или свининой.',

            recomendations: {
                title: 'Рекомендации ресторанов',
                items: [
                    {
                        name: 'Cai Yi Xuan',
                        adress: '48 Liangmaqiao Lu, Beijing',
                        image: {
                            src: 'https://www.thespruceeats.com/thmb/FvcELLAznewWQb6PMoeHsV688Mk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cantonese-roast-duck-694866-hero-01-78e1e92c2e4948a4b98ba23c0701d274.jpg',
                            alt: 'duck'
                        },
                        id: '1',
                    },
                    {
                        name: 'Lost Heaven',
                        adress: '38, Gaoyou Road, Shanghai',
                        image: {
                            src: 'https://www.thespruceeats.com/thmb/VbDk1bK6dJinF1R2XBciZlIcycc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/jiaozi-chinese-dumplings-694504-hero-01-fe9169fbd5fa459b90379a8df8ef3387.jpg',
                            alt: 'dumplings'
                        },
                        id: '2',
                    },
                    {
                        name: 'King’s Joy',
                        adress: '2 Wudaoying Hutong, Dongcheng Qu, Beijing',
                        image: {
                            src: 'https://images.deliveryhero.io/image/fd-ph/LH/lizh-hero.jpg',
                            alt: 'dumplings'
                        },
                        id: '3',
                    }
                ]
            }
        },

        visits: {
            title: 'Что посмотреть',
            recomendations: [
                {
                    destination: 'Великая Китайская стена',
                    description: 'Насладитесь прогулкой вдоль Великой Китайской стены.',
                    image: {
                        src: 'https://images.chinahighlights.com/allpicture/2022/04/7866833d4ad140e9bf53cc40_cut_800x500_9.jpg',
                        alt: 'Chinese Wall'
                    },
                    id: '1',
                },
                {
                    destination: 'Площадь Тяньаньмэнь',
                    description: 'Прогуляйтесь по самой большой общественной площади в мире, где произошла печально известная резня 1989 года.',
                    image: {
                        src: 'https://freedomhouse.org/sites/default/files/styles/wysiwyg_full_width/public/Tiananmen_Square.jpg?itok=B3WBD8nA',
                        alt: 'Tiananmen square'
                    },
                    id: '2',
                },
                {
                    destination: 'Река Ли',
                    description: 'Круиз на бамбуковом реке Ли.',
                    image: {
                        src: 'https://media.istockphoto.com/id/526705622/photo/karst-mountains-and-river-li-in-guilin-guangxi-region-of-china.jpg?s=612x612&w=0&k=20&c=pt48WaDHyDZ0RGusTknmXv4cUSblvLocaR6Mzc6J25k=',
                        alt: 'Li river'
                    },
                    id: '3',
                }
            ]
        }
    },

    tailand: {
        title: 'Таиланд',
        description: 'Таиланд, известный своей знаменитой кухней, также является страной с богатой историей и культурой, а также домом для многих священных мест и храмов. Добавьте множество торговых центров, дружелюбных местных жителей и множество чудес природы, таких как пляжи, лагуны и пещеры, и все это сделает путешествие незабываемым.',

        image: {
            src: 'https://www.nomadicmatt.com/wp-content/uploads/2011/12/11reasonsthailand.jpg',
            alt: 'Thailand'
        },

        facts: {
            items: [
                'официальной валютой является тайский бат, 1 бат равен 0,032 доллара США.',
                'лучший способ передвижения по Таиланду – на автобусе или поезде.',
                '95% населения Тайланда исповедует буддизм',
                'самая высокая статуя Будды – Великий Тайский Будда высотой 92 м – в провинции Анг Тонг',
                'полное национальное название столицы Тайланда внесено в книгу рекордов Гиннеса как самое длинное из всех названий городов, оно состоит из 168 символов.'],
            image: facts,
        },

        accomodation: {
            title: 'Размещение', 
            items: [
                {
                    title: 'Бюджетный вариант', 
                    text: 'Вы можете найти несколько хостелов для туристов в диапазоне от 250 до 700 бат за ночь. Наслаждайтесь общими или отдельными комнатами, общими кухнями, лаундж-зонами, бесплатным Wi-Fi и отличным расположением',
                    id: '1',
                },
    
                {
                    title: 'Средний уровень', 
                    text: 'Для отелей среднего класса рассчитывайте заплатить 1500-2750 бат за ночь и наслаждаться отдельными номерами, бесплатным завтраком, открытым бассейном, рестораном и баром в отеле, тренажерным залом и близлежащими достопримечательностями.',
                    id: '2',
                },
    
                {
                    title: 'Высокий класс', 
                    text: 'Высококлассные отели будут стоить от 300 до 12 000 бат за ночь, а самые роскошные — до 76 500 бат. Насладитесь лучшим в Таиланде первоклассным гостеприимством, изысканными номерами и люксами с телевизорами с плоским экраном, красивой архитектурой отеля, бассейнами на крыше с видом на город, несколькими ресторанами, фитнес-центрами, теннисными кортами и многим другим.',
                    id: '3',
                },
            ]
            
        },

        eating: {
            title: 'Кухня',
            text: 'Тайская кухня состоит из риса, лапшы, нам пла (рыбный соус), овощей и фруктов, морепродуктов или мяса, а также трав и специй. Пад Тай – одно из национальных блюд Таиланда. Супы и карри в различных сочетаниях также являются популярными блюдами. В Таиланде много уличных торговцев, у которых можно попробовать великолепную тайскую кухню. Будьте готовы платить 90-150 бат за еду, когда обедаете в ресторане.',

            recomendations: {
                title: 'Рекомендации ресторанов',
                items: [
                    {
                        name: 'Red Tuna',
                        adress: '256/1 Cherngtalay-Baan Don, Cherngtalay, Talang, Phuket',
                        image: {
                            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKmWlNJDMOwCWH6jld3NrvZX4CWLgAIJm-rw&usqp=CAU',
                            alt: 'tom yam'
                        },
                        id: '1',
                    },
                    {
                        name: 'Raan Jay Fai',
                        adress: '327 Maha Chai Rd, Samran Rat, Phra Nakhon, Bangkok 10200',
                        image: {
                            src: 'https://img.freepik.com/premium-photo/thai-food-fried-noodle-thai-style-with-prawns-bean-sprout-garnish-peanuts-chili-powder-sugar-lemon-lime-stirfry-noodle-pad-thai-plate-served-dining-table-food-top-view_73523-6528.jpg',
                            alt: 'pad thai'
                        },
                        id: '2',
                    },
                    {
                        name: 'Paste Bangkok',
                        adress: 'Gaysorn Village, 999 Phloen Chit Rd, Lumphini, Pathum Wan, Bangkok 10330',
                        image: {
                            src: 'https://frugalhausfrau.com/wp-content/uploads/2017/01/thai-pineapple-fried-rice-3.jpg',
                            alt: 'fried rice'
                        },
                        id: '3',
                    }
                ]
            }
        },

        visits: {
            title: 'Что посмотреть',
            recomendations: [
                {
                    destination: 'Пхукет',
                    description: 'Самый большой остров Таиланда. Это райский уголок с белоснежным песком, кокосовыми пальмами, теплым морем, ласковым солнцем и видом на горы.',
                    image: {
                        src: 'https://www.travelandleisure.com/thmb/RQ3JmT8V2y2fhwr7NY0cgUumcCE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/phuket-thailand-karst-formation-phuket0327-92bd3ce9266148dba74cba5e36c711e2.jpg',
                        alt: 'Phuket'
                    },
                    id: '1',
                },
                {
                    destination: 'Бангкок',
                    description: 'Столица Таиланда, огромный город, известный своими богато украшенными храмами и насыщенной ночной жизнью.',
                    image: {
                        src: 'https://media.nomadicmatt.com/2020/bangkoksafe.jpg',
                        alt: 'Bangkok'
                    },
                    id: '2',
                },
                {
                    destination: 'Чиангмай',
                    description: 'Тем, кого интересуют достопримечательности Таиланда, способные поправить здоровье, прямая дорога на горячие источники в район Сан Камфаенг. Расположенные на 40 акрах усаженной зелеными насаждениями земли, они известны своим общеукрепляющим действием.',
                    image: {
                        src: 'https://media.cntraveler.com/photos/612456257dfe5dff926c7688/4:3/w_5331,h_3998,c_limit/LICENSE_Achariyar%20Rojanapirom-Chiang%20Mai_(c)%20Getty%20Images_CNT%20UK_Sophie.jpeg',
                        alt: 'Chiang Mai'
                    },
                    id: '3',
                }
            ]
        }
    },

    malasia: {
        title: 'Малайзия',
        description: 'Таиланд, известный своей знаменитой кухней, также является страной с богатой историей и культурой, а также домом для многих священных мест и храмов. Добавьте множество торговых центров, дружелюбных местных жителей и множество чудес природы, таких как пляжи, лагуны и пещеры, и все это сделает путешествие незабываемым.',

        image: {
            src: 'https://www.nomadicmatt.com/wp-content/uploads/2011/12/11reasonsthailand.jpg',
            alt: 'Thailand'
        },

        facts: {
            items: [
                'официальной валютой является тайский бат, 1 бат равен 0,032 доллара США.',
                'лучший способ передвижения по Таиланду – на автобусе или поезде.',
                '95% населения Тайланда исповедует буддизм',
                'самая высокая статуя Будды – Великий Тайский Будда высотой 92 м – в провинции Анг Тонг',
                'полное национальное название столицы Тайланда внесено в книгу рекордов Гиннеса как самое длинное из всех названий городов, оно состоит из 168 символов.'],
            image: facts,
        },

        accomodation: {
            title: 'Размещение', 
            items: [
                {
                    title: 'Бюджетный вариант', 
                    text: 'Вы можете найти несколько хостелов для туристов в диапазоне от 250 до 700 бат за ночь. Наслаждайтесь общими или отдельными комнатами, общими кухнями, лаундж-зонами, бесплатным Wi-Fi и отличным расположением',
                    id: '1',
                },
    
                {
                    title: 'Средний уровень', 
                    text: 'Для отелей среднего класса рассчитывайте заплатить 1500-2750 бат за ночь и наслаждаться отдельными номерами, бесплатным завтраком, открытым бассейном, рестораном и баром в отеле, тренажерным залом и близлежащими достопримечательностями.',
                    id: '2',
                },
    
                {
                    title: 'Высокий класс', 
                    text: 'Высококлассные отели будут стоить от 300 до 12 000 бат за ночь, а самые роскошные — до 76 500 бат. Насладитесь лучшим в Таиланде первоклассным гостеприимством, изысканными номерами и люксами с телевизорами с плоским экраном, красивой архитектурой отеля, бассейнами на крыше с видом на город, несколькими ресторанами, фитнес-центрами, теннисными кортами и многим другим.',
                    id: '3',
                },
            ]
            
        },

        eating: {
            title: 'Кухня',
            text: 'Тайская кухня состоит из риса, лапшы, нам пла (рыбный соус), овощей и фруктов, морепродуктов или мяса, а также трав и специй. Пад Тай – одно из национальных блюд Таиланда. Супы и карри в различных сочетаниях также являются популярными блюдами. В Таиланде много уличных торговцев, у которых можно попробовать великолепную тайскую кухню. Будьте готовы платить 90-150 бат за еду, когда обедаете в ресторане.',

            recomendations: {
                title: 'Рекомендации ресторанов',
                items: [
                    {
                        name: 'Red Tuna',
                        adress: '256/1 Cherngtalay-Baan Don, Cherngtalay, Talang, Phuket',
                        image: {
                            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKmWlNJDMOwCWH6jld3NrvZX4CWLgAIJm-rw&usqp=CAU',
                            alt: 'tom yam'
                        },
                        id: '1',
                    },
                    {
                        name: 'Raan Jay Fai',
                        adress: '327 Maha Chai Rd, Samran Rat, Phra Nakhon, Bangkok 10200',
                        image: {
                            src: 'https://img.freepik.com/premium-photo/thai-food-fried-noodle-thai-style-with-prawns-bean-sprout-garnish-peanuts-chili-powder-sugar-lemon-lime-stirfry-noodle-pad-thai-plate-served-dining-table-food-top-view_73523-6528.jpg',
                            alt: 'pad thai'
                        },
                        id: '2',
                    },
                    {
                        name: 'Paste Bangkok',
                        adress: 'Gaysorn Village, 999 Phloen Chit Rd, Lumphini, Pathum Wan, Bangkok 10330',
                        image: {
                            src: 'https://frugalhausfrau.com/wp-content/uploads/2017/01/thai-pineapple-fried-rice-3.jpg',
                            alt: 'fried rice'
                        },
                        id: '3',
                    }
                ]
            }
        },

        visits: {
            title: 'Что посмотреть',
            recomendations: [
                {
                    destination: 'Пхукет',
                    description: 'Самый большой остров Таиланда. Это райский уголок с белоснежным песком, кокосовыми пальмами, теплым морем, ласковым солнцем и видом на горы.',
                    image: {
                        src: 'https://www.travelandleisure.com/thmb/RQ3JmT8V2y2fhwr7NY0cgUumcCE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/phuket-thailand-karst-formation-phuket0327-92bd3ce9266148dba74cba5e36c711e2.jpg',
                        alt: 'Phuket'
                    },
                    id: '1',
                },
                {
                    destination: 'Бангкок',
                    description: 'Столица Таиланда, огромный город, известный своими богато украшенными храмами и насыщенной ночной жизнью.',
                    image: {
                        src: 'https://media.nomadicmatt.com/2020/bangkoksafe.jpg',
                        alt: 'Bangkok'
                    },
                    id: '2',
                },
                {
                    destination: 'Чиангмай',
                    description: 'Тем, кого интересуют достопримечательности Таиланда, способные поправить здоровье, прямая дорога на горячие источники в район Сан Камфаенг. Расположенные на 40 акрах усаженной зелеными насаждениями земли, они известны своим общеукрепляющим действием.',
                    image: {
                        src: 'https://media.cntraveler.com/photos/612456257dfe5dff926c7688/4:3/w_5331,h_3998,c_limit/LICENSE_Achariyar%20Rojanapirom-Chiang%20Mai_(c)%20Getty%20Images_CNT%20UK_Sophie.jpeg',
                        alt: 'Chiang Mai'
                    },
                    id: '3',
                }
            ]
        }
    },
}