import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getVideosThunk, deleteVideoAC } from '../../store/actions/videosActions'
import styles from './videos.module.scss'
import Helper from '../../components/Helper/Helper'
import ModalWindow from '../../components/ModalWindow/ModalWindow'
import { Card, Collapse } from 'antd';
import { getHelpersThunk } from '../../store/actions/helpersActions'
import ButtonLink from '../../components/ButtonLink/ButtonLink'
import { useNavigate } from 'react-router-dom'
import { Popover } from 'antd';
const { Meta } = Card;

function Videos() {
    const dispatch = useDispatch();
    const { videos } = useSelector((store) => store.videosStore);
    const { helpers } = useSelector((store) => store.helpersStore);
    const { destinations } = useSelector((store) => store.mainStore);
    const [ open, setOpen ] = useState(false);
    const navigate = useNavigate()
    console.log(videos)

    useEffect(() => {   
        dispatch(getVideosThunk())
        dispatch(getHelpersThunk())
    }, [])  

    let videosCountries = []
    let destinationCounty = []
    videos.videosInfo?.map((el) => videosCountries.push(el.title))
    destinations.map((el) => el.countries?.map((el) => destinationCounty.push(el.title)))

    const travelling = videosCountries.filter((el) => destinationCounty.includes(el))
    // const travelling = videos.videosInfo?.filter((el) => destinations.every((item) => item.countries?.includes(el.title)))
    
    function toTravelling(id) {
        const currentWorldRegionID = destinations?.find((item) => item.countries?.find((el) => el.id === +id))
        navigate(`/world-regions/countries/${currentWorldRegionID.id}/country-information/${id}`)
    }

    function handlerEdit(id) {
        const currentVideocard = videos.videosInfo?.find((el) => el.id === +id)
        console.log(currentVideocard)
        setOpen(false);
    }
      
    function handlerDelete(id) {
        dispatch(deleteVideoAC({
            id: id
        }))
    }
 

    return (
        <section className={styles.wrapper}>
            <div className={styles.button}  >
                <ModalWindow text='Добавить' okText='Save' title='Добавить новое место'/>
            </div>
            <h2 className={styles.heading}>{videos.heading}</h2>
            <p className={styles.description}>{videos.description}</p>     

            <div className={styles.videos}>
                {videos.videosInfo?.map((el) => (
                    <Popover 
                        key={el.id} 
                        trigger="click"

                        //открываются сразу у всех эл-в, а не у того, который нужен
                        content={(
                            <div className={styles.popover} >
                                <ModalWindow text='Edit' okText='Save' title='Редактировать ...' onClick={() => handlerEdit(el.id)}/>
                                <ButtonLink text='Delete' onClick={() => handlerDelete(el.id)}/>
                            </div>
                        )} 
                        open={open}
                        onOpenChange={(newOpen) => setOpen(newOpen)}
                        >                      

                        <Card
                            key={el.id}
                            hoverable
                            className={styles.video}                 
                            cover={<img alt={el.cover?.alt} src={el.cover?.src} className={styles.video__image}/>}
                        >
                            
                            <div className={styles.video__heading}>
                                <Meta className={styles.video__title} title={el.title}  /> 
                                {
                                    travelling.includes(el.title) ? (
                                        <ButtonLink onClick={() => toTravelling(el.id)} text='В путешествие'/>
                                    ) : ''
                                }
                                
                            </div>
                            
                            <Collapse 
                                items={el.records.map((el) => {
                                    return {
                                        key: el.key,
                                        label: el.label,
                                        children: <iframe credentialless='true' referrerPolicy='origin-when-cross-origin' className="video_styles" src={el?.src} title={el?.title} frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                        // <video src={el?.src} crossOrigin='use-credentials'></video>
                                        // <iframe credentialless='true' referrerPolicy='origin-when-cross-origin' className="video_styles" src={el?.src} title={el?.title} frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

                                        // https://youtu.be/Muz720S9uVw
                                        // <iframe width="853" height="480" src="https://www.youtube.com/embed/Muz720S9uVw" title="Пьемонт, горы, фиат и нутелла. Италия" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                        // https://www.youtube.com/watch?v=Muz720S9uVw&t=5s
                                    }
                            })} 
                                
                            />
                        </Card>
                    </Popover>
                    )
                )}           
            </div>

            <div className={styles.helper}>
                <Helper src={helpers.videos?.src} text={helpers.videos?.text} link={helpers.videos?.link}/>
            </div>
        </section>
    );
}

export default Videos;