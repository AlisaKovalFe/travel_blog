import React from 'react';
import styles from './about.module.scss'
import Helper from '../../components/Helper/Helper'
import { Typography } from 'antd';
const { Paragraph } = Typography;

function About() {
    return (     
        <section className={styles.wrapper}>
            <Helper src='/images/girl-with-blond-hair.svg' text='еще больше обо мне' link='https://vk.com/'/>

            <div className={`${styles.about} ${styles.about_positioned}`}>
                <div className={styles.about__segment}>
                    <Paragraph type="secondary" className={styles.about__text}>
                        Я начала менять свою жизнь в 2018 году. До этого у меня была жизнь обычной девчонки. Как и многих людей, меня учили, что нужно получить образование, устровиться на работу, выйти замуж, завести детей и жить долго и счастливо. <br/>
                        Но, проработав несколь лет по своей специальности, я поняла что не хочу гнаться за "правильным форматом жизни", поэтому выбрала свой путь счастья и гармонии, и начала открывать для себя увлекательный мир путешествий.
                    </Paragraph>
                    <img className={styles.imageMountains}  src="https://images.assetsdelivery.com/compings_v2/sonjachnyj/sonjachnyj1804/sonjachnyj180401760.jpg" alt="mountains" />  
                </div> 

                <div className={styles.about__segment}>
                    <img className={styles.imageLavender} src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/girl-in-lavender-field-cora-niele.jpg" alt="lavender" /> 
                    <img className={styles.imageMeadow} src="https://e0.pxfuel.com/wallpapers/939/835/desktop-wallpaper-alpine-landscape-houses-beatenberg-alps-hills-slope-grassland-meadow-beautiful-mountain-wildflowers-summer-switzerland-view.jpg" alt="meadow" /> 
                    <Paragraph type="secondary" className={`${styles.about__text} ${styles.about__text_position}`}>
                        В первый раз я отравилась в свое большое путешествие по Европе летом 2018 года. Я увидела Германию, Австрию, Италию, Испанию, Португалия. После того, как я посетила свои первые 5 европейских стран, я поняла, что хочу делиться подробностями и опытом своих путешествий.
                    </Paragraph>
                </div>
            </div>

            <div className={`${styles.about} ${styles.about_default}`}>
                <Paragraph type="secondary" className={styles.about__text}>
                    Несмотря, на все обстоятельства этого мира я смогла за эти неполные 5 лет посетить более 20 стран! Сейчас я уже побывала Индонезии, Индии, Китае, Таиланде, Америке и других странах, и я не собираюсь останавливаться!     
                </Paragraph>
                <img className={styles.imageRiceFields} src="https://c4.wallpaperflare.com/wallpaper/893/815/708/landscape-field-rice-paddy-wallpaper-preview.jpg" alt="ricefields" />   
            </div>
            
            <div className={`${styles.about} ${styles.about_default}`}>
                <Paragraph type="secondary" className={styles.about__text}>
                    Если бы кто-то еще тогда в начале 2018 года сказал мне, что я осмелюсь так рискнуть и поехать в большое одиночное путешествие, я бы не поверила. Однако я смогла и теперь с удовольствием делюсь информацией о путешествиях на этом веб-сайте!     
                </Paragraph>
                <img className={styles.imageGirl} src="https://img.freepik.com/premium-photo/happy-young-woman-enjoying-freedom-with-open-hands-mountain-carefree-happy-woman-breathing-enjoying-nature-view-mountain-cliff-outdoor-freedom-concept-journey-life_36928-381.jpg" alt="gitlwithopenhandes" />   
            </div>
        </section>                     
    );
}

export default About;