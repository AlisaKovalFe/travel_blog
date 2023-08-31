const facts = {
    src: 'https://charityvillage.com/wp-content/uploads/2019/12/facts_feature.png',
    alt: 'facts'
}

export const destinations = [
    {
        id: 1,
        title: 'Европа',
        cover: {
            src: 'https://hips.hearstapps.com/hmg-prod/images/best-cities-to-visit-in-europe-lead-1639590299.jpg',
            alt: 'Европа'
        },
        description: 'посмотри европейские страны',

        countries: [
            {
                id: 1,
                title: 'Италия',
                cover: {
                    src: 'https://media.architecturaldigest.com/photos/5903ad5c1732ef7d3c2b9e38/4:3/w_2663,h_1997,c_limit/5%20Seaside%20Towns%20in%20Italy.jpg',
                    alt: 'Италия'
                },
                description: 'Италия',
                info: {
                    description: 'Италия - это средиземноморская страна на юге Европы, омываемая тремя морями (Адриатическим, Тирренским и Ионическим).Известна как родина западной культуры, страна, полная истории и красоты, обязательна к посещению для путешественников. От объектов Всемирного наследия ЮНЕСКО, таких как разрушенный город Помпеи, до прибрежных красот, таких как Амальфитанское побережье и Чинкве-Терре, Италия — отличное место для тех, кто хочет испытать что-то необычное Добавьте сюда великолепную итальянскую кухню, и отпуск станет идеальным.',
        
                    image: {
                        src: 'https://www.ourescapeclause.com/wp-content/uploads/2019/05/CinqueTerre-33.jpg',
                        alt: 'Italy'
                    },
            
                    facts: {
                        items: [
                                {
                                    item: 'валютой является евро, 1 евро и составляет от 1 евро до 1,35 доллара США;',
                                    id: '1'
                                },
                                {
                                    item: 'въезд: для въезда вам потребуется виза;',
                                    id: '2'
                                },
                                {
                                    item: 'лучший способ передвижения – это общественный транспорт или аренда автомобиля;',
                                    id: '3'
                                },
                                {
                                    item: 'лучшие сим-карты: TIM, Vodafone, WindTre и Iliad;',
                                    id: '4'
                                },
                                {
                                    item: 'столица Италии — Рим.',
                                    id: '5'
                                }
                            ],
                        image: facts,
                    },
            
                    accomodation: {
                        title: 'Размещение', 
                        items: [
                            {
                                title: 'Бюджетный класс', 
                                text: 'В Италии можно найти несколько бюджетных отелей по цене от 30 до 40 евро за ночь. Наслаждайтесь бесплатным Wi-Fi и завтраком, отдельными номерами и прекрасным расположением в городе.',
                                id: '1',
                            },
                
                            {
                                title: 'Средний класс', 
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
                        text: 'Если вы собираетесь посетить Италию ради ее кухни, вы не будете разочарованы. Итальянская кухня славится пастой, помидорами, сыром, рыбой и мясом. Национальные блюда - «рагу алла болоньезе», пицца, лазанья и боттарга. В общей сложности рассчитывайте заплатить около 10-20 евро за еду в большинстве ресторанов или 50 евро за еду в ресторанах из трех блюд.',
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
                        title: 'Стоит посетить',
                        recomendations: [
                            {
                                destination: 'Гора Этна',
                                description: 'Поднимите свое приключение на новый уровень, поднявшись на самый высокий вулкан Италии.',
                                image: {
                                    src: 'https://cdn.britannica.com/78/150178-050-32C89734/Mount-Etna-Bronte-Italy.jpg',
                                    alt: 'Etna'
                                },
                                id: 'Etna',
                                coordinates: [37.751512, 14.994005]
                            },
                            {
                                destination: 'Пизанская башня',
                                description: 'Пиза может быть переполнена туристами, но это то место, которое вы не захотите пропустить.',
                                image: {
                                    src: 'https://tourismmedia.italia.it/is/image/mitur/20210310164211-pisa-2?wid=1600&hei=900&fit=constrain,1&fmt=webp',
                                    alt: 'Pisa'
                                },
                                id: 'Pisa',
                                coordinates: [43.722919, 10.396454]
                            },
                            {
                                destination: 'Романья ',
                                description: 'Романья является не только домом для Паваротти, Энцо Феррари, Ферручио Ламборгини, но и гастрономической столицей страны.',
                                image: {
                                    src: 'https://www.wine-searcher.com/images/region/emilia-romagna-3835-1-2.jpg?width=734',
                                    alt: 'Romagna'
                                },
                                id: 'Romagna',
                                coordinates: [44.504866, 11.345111]
                            }
                        ]
                    }
                },
            },
            {
                id: 2,
                title: 'Франция',
                cover: {
                    src: 'https://www.expatica.com/app/uploads/sites/5/2014/05/moving-to-france-1920x1080.jpg',
                    alt: 'Франция',
                }, 
                description: 'Франция', 
                
                info: {
                    description: 'Франция известна как самое популярное туристическое направление в мире и является домом для самого известного памятника в мире: Эйфелевой башни. Но во Франции есть нечто большее, чем просто город огней. Во Франции можно посетить самые разные места, от Средиземного моря до в Пиренейских гор.',
            
                    image: {
                        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1PiAR1xop0cySwIfJ4Y4hNhOBd8va7RGUIw&usqp=CAU',
                        alt: 'France'
                    },
            
                    facts: {
                        items: [
                                {
                                    item: 'валютой является евро, 1 евро и составляет от 1 евро до 1,35 доллара США;',
                                    id: '1'
                                },
                                {
                                    item: 'во стране находится самое большое количество замков в мире — всего 4 969 шт.;',
                                    id: '2'
                                },
                                {
                                    item: 'Франция — родина кинематографа;',
                                    id: '3'
                                },
                                {
                                    item: 'если вы попросите воды в ресторане, вам подадут бутылку воды (списанную с вашего счета);',
                                    id: '4'
                                },
                                {
                                    item: 'в отличие от Канады, путешественникам разрешено употреблять алкоголь на улице.',
                                    id: '5'
                                }
                            ],
                        image: facts,
                    },
            
                    accomodation: {
                        title: 'Размещение', 
                        items: [
                            {
                                title: 'Бюджетный класс', 
                                text: 'Во Франции есть множество хостелов, где можно остановиться всего за 15-45 евро за ночь. Наслаждайтесь общими или отдельными номерами, бесплатным Wi-Fi и завтраком и прекрасным расположением в городе.',
                                id: '1',
                            },
                
                            {
                                title: 'Средний класс', 
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
                                    name: 'Le Bistro Marbeuf',
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
                        title: 'Стоит посетить',
                        recomendations: [
                            {
                                destination: 'Марсель',
                                description: 'Этот старый порт ошеломляет и наполнен необузданной энергией, которую вы ожидаете от оживленного портового города.',
                                image: {
                                    src: 'https://lifeglobe.net/x/entry/9658/1.jpg',
                                    alt: 'Marcel'
                                },
                                id: 'Marcel',
                                coordinates: [43.303068, 5.378492],
                            },
                            {
                                destination: 'Лувр',
                                description: 'Бывшая крепость, некогда дворец, а теперь музей — все эти перевоплощения пережил на своём веку Лувр в Париже, ставший самым посещаемым музеем, куда ежегодно приезжают миллионы людей со всего мира.',
                                image: {
                                    src: 'https://www.tripzaza.com/ru/destinations/wp-content/uploads/2017/04/France-2-The-Louvre-e1492754751417.jpg',
                                    alt: 'Louvre'
                                },
                                id: 'Louvre',
                                coordinates: [48.860640, 2.337618],
                            },
                            {
                                destination: `Руан`,
                                description: `Жанна д'Арк родилась и была казнена в маленьком городке Руан, расположенном в 135 км от Парижа.`,
                                image: {
                                    src: 'https://francetravelplanner.com/assets/alsace/domremy/joan_church5042-400.jpg',
                                    alt: 'Ruan'
                                },
                                id: 'Ruan',
                                coordinates: [49.442500, 1.084967],
                            }
                        ]
                    }
                },
            },
            {
                id: 3,
                title: 'Испания',
                cover: {
                    src: 'https://www.state.gov/wp-content/uploads/2018/11/Spain-2109x1406.jpg',
                    alt: 'Испания'
                },
                description: 'Испания',

                info: {
                    description: 'Испания известна своими дружелюбными жителями, непринужденным образом жизни, вкусной кухней, сумасшедшими ночными вечеринками и богатой историей. От кулинарной культуры мирового класса Сан-Себастьяна и Страны Басков до потрясающих пляжей Коста-дель-Соль, каждый регион Испании предлагает что-то свое. А еще эта страна занимает второе место по количеству объектов всемирного наследия ЮНЕСКО после Италии.',
            
                    image: {
                        src: 'https://img.traveltriangle.com/blog/wp-content/uploads/2020/02/Cover-image-of-Spain-in-August1.jpg',
                        alt: 'Spain'
                    },
            
                    facts: {
                        items: [
                            
                                {
                                    item: 'валютой является евро, 1 евро и составляет от 1 евро до 1,35 доллара США;',
                                    id: '1'
                                },
                                {
                                    item: 'Испания - это королевство, cтраной правит король, правда, только номинально;',
                                    id: '2'
                                },
                                {
                                    item: 'испанский язык - третий по популярности в мире, на нем говорит примерно 400 миллионов человек;',
                                    id: '3'
                                },
                                {
                                    item: 'большинство испанских банков закрываются во второй половине дня;',
                                    id: '4'
                                },
                                {
                                    item: 'футбол считается национальным видом спорта',
                                    id: '5'
                                }            
                            ],
                        image: facts,
                    },
            
                    accomodation: {
                        title: 'Размещение', 
                        items: [
                            {
                                title: 'Бюджетный класс', 
                                text: 'Вы можете остановиться в хостелах и других недорогих отелях примерно за 30 долларов США за ночь в Испании. Они часто включают континентальный завтрак, отдельные комнаты и телевизор.',
                                id: '1',
                            },
                
                            {
                                title: 'Средний класс', 
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
                        text: 'Типичным блюдом Испаниия можно назвать крокеты, его можно найти во многих ресторанах Испании, где часто подают треску или джем с соусом бешамель. Также национальным блюдом является хамон (ветчина), чоризо и суп гаспачо, который готовится из большого количества овощей, в том числе ароматных помидоров, и подается охлажденным в качестве закуски.',
            
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
                        title: 'Стоит посетить',
                        recomendations: [
                            {
                                destination: 'Храм Святого Семейства',
                                description: 'Вы не можете посетить Барселону, не познакомившись с одним из самых интересных архитектурных решений, спроектированным знаменитым архитектором Антонио Гауди.',
                                image: {
                                    src: 'https://cdn.britannica.com/15/194815-050-08B5E7D1/Nativity-facade-Sagrada-Familia-cathedral-Barcelona-Spain.jpg',
                                    alt: 'Gaudi'
                                },
                                id: 'Gaudi',
                                coordinates: [41.403591, 2.174307],
                            },
                            {
                                destination: 'Санта-Мария-де-Риполь',
                                description: 'Это монастырь, построенный в 888 году, известен как родина Каталонии.',
                                image: {
                                    src: 'https://ispaniagid.ru/wp-content/uploads/2011/12/Ripoll2.jpg',
                                    alt: 'Santa Maria in Ripoll'
                                },
                                id: 'Santa Maria in Ripoll',
                                coordinates: [42.200395, 2.191620],
                            },
                            {
                                destination: 'Камино де Сантьяго',
                                description: 'Один из самых популярных походов в мире, который проходит через Испанию.',
                                image: {
                                    src: 'https://cdn.getyourguide.com/img/tour/5e6606c78db7f.jpeg/132.jpg',
                                    alt: 'Camino de Santiago'
                                },
                                id: 'Camino de Santiago',
                                coordinates: [42.333020, -3.561980],
                            }
                        ]
                    }
                },
            },
            {
                id: 4,
                title: 'Португалия',
                cover: {
                    src: 'https://www.travelandleisure.com/thmb/LzWpzDihxjffaFmM9TZWCvm9VyY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/lisbon-portugal-LISBONTG0521-c933a0fb669647619fa580f6c602c4c8.jpg',
                    alt: 'Португалия',
                }, 
                description: 'Португалия',
                
                info: {
                    description: 'Расположенная на краю Европы, Португалия была описана теми, кто был там, как отпуск мечты. Эта средиземноморская страна известна своей прекрасной архитектурой, солнечной погодой, отличным вином и великолепными пляжами. Местные жители известны своей дружелюбностью и теплотой. Цены в Португалии ниже, чем в других европейских странах, что делает это место идеальным для людей с ограниченным бюджетом.',
            
                    image: {
                        src: 'https://img.traveltriangle.com/blog/wp-content/uploads/2020/02/Cover-image-of-Spain-in-August1.jpg',
                        alt: 'Portugal'
                    },
            
                    facts: {
                        items: [
                                {
                                    item: 'валютой является евро, 1 евро и составляет от 1 евро до 1,35 доллара США;',
                                    id: '1'
                                },
                                {
                                    item: 'первое упоминание о Португалии датируется 868 годом;',
                                    id: '2'
                                },
                                {
                                    item: 'столица Лиссабон – древнейший из городов Западной Европы;',
                                    id: '3'
                                },
                                {
                                    item: 'на территории страны производят знаменитое крепленое вино «Портвейн»;',
                                    id: '4'
                                },
                                {
                                    item: 'единственная европейская страна, границы которой неизменны с 1139 года.',
                                    id: '5'
                                } 
                            ],
                        image: facts,
                    },
            
                    accomodation: {
                        title: 'Размещение', 
                        items: [
                            {
                                title: 'Бюджетный класс', 
                                text: 'Португалия предлагает множество хостелов по цене от 25 до 50 евро за ночь.',
                                id: '1',
                            },
                
                            {
                                title: 'Средний класс', 
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
                        text: 'Поскольку местные жители обычно едят в кафе и в своем собственном темпе, поиск еды на ходу (или уличной еды) не является большой частью культуры. Тем не менее, есть множество уличных торговцев, которые подают португальскую еду. Отправляйтесь на фестиваль или мероприятие, чтобы найти фартуры (португальская версия чурро с более лимонным вкусом) или сушеных осьминогов, которые чаще встречаются в южной Португалии. Конечно, в Португалии есть множество кафе и ресторанов, где подают блюда аутентичной кухни. В общей сложности рассчитывайте платить около 30-50 евро в день на еду.',
            
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
                        title: 'Стоит посетить',
                        recomendations: [
                            {
                                destination: 'Назаре',
                                description: 'Займитесь серфингом в Назаре.',
                                image: {
                                    src: 'https://bnnvara-3opreis.cdn.prepr.io/w_1250,q_100/s3-3opreis-bnnvara/7af2875e-324d-4118-a128-d79e4148d3a8.jpg',
                                    alt: 'Nazare'
                                },
                                id: 'Nazare',
                                coordinates: [39.604793, -9.066759],
                            },
                            {
                                destination: 'Обидуш',
                                description: 'Посетите средневековый город Обидуш.',
                                image: {
                                    src: 'https://immigrantinvest.com/wp-content/uploads/2022/09/all-about-obidos_376550973.jpeg',
                                    alt: 'Obidos'
                                },
                                id: 'Obidos',
                                coordinates: [39.359703, -9.155611],
                            },
                            {
                                destination: 'Лиссабон',
                                description: 'Окунитесь в красоту столицы Португалии.',
                                image: {
                                    src: 'https://fullsuitcase.com/wp-content/uploads/2021/06/Yellow-tram-and-colorful-buildings-in-Lisbon-Portugal.jpg',
                                    alt: 'Lisbon'
                                },
                                id: 'Lisbon',
                                coordinates: [38.707890, -9.136594],
                            }
                        ]
                    }
                },
            },
            {
                id: 5,
                title: 'Чехия',
                cover: {
                    src: 'https://media.timeout.com/images/105226691/image.jpg',
                    alt: 'Чехия'
                },
                description: 'Чехия',

                info: {
                    description: 'Хотя Чешская Республика существует только с 1993 года, это определенно страна с захватывающей историей. Прага может быть самым красивым и культурным городом в мире, но страна известна тем, что в ней находятся одни из лучших пивоварен, которые вы когда-либо видели, и она полна удивительных замков, которые заставят вас затаить дыхание.',
            
                    image: {
                        src: 'https://res.cloudinary.com/worldpackers/image/upload/c_fill,f_auto,q_auto,w_1024/v1/guides/article_cover/n6s0tk9ykvtrnwvbba7f',
                        alt: 'Czech Republic'
                    },
            
                    facts: {
                        items: [
                                {
                                    item: 'валютой является чешская крона, курс около 25 чешских крон за 1 доллар США;',
                                    id: '1'
                                },
                                {
                                    item: 'историческое название Чехии – Богемия (от кельтского племени «боев»);',
                                    id: '2'
                                },
                                {
                                    item: 'Влтава — самая длинная река в Республике Чехия. Её длина составляет 446 км;',
                                    id: '3'
                                },
                                {
                                    item: 'страна имеет наиболее успешную экономику среди стран бывшего соцлагеря',
                                    id: '4'
                                },
                                {
                                    item: 'здесь изобрели пиво Pils, а Pilsner Urquell, первый в мире пилснер;',
                                    id: '5'
                                } 
                            ],
                        image: facts,
                    },
            
                    accomodation: {
                        title: 'Размещение', 
                        items: [
                            {
                                title: 'Бюджетный класс', 
                                text: 'Вы можете найти хостелы за 210-600 чешских крон за ночь. Наслаждайтесь общими или отдельными номерами, запирающимися шкафчиками, бесплатным Wi-Fi, общей кухней, кофе и чаем, а также гостиной с телевизором.',
                                id: '1',
                            },
                
                            {
                                title: 'Средний класс', 
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
                        text: 'Кухня Чехии находится под влиянием соседних стран. Свинина, рыба, густые супы, хлеб на закваске, овощи, пельмени и десерты присутствуют во многих блюдах. Популярные блюда включают жареную свинину с кнедликами и капустой, маринованную вырезку и тушеную говядину с луком и специями. Есть много ресторанов, где вы можете попробовать блюда национальной кухни. В общей сложности рассчитывайте платить около 470 чешских крон в день за еду.',
            
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
                        title: 'Стоит посетить',
                        recomendations: [
                            {
                                destination: 'Карлов мост',
                                description: 'Это культовый средневековый мост с 30 памятниками святым в стиле барокко. Когда-то мост использовался как торговый путь между Прагой и Восточной и Западной Европой, а сейчас мост является популярным местом для местных художников и любителей любоваться прекрасным видом на реку Влтаву внизу.',
                                image: {
                                    src: 'https://image.arrivalguides.com/1230x800/05/90230aa1e71a891095c0364eab70674a.jpg',
                                    alt: 'Karlov Bridge'
                                },
                                id: 'Karlov Bridge',
                                coordinates: [50.086477, 14.411525],
                            },
                            {
                                destination: 'Башня Петин',
                                description: 'Построенная в 1891 году и когда-то использовавшаяся в качестве смотровой и передающей башни, эта башня является популярным туристическим местом. Стоя на высоте 63,5 метра, посетители могут поразиться его размерам, прежде чем подняться по 299 ступеням, чтобы полюбоваться великолепным видом на город.',
                                image: {
                                    src: 'https://www.amazingczechia.com/wp-content/uploads/2017/05/petrin-tower-prague-01.jpg',
                                    alt: 'Petin Tower'
                                },
                                id: 'Petin Tower',
                                coordinates: [50.086209, 14.413576],
                            },
                            {
                                destination: 'Пражский Град',
                                description: 'Построенный в 9 веке, Пражский Град является официальной канцелярией президента Чешской Республики, а также крупнейшим замковым комплексом в мире. С готической и романской архитектурой это потрясающее зрелище.',
                                image: {
                                    src: 'https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/zvgtdvhrwrshx6awtpy4/Prague%20Castle%20Walking%20Tour%2C%20Prague%2C%20Czech%20Republic.jpg',
                                    alt: 'Prague Castle'
                                },
                                id: 'Prague Castle',
                                coordinates: [50.090880, 14.401455],
                            }
                        ]
                    }
                },
            },
            {
                id: 6,
                title: 'Германия',
                cover: {
                    src: 'https://www.state.gov/wp-content/uploads/2018/11/Germany-2109x1406.jpg',
                    alt: 'Германия',
                }, 
                description: 'Германия', 

                info: {
                    description: 'Германия, расположенная в Центральной Европе, представляет собой страну, состоящую из 16 государств. У нее самая большая национальная экономика в Европе и третье место по производству автомобилей в мире (известные компании из Германии включают BMW, Volkswagen и Mercedes-Benz). Более того, Германия славится своей потрясающей архитектурой, историческими соборами и замками, лесами и горами, а также отличным пивом и едой.',
            
                    image: {
                        src: 'https://media.nomadicmatt.com/2022/wheretostayberlin.jpeg',
                        alt: 'Germany'
                    },
            
                    facts: {
                        items: [
                                {
                                    item: 'алютой является евро, 1 евро и составляет от 1 евро до 1,35 доллара США;',
                                    id: '1'
                                },
                                {
                                    item: 'гимн Германии написан в 1841 году;',
                                    id: '2'
                                },
                                {
                                    item: 'Западная и Восточная Германия объединились в 1990 году;',
                                    id: '3'
                                },
                                {
                                    item: 'в стране существует около 1500 видов колбас и примерно 5 тысяч сортов пива;',
                                    id: '4'
                                },
                                {
                                    item: '80% автомобилей такси это - Mercedes Benz;',
                                    id: '5'
                                }
                            ],
                        image: facts,
                    },
            
                    accomodation: {
                        title: 'Размещение', 
                        items: [
                            {
                                title: 'Бюджетный класс', 
                                text: 'Есть множество недорогих отелей по цене от 22 до 45 евро за ночь.',
                                id: '1',
                            },
                
                            {
                                title: 'Средний класс', 
                                text: 'В отелях среднего уровня рассчитывайте заплатить примерно 65 евро за ночь.',
                                id: '2',
                            },
                
                            {
                                title: 'Высокий класс', 
                                text: 'За пятизвездочные отели рассчитывайте заплатить около 250-1600 евро за ночь, за эту цену вы увидите террассы и гостиными, массажем в номере, элегантной кухней, 24-часовым обслуживанием номеров и спа.',
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
                        title: 'Стоит посетить',
                        recomendations: [
                            {
                                destination: 'Бавария',
                                description: 'Прогуляйтесь по горам Баварии и посетите смотровую площадку Альпспикс и самую высокую вершину Германии Цугшпиц.',
                                image: {
                                    src: 'https://www.goway.com/media/uploads/europe/germany/bavaria/rothenburg_ob_der_tauber,_franconia,_bavaria,_germany_551877808.jpg',
                                    alt: 'Bavaria'
                                },
                                id: 'Bavaria',
                                coordinates: [48.137192, 11.575694],
                            },
                            {
                                destination: 'Замок Нойшванштайн',
                                description: 'Самое фотографируемое место в Германии и замок, вдохновивший Диснея на создание «Спящей красавицы», считается воплощением волшебной сказки.',
                                image: {
                                    src: 'https://www.travelandleisure.com/thmb/umcoSMJygYyG5OIYDdBPgnrJGLc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/01-neuschwanstein-castle-bavaria-NEUSCHWANSTEIN0417-273a040698f24fc1ac22e717bb3f1f0c.jpg',
                                    alt: 'Castle Neuschwanstein'
                                },
                                id: 'Castle Neuschwanstei',
                                coordinates: [47.558094, 10.748695],
                            },
                            {
                                destination: 'Берлин',
                                description: 'Самый артистичный и захватывающий город Германии.',
                                image: {
                                    src: 'https://a.cdn-hotels.com/gdcs/production50/d44/571ba00b-11cd-4a54-9f2a-5b38da2bc89e.jpg?impolicy=fcrop&w=800&h=533&q=medium',
                                    alt: 'Berlin'
                                },
                                id: 'Berlin',
                                coordinates: [52.518621, 13.375142],
                            }
                        ]
                    }
                },
            }, 
        ]
    },
    {
        id: 2,
        title: 'Азия',
        cover: {
            src: 'https://www.travelandleisure.com/thmb/Zjq8fLh4fPPjsnLGSyJqlv6aQdk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/taipei-06-CITASIWB21-4a78cfb63c264e818e1dfdf66fd2dae6.jpg',
            alt: 'Азия',
        }, 
        description: 'посмотри азиатские страны',

        countries: [
            {
                id: 7,
                title: 'Китай',
                cover: {
                    src: 'https://cdn2.tu-tu.ru/image/pagetree_node_data/1/56dae68ab2a980fd61fa6e7b546b8e2b/',
                    alt: 'Китай'
                },
                description: 'Китай', 

                info: {
                    description: 'Китай — страна, наполненная неожиданными сюрпризами. Теплый прием со стороны людей, красота ландшафта и огромные размеры городов сделали Китай сделают страну одним из любимых направлений для путешествий.',
            
                    image: {
                        src: 'https://www.state.gov/wp-content/uploads/2019/04/China-2107x1406.jpg',
                        alt: 'China'
                    },
            
                    facts: {
                        items: [
                                {
                                    item: 'валютой является китайский юань и составляет около 6,07 юаней за 1 доллар США;',
                                    id: '1'
                                },
                                {
                                    item: 'интернет подвергается цензуре в Китае;',
                                    id: '2'
                                },
                                {
                                    item: 'китайцы используют, в среднем, 45 млрд палочек в год;',
                                    id: '3'
                                },
                                {
                                    item: 'население страны насчитывает 1,4 млрд жителей;',
                                    id: '4'
                                },
                                {
                                    item: 'самое популярное имя в Китае – Ван (Wang).',
                                    id: '5'
                                }
                            ],
                        image: facts,
                    },
            
                    accomodation: {
                        title: 'Размещение', 
                        items: [
                            {
                                title: 'Бюджетный класс', 
                                text: 'Вы можете получить общежитие в Китае, начиная с 15 долларов США. Это часто включает в себя общую комнату, общую ванную комнату и гостиную.',
                                id: '1',
                            },
                
                            {
                                title: 'Средний класс', 
                                text: 'Отели среднего класса в Китае начинаются от 75 долларов США. Они могут включать бесплатный завтрак, бассейн и семейные апартаменты.',
                                id: '2',
                            },
                
                            {
                                title: 'Высокий класс', 
                                text: 'Роскошные отели в Китае начинаются от 150 долларов США за ночь. Обычно они включают в себя ресторан, бар и трансфер до аэропорта.',
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
                        title: 'Стоит посетить',
                        recomendations: [
                            {
                                destination: 'Великая Китайская стена',
                                description: 'Насладитесь прогулкой вдоль Великой Китайской стены.',
                                image: {
                                    src: 'https://images.chinahighlights.com/allpicture/2022/04/7866833d4ad140e9bf53cc40_cut_800x500_9.jpg',
                                    alt: 'Chinese Wall'
                                },
                                id: 'Chinese Wall',
                                coordinates: [40.676735, 117.232209],
                            },
                            {
                                destination: 'Площадь Тяньаньмэнь',
                                description: 'Прогуляйтесь по самой большой общественной площади в мире, где произошла печально известная резня 1989 года.',
                                image: {
                                    src: 'https://freedomhouse.org/sites/default/files/styles/wysiwyg_full_width/public/Tiananmen_Square.jpg?itok=B3WBD8nA',
                                    alt: 'Tiananmen square'
                                },
                                id: 'Tiananmen square',
                                coordinates: [39.902383, 116.391441],
                            },
                            {
                                destination: 'Река Ли',
                                description: 'Круиз по бамбуковом реке Ли.',
                                image: {
                                    src: 'https://media.istockphoto.com/id/526705622/photo/karst-mountains-and-river-li-in-guilin-guangxi-region-of-china.jpg?s=612x612&w=0&k=20&c=pt48WaDHyDZ0RGusTknmXv4cUSblvLocaR6Mzc6J25k=',
                                    alt: 'Li river'
                                },
                                id: 'Li river',
                                coordinates: [25.260833, 110.282583],
                            }
                        ]
                    }
                },
            },
            {
                id: 8,
                title: 'Таиланд',
                cover: {
                    src: 'https://primamediamts.servicecdn.ru/f/big/3451/3450296.png?8c554a3d30c57f20dff48d95b638efc6',
                    alt: 'Таиланд',
                }, 
                description: 'Таиланд', 
                
                info: {
                    description: 'Таиланд, известный своей знаменитой кухней, является страной с богатой историей и культурой, а также домом для многих священных мест и храмов. Добавьте множество торговых центров, дружелюбных местных жителей и множество чудес природы, таких как пляжи, лагуны и пещеры, и все это сделает путешествие незабываемым.',
            
                    image: {
                        src: 'https://www.nomadicmatt.com/wp-content/uploads/2011/12/11reasonsthailand.jpg',
                        alt: 'Thailand'
                    },
            
                    facts: {
                        items: [
                                {
                                    item: 'валютой является тайский бат, 1 бат равен 0,032 доллара США;',
                                    id: '1'
                                },
                                {
                                    item: '95% населения Тайланда исповедует буддизм;',
                                    id: '2'
                                },
                                {
                                    item: 'самая высокая статуя Будды – Великий Тайский Будда высотой 92 м – в провинции Анг Тонг;',
                                    id: '3'
                                },
                                {
                                    item: 'полное название столицы страны состоит из 168 символов;',
                                    id: '4'
                                },
                                {
                                    item: 'Бангкок – самый посещаемый город в мире.',
                                    id: '5'
                                }
                            ],
                        image: facts,
                    },
            
                    accomodation: {
                        title: 'Размещение', 
                        items: [
                            {
                                title: 'Бюджетный класс', 
                                text: 'Вы можете найти несколько хостелов для туристов в диапазоне от 250 до 700 бат за ночь. Наслаждайтесь общими или отдельными комнатами, общими кухнями, лаундж-зонами, бесплатным Wi-Fi и отличным расположением',
                                id: '1',
                            },
                
                            {
                                title: 'Средний класс', 
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
                        title: 'Стоит посетить',
                        recomendations: [
                            {
                                destination: 'Пхукет',
                                description: 'Самый большой остров Таиланда. Это райский уголок с белоснежным песком, кокосовыми пальмами, теплым морем, ласковым солнцем и видом на горы.',
                                image: {
                                    src: 'https://www.travelandleisure.com/thmb/RQ3JmT8V2y2fhwr7NY0cgUumcCE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/phuket-thailand-karst-formation-phuket0327-92bd3ce9266148dba74cba5e36c711e2.jpg',
                                    alt: 'Phuket'
                                },
                                id: 'Phuket',
                                coordinates: [7.877035, 98.396866]
                            },
                            {
                                destination: 'Бангкок',
                                description: 'Столица Таиланда, огромный город, известный своими богато украшенными храмами и насыщенной ночной жизнью.',
                                image: {
                                    src: 'https://media.nomadicmatt.com/2020/bangkoksafe.jpg',
                                    alt: 'Bangkok'
                                },
                                id: 'Bangkok',
                                coordinates: [13.771370, 100.513782]
                            },
                            {
                                destination: 'Чиангмай',
                                description: 'Тем, кого интересуют достопримечательности Таиланда, способные поправить здоровье, прямая дорога на горячие источники в район Сан Камфаенг. Расположенные на 40 акрах усаженной зелеными насаждениями земли, они известны своим общеукрепляющим действием.',
                                image: {
                                    src: 'https://media.cntraveler.com/photos/612456257dfe5dff926c7688/4:3/w_5331,h_3998,c_limit/LICENSE_Achariyar%20Rojanapirom-Chiang%20Mai_(c)%20Getty%20Images_CNT%20UK_Sophie.jpeg',
                                    alt: 'Chiang Mai'
                                },
                                id: 'Chiang Mai',
                                coordinates: [18.790246, 98.9956653]
                            }
                        ]
                    }
                },
            },
            {
                id: 9,
                title: 'Малайзия',
                cover: {
                    src: 'https://planetofhotels.com/guide/sites/default/files/styles/big_gallery_image/public/text_gallery/Malaysia-4.jpg',
                    alt: 'Малайзия'
                },
                description: 'Малайзия', 

                info: {
                    description: 'Малайзия — это две страны в одной, разделенные пополам Южно-Китайским морем. Находящийся под влиянием Китая и Индии, мультикультурный полуостров является зенитом культуры с динамичными городскими мегаполисами, а Борнео — это место, куда путешественники приезжают, чтобы отдохнуть на одном из многочисленных бирюзовых пляжей или исследовать его обширные и древние джунгли.',
            
                    image: {
                        src: 'https://i.natgeofe.com/k/8dc7401d-fac9-43c5-a6d4-d056401f7779/kuala-lumpur.jpg?w=1084.125&h=721.875',
                        alt: 'Malaysia'
                    },
            
                    facts: {
                        items: [
                                {
                                    item: 'валютой является малайзийский рингет (MYR), который стоит от 4 MYR до 1 доллара США;',
                                    id: '1'
                                },
                                {
                                    item: 'Малайзия — мультикультурная, но преимущественно исламская страна;',
                                    id: '2'
                                },
                                {
                                    item: 'воду, как правило, безопасно пить прямо из-под крана;',
                                    id: '3'
                                },
                                {
                                    item: 'страна имеет один из самых высоких показателей биоразнообразия в мире;',
                                    id: '4'
                                },
                                {
                                    item: 'одна пятая часть всего населения Малайзии — китайцы.',
                                    id: '5'
                                }
                            ],
                        image: facts,
                    },
            
                    accomodation: {
                        title: 'Размещение', 
                        items: [
                            {
                                title: 'Бюджетный класс', 
                                text: 'Бюджетные отели в Малайзии начинаются примерно с 4 долларов США за ночь, что очень доступно. Некоторые из этих отелей предоставляют бесплатный Wi-Fi и бесплатные парковочные места.',
                                id: '1',
                            },
                
                            {
                                title: 'Средний класс', 
                                text: 'в Малайзии отели этой категории стоят в среднем около 12 долларов США за ночь. Номера здесь оснащены кондиционерами и водонагревателями. Некоторые отели также предоставляют бесплатный Wi-Fi.',
                                id: '2',
                            },
                
                            {
                                title: 'Высокий класс', 
                                text: 'В отелях есть современные номера и люксы с мини-кухней. Есть также тренажерные залы, крытый или открытый бассейны, рестораны, бесплатный Wi-Fi и, в некоторых случаях, бесплатный трансфер или услуги шофера. Стоимость номеров от 100 долларов США и выше за ночь.',
                                id: '3',
                            },
                        ]
                        
                    },
            
                    eating: {
                        title: 'Кухня',
                        text: 'Среди традиционных блюд страны можно отметить Наси Лемак (кокосовый рис, приготовленный с листьями пандана и заправленный соусом чили или другим малазийским карр), Икан Бакар (маринованная рыба или морепродукты на гриле, завернутые в банановые листья и приготовленные на углях), Наси кандар (состоит из пропаренного риса, карри в индийском стиле и различных белковых блюд.',
            
                        recomendations: {
                            title: 'Рекомендации ресторанов',
                            items: [
                                {
                                    name: 'Akâr Dining',
                                    adress: '109, Jalan Aminuddin Baki, Taman Tun Dr Ismail, 60000 Kuala Lumpur',
                                    image: {
                                        src: 'https://advantiko.com/wp-content/uploads/2020/02/malaysia-food.jpg',
                                        alt: 'nasi lemak'
                                    },
                                    id: '1',
                                },
                                {
                                    name: 'Ninja Kitchen',
                                    adress: '186, Jalan Sungai Labu, Taman Seri Sekinchan, 45400 Sekinchan, Selangor',
                                    image: {
                                        src: 'https://i.ytimg.com/vi/c4j4VUj4II8/maxresdefault.jpg',
                                        alt: 'ikan bakar'
                                    },
                                    id: '2',
                                },
                                {
                                    name: '1978 Cucur Udang',
                                    adress: '14, Jln 21/19, Sea Park, 46300 Petaling Jaya, Selangor',
                                    image: {
                                        src: 'https://www.japantimes.co.jp/uploads/imported_images/uploads/2017/08/p1-w-nampampn-a-20170825.jpg',
                                        alt: 'national dish'
                                    },
                                    id: '3',
                                }
                            ]
                        }
                    },
            
                    visits: {
                        title: 'Стоит посетить',
                        recomendations: [
                            {
                                destination: 'Кинабалу',
                                description: 'Поход на гору Кинабалу. Этот 4095-метровый мамонт находится в 2 часах езды на автобусе от Кота-Кинабалу, столицы штата Сабах, северной провинции Малайзии Борнео.',
                                image: {
                                    src: 'https://s9.travelask.ru/system/images/files/001/319/138/wysiwyg_jpg/mount-k-3.jpg?1559331219',
                                    alt: 'Mount Kinabalu'
                                },
                                id: 'Mount Kinabalu',
                                coordinates: [6.083380, 116.549937]
                            },
                            {
                                destination: 'Деревня Саравак',
                                description: 'Это дом малазийской культуры, где вы можете узнать об искусстве, музыке и культуре народа.',
                                image: {
                                    src: 'https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2018/09/Sarawak-Cultural-Village-cover-Copy.jpg',
                                    alt: 'Sarawak village'
                                },
                                id: 'Sarawak village',
                                coordinates: [2.131423, 111.522184]
                            },
                            {
                                destination: 'Куала-Лумпур',
                                description: 'Внутренние красочные контрасты Малайзии достигают кульминации в захватывающем Куала-Лумпуре.',
                                image: {
                                    src: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Moonrise_over_kuala_lumpur.jpg',
                                    alt: 'Kuala Lumpur'
                                },
                                id: 'Kuala Lumpur',
                                coordinates: [3.140285, 101.706700]
                            }
                        ]
                    }
                },
            },
            {
                id: 10,
                title: 'Сингапур',
                cover: {
                    src: 'https://www.gardener.ru/gallery/parki/singapur/3.jpg',
                    alt: 'Сингапур',
                }, 
                description: 'Сингапур',

                info: {
                    description: 'Многонациональный город-государство, мировой финансовый центр. Он расположен на острове и граничит с южной частью Малайзии. Сердцем колониального центра города является поле для крикета Паданг, созданное в 1830-е годы. Оно окружено величественными зданиями, среди которых городская ратуша с 18 коринфскими колоннами. В Китайском квартале, возникшем около 1820 года, находится храм Священного зуба Будды, где, как считается, хранится один из зубов основателя буддизма',
            
                    image: {
                        src: 'https://totalenergies.com/sites/g/files/nytnzq121/files/styles/w_1110/public/images/2021-04/Singapour_1.jpg?itok=_lYOjH3j',
                        alt: 'Singapore'
                    },
            
                    facts: {
                        items: [
                                {
                                    item: 'валютой является сингапурский доллар, курс составляет около 1,50 SGD за 1 доллар США;',
                                    id: '1'
                                },
                                {
                                    item: 'в переводе «Сингапур» означает «город львов»;',
                                    id: '2'
                                },
                                {
                                    item: 'символом страны является орхидея;',
                                    id: '3'
                                },
                                {
                                    item: 'расположен Сингапур на острове, но де-юре в его состав входят ещё 63 мелких островка;',
                                    id: '4'
                                },
                                {
                                    item: 'порт страны может вместить до тысячи судов одновременно.',
                                    id: '5'
                                }
                            ],
                        image: facts,
                    },
            
                    accomodation: {
                        title: 'Размещение', 
                        items: [
                            {
                                title: 'Бюджетный класс', 
                                text: 'Начальная цена недорогих отелей в Сингапуре составляет около 10 долларов США за ночь. Большинство этих отелей предоставляют бесплатный завтрак и бесплатный Wi-Fi.',
                                id: '1',
                            },
                
                            {
                                title: 'Средний класс', 
                                text: 'В этой категории отели стоят около 80 долларов США за ночь. Как и в бюджетных, ожидайте бесплатный завтрак, Wi-Fi, мини-холодильники в номерах и хорошие комнаты отдыха.',
                                id: '2',
                            },
                
                            {
                                title: 'Высокий класс', 
                                text: 'Номера здесь стоят от 200 долларов США за ночь. Они поставляются с привилегиями категории, такими как бесплатные услуги шофера, тренажерные залы и бассейны.',
                                id: '3',
                            },
                        ]
                        
                    },
            
                    eating: {
                        title: 'Кухня',
                        text: 'Среди традиционных блюд страны можно отметить краб с чили (сладкое и соленое блюдо, приготовленное из морепродуктов), кайа тост – блюдо, получившее свое название от уникального домашнего варенья, которое используется в качестве намазки на поджаренный хлеб. Также популярным блюдом является лакса - рисовая лапша в кокосовом соусе карри с морепродуктами или другими вариантами белка, обычно очень острая.',
            
                        recomendations: {
                            title: 'Рекомендации ресторанов',
                            items: [
                                {
                                    name: 'YELLOW POT',
                                    adress: '83 Duxton Road, Singapore, 089540',
                                    image: {
                                        src: 'https://images.squarespace-cdn.com/content/v1/5be172e38f513032e447734b/1582782011014-JFZO9KXMF7JGKLOMO6KX/Singapore-Tours-Laksa.jpg',
                                        alt: 'laksa'
                                    },
                                    id: '1',
                                },
                                {
                                    name: 'ODETTE',
                                    adress: '1 St Andrew’s Rd, #01-04 National Gallery, Singapore 178957',
                                    image: {
                                        src: 'https://a.cdn-hotels.com/gdcs/production92/d736/004557ec-8065-43cc-89cb-908df2847371.jpg',
                                        alt: 'crab'
                                    },
                                    id: '2',
                                },
                                {
                                    name: 'BAR-A-THYM',
                                    adress: '18 Gemmill Lane, Singapore, 069255',
                                    image: {
                                        src: 'https://www.seriouseats.com/thmb/IBRR2FuX8N4SM_sQA088n_JDeFk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2012__07__20120724-singapore-hokkien-mee-81976555366c4af38fcad0f0fe2c0c60.jpg',
                                        alt: 'national dish'
                                    },
                                    id: '3',
                                }
                            ]
                        }
                    },
            
                    visits: {
                        title: 'Стоит посетить',
                        recomendations: [
                            {
                                destination: 'Букит-Тимах',
                                description: 'Скалолазание в старых карьерах Букит-Тимах. Есть почти 50 маршрутов, чтобы бросить вызов альпинисту.',
                                image: {
                                    src: 'https://media-whichmedia.s3.ap-southeast-1.amazonaws.com/media/large/9/3/9371d97a9a34.jpeg',
                                    alt: 'Bukit Timah'
                                },
                                id: 'Bukit Timah',
                                coordinates: [1.329971, 103.791680]
                            },
                            {
                                destination: 'Национальный музей Сингапура',
                                description: 'Будучи старейшим музеем Сингапура, он является центром истории и богатой культуры народа.',
                                image: {
                                    src: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/2016_Singapur%2C_Museum_Planning_Area%2C_Narodowe_Muzeum_Singapuru_%2802%29.jpg',
                                    alt: 'National museum'
                                },
                                id: 'National museum',
                                coordinates: [1.286298, 103.859297]
                            },
                            {
                                destination: 'Сады у залива',
                                description: 'Посетите хорошо спроектированный и безмятежный сад, чтобы насладиться тишиной вдали от городского шума.',
                                image: {
                                    src: 'https://img.veenaworld.com/wp-content/uploads/2021/09/Gardens-by-the-Bay-Singapore-Tickets-Location-and-Attractions-scaled.jpg',
                                    alt: 'Gardens by the Bay'
                                },
                                id: 'Gardens by the Bay',
                                coordinates: [1.281474, 103.863757]
                            }
                        ]
                    }
                },    
            },
            {
                id: 11,
                title: 'Индонезия',
                cover: {
                    src: 'https://www.atorus.ru/sites/default/files/styles/head_carousel/public/2022-11/%D0%98%D0%BD%D0%B4%D0%BE%D0%BD%D0%B5%D0%B7%D0%B8%D1%8F%2C%20%D0%91%D0%B0%D0%BB%D0%B8.%20%D0%A4%D0%BE%D1%82%D0%BE%20piqsels.com_.jpg.webp?itok=_mGqZ8hQ',
                    alt: 'Индонезия'
                },
                description: 'Индонезия', 

                info: {
                    description: 'Индонезия — это гораздо больше, чем очень популярный остров Бали. Фактически, в этой стране насчитывается более 17 000 островов, что на сегодняшний день является самым большим и разнообразным архипелагом на Земле. 246 миллионов человек говорят на более чем 500 языках и диалектах, поскольку острова простираются на 5200 км между материковой Азией и Австралией. Ожидайте найти все, что душе угодно в Индонезии, от пышных джунглей до эпических пляжей и целого подводного мира.',
            
                    image: {
                        src: 'https://media.istockphoto.com/id/675172642/photo/pura-ulun-danu-bratan-temple-in-bali.jpg?s=612x612&w=0&k=20&c=_MPdmDviIyhldqhf7t6s63C-bZbTGfNHMlJP9SIa8Y0=',
                        alt: 'Indonesia'
                    },
            
                    facts: {
                        items: [
                                {
                                    item: 'валютой является индонезийская рупия, курс составляет около 13 000 IDR за 1 долл. США;',
                                    id: '1'
                                },
                                {
                                    item: 'в Индонезии можно найти одни из лучших мест для дайвинга в мире;',
                                    id: '2'
                                },
                                {
                                    item: 'ислам — самая популярная религия в стране, почти 80% населения мусульмане;',
                                    id: '3'
                                },
                                {
                                    item: 'страна является одной из основных стран-производителей арахиса;',
                                    id: '4'
                                },
                                {
                                    item: 'одним из самых главных мест в Индонезии является Бали — остров, созданный вулканами.',
                                    id: '5'
                                }
                            ],
                        image: facts,
                    },
            
                    accomodation: {
                        title: 'Размещение', 
                        items: [
                            {
                                title: 'Бюджетный класс', 
                                text: 'Вы можете получить недорогие отели в Индонезии всего за 10 долларов США за ночь. Обычно в таких отелях есть бесплатный Wi-Fi и парковка.',
                                id: '1',
                            },
                
                            {
                                title: 'Средний класс', 
                                text: 'За 25 долларов США за ночь отели этой категории также вполне доступны. У них могут быть рестораны, бары, бесплатная парковка и бесплатный завтрак.',
                                id: '2',
                            },
                
                            {
                                title: 'Высокий класс', 
                                text: 'Роскошные отели и виллы — хорошие варианты в Индонезии. Они стоят около 200 долларов США за ночь и могут включать в себя бассейны, фитнес-центр и спа-центр.',
                                id: '3',
                            },
                        ]
                        
                    },
            
                    eating: {
                        title: 'Кухня',
                        text: 'Среди традиционных блюд страны можно отметить наси-горенг (местный вариант жареного риса), сиомай (рыбные клецки в индонезийском стиле), также баксо (мягкий суп с фрикадельками), баби гулинг - (жареная свинина) и другие.',
            
                        recomendations: {
                            title: 'Рекомендации ресторанов',
                            items: [
                                {
                                    name: 'Ku De Ta',
                                    adress: 'Jl. Kayu Aya No.9, Seminyak, Kuta, Kabupaten Badung, Bali 80361',
                                    image: {
                                        src: 'https://pacificpotluck.com/wp-content/uploads/2021/02/indonesian-fried-rice-nasi-goreng-scaled.jpg',
                                        alt: 'nasi goreng'
                                    },
                                    id: '1',
                                },
                                {
                                    name: 'Locavore',
                                    adress: 'Jalan Dewi Sita, Ubud 80571',
                                    image: {
                                        src: 'https://keasberry.com/site2019/wp-content/uploads/2021/10/Indonesian_Trader_Joes_Siomay_Bandung-1300x650.jpg',
                                        alt: 'siomay'
                                    },
                                    id: '2',
                                },
                                {
                                    name: 'Mozaic',
                                    adress: 'Jl. Raya Sanggingan, Kedewatan, Kecamatan Ubud, Kabupaten Gianyar, Bali 80571',
                                    image: {
                                        src: 'https://awsimages.detik.net.id/community/media/visual/2019/08/12/dca21bf3-923c-486f-bc2e-a3dcd759b1df.jpeg?w=600&q=90',
                                        alt: 'bakso'
                                    },
                                    id: '3',
                                }
                            ]
                        }
                    },
            
                    visits: {
                        title: 'Стоит посетить',
                        recomendations: [
                            {
                                destination: 'Бали',
                                description: 'Остров, облик которого формируют вулканы, поросшие лесом, заливные рисовые поля, пляжи и коралловые рифы.',
                                image: {
                                    src: 'https://www.theknot.com/tk-media/images/0108e30b-f23f-4d5b-bacb-c13df8215c94~rs_768.h',
                                    alt: 'Bali'
                                },
                                id: 'Bali',
                                coordinates: [-8.682311, 115.219275]
                            },
                            {
                                destination: 'Ява',
                                description: 'Покрытый вулканами остров между Суматрой и Бали, географический и экономический центр Индонезии, где проживает больше половины населения страны.',
                                image: {
                                    src: 'https://planetofhotels.com/guide/sites/default/files/styles/paragraph__live_banner__lb_image__1880bp/public/live_banner/East-Java%20.jpg',
                                    alt: 'Java'
                                },
                                id: 'Java',
                                coordinates: [-7.298939, 109.942481]
                            },
                            {
                                destination: 'Джакарта',
                                description: 'Многомиллионная столица самого большого мусульманского государства в мире. Здесь цепкая, горластая азиатская уличная жизнь бьется в подножия сверкающих небоскребов и торговых центров, а северный район Кота все еще хранит ускользающий колониальный шарм.',
                                image: {
                                    src: 'https://content.r9cdn.net/rimg/dimg/1b/61/ad879e55-city-22380-17ea1cf2107.jpg?width=1200&height=630&xhint=1472&yhint=1268&crop=true',
                                    alt: 'Jakarta'
                                },
                                id: 'Jakarta',
                                coordinates: [-6.175391, 106.826252]
                            }
                        ]
                    }
                },
            },
            {
                id: 12,
                title: 'Вьетнам',
                cover: {
                    src: 'https://kuku.travel/wp-content/uploads/2017/08/%D0%92%D1%8C%D0%B5%D1%82%D0%BD%D0%B0%D0%BC-%D0%B3%D0%B5%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F.jpg',
                    alt: 'Вьетнам',
                }, 
                description: 'Вьетнам',

                info: {
                    description: 'Во Вьетнаме есть несколько удивительных мест, которые стоит увидеть. От великих природных чудес до фантастических магазинов, горных приключений и леденящей душу пляжной жизни, Вьетнаму есть что предложить каждому. Как только вы преодолеете агрессивный характер уличных зазывал, это может стать замечательным и насыщенным путешествием. Люди скоро покорят ваши сердца, и он станет одним из ваших любимых направлений для путешествий',
            
                    image: {
                        src: 'https://izitour.com/media/blog/vietnam-in-november.jpg',
                        alt: 'Vietnam'
                    },
            
                    facts: {
                        items: [
                                {
                                    item: 'валютой является вьетнамский донг, курс около 2000 донгов за 1 долл. США;',
                                    id: '1'
                                },
                                {
                                    item: 'страна занимает второе место в мире по потреблению риса на душу населения;',
                                    id: '2'
                                },
                                {
                                    item: 'вьетнамские джунгли — чрезвычайно опасное место;',
                                    id: '3'
                                },
                                {
                                    item: 'вьетнамцы не любят загорать, ценится светлая кожа;',
                                    id: '4'
                                },
                                {
                                    item: 'в стране одно из самых дешевых сортов пива в мире — стакан bia hoi всего 0,16 долл. США;',
                                    id: '5'
                                }
                            ],
                        image: facts,
                    },
            
                    accomodation: {
                        title: 'Размещение', 
                        items: [
                            {
                                title: 'Бюджетный класс', 
                                text: 'Вам придется потратить в среднем около 20 долларов, чтобы остаться во Вьетнаме с ограниченным бюджетом. Самая дешевая форма проживания во Вьетнаме — это матрас в общежитии, где вы платите за матрас и пользуетесь обычными удобствами.',
                                id: '1',
                            },
                
                            {
                                title: 'Средний класс', 
                                text: 'Вы потратите около 40 долларов, чтобы найти комнату в этом диапазоне. В нем будут все основные удобства, такие как кондиционер, горячая вода и многое другое.',
                                id: '2',
                            },
                
                            {
                                title: 'Высокий класс', 
                                text: 'Если вы ищете классное жилье, вам может потребоваться около 75–100 долларов за ночь. Это включает в себя ресторан, фитнес-центр и бассейн.',
                                id: '3',
                            },
                        ]
                        
                    },
            
                    eating: {
                        title: 'Кухня',
                        text: 'Среди традиционных блюд страны можно отметить фо-бо (суп), ча-ка (рыба на гриле). Также национальными блюдами ялвляются као лау, которое готовят из рисовой лапши, свинины и зелени, и рау муонг (жареный водяной шпинат).',
            
                        recomendations: {
                            title: 'Рекомендации ресторанов',
                            items: [
                                {
                                    name: 'Cuc Gach Quan',
                                    adress: '10 Đặng Tất, Tân Định, Quận 1, Hồ Chí Minh',
                                    image: {
                                        src: 'https://volshebnaya-eda.ru/wp-content/uploads/2019/02/sup-fo-bo-12-810x540.jpg',
                                        alt: 'pho bo'
                                    },
                                    id: '1',
                                },
                                {
                                    name: 'Au Parc',
                                    adress: '23 Hàn Thuyên, Bến Nghé, Quận 1, Hồ Chí Minh 700000',
                                    image: {
                                        src: 'https://cdnimgru.vietnamplus.vn/t870/uploaded/ywnia/2020_09_19/5_1.jpg',
                                        alt: 'cha ca'
                                    },
                                    id: '2',
                                },
                                {
                                    name: 'SH Garden',
                                    adress: '98 Nguyễn Huệ, Bến Nghé, Quận 1, Hồ Chí Minh',
                                    image: {
                                        src: 'https://media.istockphoto.com/id/653807990/photo/rau-muong-or-boiled-vietnamese-morning-glory-vegetables-on-dish.jpg?s=612x612&w=0&k=20&c=Q8vmsLsA3W5odAkBi2c8uWMrcgUk_6XW_JWLQzLBpFQ=',
                                        alt: 'rau muong'
                                    },
                                    id: '3',
                                }
                            ]
                        }
                    },
            
                    visits: {
                        title: 'Стоит посетить',
                        recomendations: [
                            {
                                destination: 'Тайнинь',
                                description: 'Посетите церковь в Тайнинь. Тайнинь - это оживленный город в дельте Меконга, в котором расположены одни из самых красивых церквей и соборов в стране.',
                                image: {
                                    src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/8b/e8/53/external.jpg?w=1200&h=-1&s=1',
                                    alt: 'Tay Ninh'
                                },
                                id: 'Tay Ninh',
                                coordinates: [22.997766, 120.200837]
                            },
                            {
                                destination: 'Халонг',
                                description: 'Посетите бухту Халонг, которая расположена примерно в 165 км к востоку от Ханоя в Тонкинском заливе.',
                                image: {
                                    src: 'https://lp-cms-production.imgix.net/features/2019/04/HalongBay-aa0f7e71a1db.jpg?auto=compress&fit=crop&format=auto&q=50&w=1200&h=800',
                                    alt: 'Halong Bay'
                                },
                                id: 'Halong Bay',
                                coordinates: [20.965133, 107.047408]
                            },
                            {
                                destination: 'Каттьен',
                                description: 'Исследуйте национальный парк Каттьен. Национальный парк Каттьен площадью около 720 км² является сокровищницей дикой природы и домом для многих исчезающих видов.',
                                image: {
                                    src: 'https://www.vietvisiontravel.com/wp-content/uploads/2018/10/Cat-Tien-National-Park-in-Vietnam.jpg',
                                    alt: 'Kat Tien'
                                },
                                id: 'Kat Tien',
                                coordinates: [11.445056, 107.285040]
                            }
                        ]
                    }
                },    
            },
        ]     
    },
]