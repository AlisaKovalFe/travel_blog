import React, { useEffect } from 'react';
import styles from './greeting.module.scss'
import { Link } from 'react-router-dom'
import ButtonLink from '../../components/ButtonLink/ButtonLink'
import Helper from '../../components/Helper/Helper'
import Gallery from '../../components/Gallery/Gallery';
import { Typography } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { getGreetingThunk } from '../../store/actions/greeingActions'
import { getPhotoGalleryThunk } from '../../store/actions/photoGalleryActions'
import { getHelpersThunk } from '../../store/actions/helpersActions'

const { Title, Paragraph } = Typography;

function Greeting() {
    const dispatch = useDispatch();
    const greeting = useSelector((store) => store.greetingStore);
    const helpers = useSelector((store) => store.helpersStore);
    const photoGallery = useSelector((store) => store.photoGalleryStore);

    useEffect(() => {   
        dispatch(getGreetingThunk())
        dispatch(getPhotoGalleryThunk())
        dispatch(getHelpersThunk())
    }, [])

    return (
        <section className={styles.wrapper}>
            <section className={styles.cover}>
                <div className={styles.cover__title}>
                    <Title style={{color: '#f9f6f3'}} level={1}>{greeting.coverHeading}</Title>
                    <Title style={{color: '#f9f6f3'}} level={2} >{greeting.coverSubheading}</Title>
                </div>
                <img className={styles.cover__image} src={greeting.coverImage?.src} alt={greeting.coverImage?.alt}/>
            </section>            

            <section className={styles.description}>
                <div className={styles.description__about}>
                    <Title level={2}>{greeting.descriptionTitle}</Title>
                    <Paragraph className={styles.description__text} type="secondary">{greeting.description}</Paragraph>
                    <Link to='/about'>
                        <ButtonLink text='Подробнее' type="link"/>
                    </Link>
                </div>
                <img className={styles.description__image} src={greeting.descriptionImage?.src} alt={greeting.descriptionImage?.alt}/>               
            </section>

            <section className={styles.photoGallery}>
                <Title level={2} className={styles.photoGallery__heading}>{greeting.photoGalleryHeading}</Title>
                <Gallery gallery={photoGallery}/>
            </section> 

            <div className={styles.helper} >
                <Helper src={helpers.greeting?.src} text={helpers.greeting?.text} link={helpers.greeting?.link}/>
            </div>
        </section>
    );
}

export default Greeting;