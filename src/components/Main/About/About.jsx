import React from 'react';
import PhotoGallery from '../PhotoGallery/PhotoGallery'

function About(props) {
    return (
        <div className="about">
            <div className="about_greeting">
                <div className="about_greeting_heading">
                    <h1>Привет! Я Нина!</h1>
                    <h2>Это мой мир путешествий и открытий!</h2>
                </div>
                <img className="" alt="girl" />
            </div>
            <div className="about_description">
                <div className="about_description_text">
                    <h2>Обо мне</h2>
                    <p className="about_description_text_detailed">Я обычная девушка из Сибири, которая всегда интересовалась миром, жизнью и обычаями разных людей.<br/>
                    Как и многих людей, меня учили, что нужно получить образование, устровиться на работу, выйти замуж, завести детей и жить долго и счастливо. Но, проработав несколь лет по своей специальности, я поняла что не хочу гнаться за "правильным форматом жизни", поэтому выбрала свой путь счастья и гармонии, и начала открывать для себя этот увлекательный мир.
                    </p>
                    
                    <p className="about_description_text_detailed">В первый раз я отравилась в свое большое путешествие по Европе летом 2018 года. Я увидела Германию, Австрию, Италию, Испанию, Португалия. После того, как я посетила свои первые 5 европйеских стран, я поняла, что хочу делиться подробностями и опытом своих путешествий по Европе.
                    </p>
                    
                    <p className="about_description_text_detailed">Несмотря, на все обстоятельства этого мира я смогла за эти неполные 5 лет посетить более 20 стран! Сейчас я уже побывала Индонезии, Индии, Китае, Таиланде, Америке и других странах, и я не собираюсь останавливаться! </p>   
                    <p className="about_description_text_detailed">Если бы кто-то еще тогда в начале 2018 года сказал мне, что я осмелюсь так рискнуть и поехать в большое одиночное путешествие, я бы не поверила. Однако я смогла и теперь с удовольствием делюсь информацией о путешествиях на этом веб-сайте !</p>
                </div>
                <img className="about_description_image" src="https://i.etsystatic.com/23325853/r/il/d8332c/2595241673/il_340x270.2595241673_31lr.jpg" alt="myPhoto" />
                
            </div>
            <div className='photoGallery'>
                <h3 className="photoGallery_heading">Мои последние поездки</h3>
                <PhotoGallery />
            </div>           
        </div>
    );
}

export default About;