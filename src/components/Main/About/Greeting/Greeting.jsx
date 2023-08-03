import React from 'react';
import ButtonOpenDetailes from '../../ButtonOpenDetails/ButtonOpenDetailes'
import PhotoGallery from '../../PhotoGallery/PhotoGallery';

function Greeting(props) {
    return (
        <div className="greeting">
            <div className="greeting_cover">
                <div className="greeting_heading">
                    <h1>Привет! Я Нина!</h1>
                    <h2>Это мой мир путешествий и открытий!</h2>
                </div>
                <img className="greeting_image" alt="girl" />
            </div>
            

            <div className="greeting_description">
                <div className="greeting_description_text">
                    <h2>Обо мне</h2>
                    <p className="greeting_description_text_detailed">
                        Я обычная девушка из Сибири, которая жила свою обычную жизнь. Но мне всегда хотелось узнавать этот мир и наполнить свою жизню путешествиями и приключениями. Поэтому несколько лет назад я решилась на кардинальные изменения и поехала в свое первое одиночное путешествие! В настоящее время я уже побывала более, чем в 20 странах! И теперь хочу делиться своими открытиями и советами из путешествий!
                    </p>
                    <ButtonOpenDetailes/>
                </div>
                <img className="greeting_description_image" src="https://i.etsystatic.com/23325853/r/il/d8332c/2595241673/il_340x270.2595241673_31lr.jpg" alt="myPhoto" />               
            </div>

            <div className='photoGallery'>
                <h3 className="photoGallery_heading">Мои последние поездки</h3>
                <PhotoGallery />
            </div> 
        </div>
    );
}

export default Greeting;