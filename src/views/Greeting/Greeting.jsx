import React from 'react';
import styles from './greeting.module.scss'
import { Link } from 'react-router-dom'
import ButtonLink from '../../components/ButtonLink/ButtonLink'
import PhotoGallery from '../../components/PhotoGallery/PhotoGallery';
import { photoGallery } from '../../data/photoGallery'
import { Typography } from 'antd';
const { Title, Paragraph } = Typography;

function Greeting(props) {
    return (
        <section className={styles.wrapper}>
            <section className={styles.cover}>
                <div className={styles.cover__title}>
                    <Title style={{color: '#f9f6f3'}} level={1}>Привет! Я Нина!</Title>
                    <Title style={{color: '#f9f6f3'}} level={2} >Это мой мир путешествий и открытий!</Title>
                </div>
                <img className={styles.cover__image} alt="girl" src="/images/girl.png"/>
            </section>            

            <section className={styles.description}>
                <div className={styles.description__about}>
                    <Title level={2}>Обо мне</Title>
                    <Paragraph className={styles.description__text} type="secondary">
                        Я обычная девушка из Сибири, которая жила свою обычную жизнь. Но мне всегда хотелось узнавать этот мир и наполнить свою жизню путешествиями и приключениями. Поэтому несколько лет назад я решилась на кардинальные изменения и поехала в свое первое одиночное путешествие! В настоящее время я уже побывала более, чем в 20 странах! И теперь хочу делиться своими открытиями и советами из путешествий!
                    </Paragraph>
                    <Link to='/about'>
                        <ButtonLink text='Подробнее'/>
                    </Link>
                    
                </div>
                <img className={styles.description__image} src="https://i.etsystatic.com/23325853/r/il/d8332c/2595241673/il_340x270.2595241673_31lr.jpg" alt="myPhoto" />               
            </section>

            <section className={styles.photoGallery}>
                <Title level={2} className={styles.photoGallery__heading}>Мои последние поездки</Title>
                <PhotoGallery photoGallery={photoGallery}/>
            </section> 
        </section>
    );
}

export default Greeting;