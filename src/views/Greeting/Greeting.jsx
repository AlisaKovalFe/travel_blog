import React from 'react';
import styles from './greeting.module.scss'
import ButtonLink from '../../components/ButtonLink/ButtonLink'
import PhotoGallery from '../../components/PhotoGallery/PhotoGallery';

function Greeting(props) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.cover}>
                <div className={styles.cover__heading}>
                    <h1>Привет! Я Нина!</h1>
                    <h2>Это мой мир путешествий и открытий!</h2>
                </div>
                <img className={styles.cover__image} alt="girl" src="/images/girl.png"/>
            </div>
            

            <div className={styles.description}>
                <div className={styles.description__text}>
                    <h2>Обо мне</h2>
                    <p>
                        Я обычная девушка из Сибири, которая жила свою обычную жизнь. Но мне всегда хотелось узнавать этот мир и наполнить свою жизню путешествиями и приключениями. Поэтому несколько лет назад я решилась на кардинальные изменения и поехала в свое первое одиночное путешествие! В настоящее время я уже побывала более, чем в 20 странах! И теперь хочу делиться своими открытиями и советами из путешествий!
                    </p>
                    <ButtonLink/>
                </div>
                <img className={styles.description__image} src="https://i.etsystatic.com/23325853/r/il/d8332c/2595241673/il_340x270.2595241673_31lr.jpg" alt="myPhoto" />               
            </div>

            <div className={styles.photoGallery}>
                <h2 className={styles.photoGallery__heading}>Мои последние поездки</h2>
                <PhotoGallery />
            </div> 
        </div>
    );
}

export default Greeting;