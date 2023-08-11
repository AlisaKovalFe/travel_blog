import React from 'react';
import styles from './countriesInformayion.module.scss'
import { countriesInfo } from '../../data/countriesInfo'


//пробросила в компонент данные по ключу Италия, так как не знаю пока как корректно выводить одну страну на конкретный запрос (данные по всем странам в data)
function CountryInformation(props) {
    return (
        <article className={styles.wrapper}>

            <section className={`${styles.segment} ${styles.segment_position}`}>
                <div className={styles.intro}>
                    <h2 className={styles.intro__heading}>{countriesInfo.italy.title}</h2>
                    <p className={styles.intro__text}>{countriesInfo.italy.description}</p>
                </div>                
                <img className={styles.segment__imageCover} src={countriesInfo.italy.image.src} alt={countriesInfo.italy.image.alt}  />
            </section>

            <section className={`${styles.segment} ${styles.segment_position}`}>
                <img className={styles.segment__imageFacts} src={countriesInfo.italy.facts.image.src} alt={countriesInfo.italy.facts.image.src} />

                <div>
                    <h3 className={styles.segment__heading}>Факты о стране</h3>
                    <ul>
                        {
                            countriesInfo.italy.facts.items.map((el) => (
                                <li key={el.id}>{el.item}</li>
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
                            <p className={styles.recomendations__text}>{el.text}</p>
                        </div>
                    ))
                }                
            </section>

            <section className={styles.segment}>
                <h3 className={styles.segment__heading}>{countriesInfo.italy.eating.title}</h3>
                <p>{countriesInfo.italy.eating.text}</p>

                <section className={`${styles.segment__recomendations} ${styles.recomendations}`}>
                    <h4 className={`${styles.recomendations__heading} ${styles.recomendations__heading_position}`}>{countriesInfo.italy.eating.recomendations.title}</h4>

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
                </section>
            </section>

            <section className={styles.segment}>
                <h3 className={styles.segment__heading}>{countriesInfo.italy.visits.title}</h3> 
                                    
                {
                    countriesInfo.italy.visits.recomendations.map((el, index) => (
                        <div key={el.id} className={`${styles.segment__recomendations} ${styles.recomendations} ${styles.recomendations_position}`}>
                                <div className={styles.recomendations__destination}>
                                    <h4 className={styles.recomendations__heading}>{el.destination}</h4>
                                    <p className={styles.recomendations__text}>{el.description}</p>
                                </div>     

                                <div className={`${styles.recomendations__images} ${styles.images}`}>
                                    {
                                        index === countriesInfo.italy.visits.recomendations.length - 1 ? 
                                            (
                                            <img className={`${styles.images__image} ${styles.images__image_big}`} src={el.image.src} alt={el.image.alt} />
                                            ) : index === countriesInfo.italy.visits.recomendations.length - 2 ? (
                                                <img className={`${styles.images__image} ${styles.images__image_normal}`} src={el.image.src} alt={el.image.alt} />
                                            ) : (
                                                <img className={`${styles.images__image} ${styles.images__image_small}`} src={el.image.src} alt={el.image.alt} />
                                            )
                                    }     
                                </div>                
                        </div>
                    ))
                }               
            </section>
        </article>
    );
}

export default CountryInformation;