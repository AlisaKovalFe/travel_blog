import React, { useEffect } from 'react';
import styles from './about.module.scss'
import Helper from '../../components/Helper/Helper'
import { useSelector, useDispatch } from 'react-redux';
import { addAboutThunk } from '../../store/actions/aboutActions'
import Gallery from '../../components/Gallery/Gallery';
import { addHelpersThunk } from '../../store/actions/helpersActions'

function About() {
    const dispatch = useDispatch();
    const { about } = useSelector((store) => store.aboutStore);
    const { helpers } = useSelector((store) => store.helpersStore);

    useEffect(() => {   
        dispatch(addAboutThunk())
        dispatch(addHelpersThunk())
    }, [])

    return (     
        <section className={styles.wrapper}>
            <div className={styles.gallery}>
                <Gallery gallery={about} />   
            </div>
   
            <div className={styles.helper}>
                <Helper src={helpers.about?.src} text={helpers.about?.text} link={helpers.about?.link}/>
            </div>
        </section>                     
    );
}

export default About;