import React from 'react';
import styles from './countriesInformayion.module.scss'
import { countriesInfo } from '../../data/countriesInfo'

function CountryInformation(props) {
    return (
        <article className={styles.wrapper}>

            <section className={`${styles.segment} ${styles.segment_position}`}>
                <div className={styles.intro}>
                    <h2 className={styles.intro__heading}>{countriesInfo.italy.title}</h2>
                    <p className={styles.intro__text}>{countriesInfo.italy.description}</p>
                </div>
                
                <img className={styles.segment__image} src={countriesInfo.italy.image.src} alt={countriesInfo.italy.image.alt}  />
            </section>

            <section className={`${styles.segment} ${styles.segment_position}`}>
                <img className={`${styles.segment__image} ${styles.segment__image_facts}`} src={countriesInfo.italy.facts.image.src} alt={countriesInfo.italy.facts.image.src} />
                <div>
                    <h3 className={styles.segment__heading}>Факты о стране</h3>
                    <ul>
                        {
                            countriesInfo.italy.facts.items.map((el) => (
                                <li >{el}</li>
                            ))
                        }
                    </ul>
                </div>
            </section>

            <section className={styles.segment}>
                <h3 className={styles.segment__heading}>{countriesInfo.italy.accomodation.title}</h3>
                {
                    countriesInfo.italy.accomodation.items.map((el) => (
                        <div key={el.id} className={`${styles.segment__recomendations} ${styles.recomendations}`}>
                            <h4 className={styles.recomendations__heading}>{el.title}</h4>
                            <p>{el.text}</p>
                        </div>
                    ))
                }                
            </section>

            <section className={styles.segment}>
                <h3 className={styles.segment__heading}>{countriesInfo.italy.eating.title}</h3>
                <p>{countriesInfo.italy.eating.text}</p>

                <div className={`${styles.segment__recomendations} ${styles.recomendations}`}>
                    <h4>{countriesInfo.italy.eating.recomendations.title}</h4>
                    {
                        countriesInfo.italy.eating.recomendations.items.map((el) => (
                            <div className={`${styles.recomendations__recomendation} ${styles.recomendation}`} key={el.id}>
                                <div>
                                    <h4>{el.name}</h4>
                                    <p className={styles.recomendation__text}>адрес: {el.adress}</p>
                                </div>
                                <img className={styles.recomendation__image} src={el.image.src} alt={el.image.alt} />
                            </div>
                        ))
                    }
                </div>
            </section>

            <section className={styles.segment}>
                <h3 className={styles.segment__heading}>{countriesInfo.italy.visits.title}</h3>

                <div className={`${styles.segment__destinations} ${styles.destinations}`}>
                    <ul>
                        {
                            countriesInfo.italy.visits.recomendations.map((el, index) => (
                                <li className={styles.destinations__destination}>
                                        <div className={styles.destinations__intro}>
                                            <h4>{el.destination}</h4>
                                            <p>{el.description}</p>
                                        </div>     

                                        <div>
                                            {
                                                index === countriesInfo.italy.visits.recomendations.length - 1 ? 
                                                    (
                                                    <img className={`${styles.destinations__image} ${styles.destinations__image_big}`} src={el.image.src} alt={el.image.alt} />
                                                    ) : index === countriesInfo.italy.visits.recomendations.length - 2 ? (
                                                        <img className={`${styles.destinations__image} ${styles.destinations__image_normal}`} src={el.image.src} alt={el.image.alt} />
                                                    ) : (
                                                        <img className={`${styles.destinations__image} ${styles.destinations__image_small}`} src={el.image.src} alt={el.image.alt} />
                                                    )
                                            }     
                                        </div>                
                                </li>
                            ))
                        }
                    </ul>

                </div>
                
            </section>
        </article>
    );
}

export default CountryInformation;