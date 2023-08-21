import React from 'react';
import styles from './countriesInformayion.module.scss'
import { destinations } from '../../data/destinations'
import { useParams } from 'react-router-dom';
import { Typography } from 'antd';
const { Paragraph, Title } = Typography;

function CountryInformation(props) {

    const { id } = useParams()
    const currentWorldRegion = destinations.find((item) => item.countries.find((el) => el.id === +id))
    const currentCountry = currentWorldRegion.countries.find((el) => el.id === +id)

    return (
            <article className={styles.wrapper}>
                <section className={`${styles.segment} ${styles.segment_position}`}>
                    <div className={styles.intro}>
                        <Title level={2} className={styles.intro__heading}>{currentCountry.title}</Title>
                        <Paragraph type="secondary" className={styles.intro__text}>{currentCountry.info.description}</Paragraph>
                    </div>                
                    <img className={styles.imageCover} src={currentCountry.info.image.src} alt={currentCountry.info.image.alt}  />
                </section>

                <section className={`${styles.segment} ${styles.segment_position}`}>
                    <img className={styles.imageFacts} src={currentCountry.info.facts.image.src} alt={currentCountry.info.facts.image.src} />

                    <div>
                        <Title level={3} className={styles.segment__heading}>Факты о стране</Title>
                        <Paragraph type="secondary">
                            <ul>
                                {
                                    currentCountry.info.facts.items.map((el) => (
                                        <li key={el.id}>{el.item}</li>
                                    ))
                                }
                            </ul>
                        </Paragraph>
                        
                    </div>
                </section>

                <section className={styles.segment}>
                    <Title level={3} className={styles.segment__heading}>{currentCountry.info.accomodation.title}</Title>
                    {
                        currentCountry.info.accomodation.items.map((el) => (
                            <div key={el.id} className={`${styles.segment__recomendations} ${styles.recomendations}`}>
                                <Title level={4} className={styles.recomendations__heading}>{el.title}</Title>
                                <Paragraph type="secondary" className={styles.recomendations__text}>{el.text}</Paragraph>
                            </div>
                        ))
                    }                
                </section>

                <section className={styles.segment}>
                    <Title level={3} className={styles.segment__heading}>{currentCountry.info.eating.title}</Title>
                    <Paragraph className={styles.segment__text} type="secondary" >{currentCountry.info.eating.text}</Paragraph>

                    <section className={`${styles.segment__recomendations} ${styles.recomendations}`}>
                        <Title level={4} className={`${styles.recomendations__heading} ${styles.recomendations__heading_position}`}>{currentCountry.info.eating.recomendations.title}</Title>

                        {
                            currentCountry.info.eating.recomendations.items.map((el) => (
                                <div className={`${styles.recomendations__recomendation} ${styles.recomendation}`} key={el.id}>
                                    <div>
                                        <Title level={4}>{el.name}</Title>
                                        <Paragraph type="secondary" className={styles.recomendation__text}>адрес: {el.adress}</Paragraph>
                                    </div>
                                    <img className={styles.recomendation__image} src={el.image.src} alt={el.image.alt} />
                                </div>
                            ))
                        }
                    </section>
                </section>

                <section className={styles.segment}>
                    <Title level={3} className={styles.segment__heading}>{currentCountry.info.visits.title}</Title> 
                                        
                    {
                        currentCountry.info.visits.recomendations.map((el, index) => (
                            <div key={el.id} className={`${styles.segment__recomendations} ${styles.recomendations} ${styles.recomendations_position}`}>
                                    <div className={styles.recomendations__destination}>
                                        <Title level={4} className={styles.recomendations__heading}>{el.destination}</Title>
                                        <Paragraph type="secondary" className={styles.recomendations__text}>{el.description}</Paragraph>
                                    </div>     

                                    <div className={styles.images}>
                                        {
                                            index === currentCountry.info.visits.recomendations.length - 1 ? 
                                                (
                                                <img className={`${styles.images__image} ${styles.images__image_big}`} src={el.image.src} alt={el.image.alt} />
                                                ) : index === currentCountry.info.visits.recomendations.length - 2 ? (
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