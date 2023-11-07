import React, { useEffect, useState, useRef } from 'react';
import styles from './videos.module.scss'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import ReactPlayer from 'react-player/youtube'
import { Popover, notification, Popconfirm, Button, Card, Collapse } from 'antd';
import { getVideosThunk, deleteVideosThunk } from '../../store/actions/videosActions'
import { getHelpersThunk } from '../../store/actions/helpersActions'
import ButtonLink from '../../components/ButtonLink/ButtonLink'
import Helper from '../../components/Helper/Helper'
import ModalWindow from '../../components/ModalWindow/ModalWindow'

import { sendVideoForEditAC } from '../../store/actions/formVideoActions'
const { Meta } = Card;

function Videos() {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getVideosThunk())
        dispatch(getHelpersThunk())
    }, [dispatch])

    const videos = useSelector((store) => store.videosStore);
    const helpers = useSelector((store) => store.helpersStore);
    const destinations = useSelector((store) => store.mainStore);
    const [ cardId, setCardId ] = useState(null);
    const editOption = useRef(true)

    function confirm(id) {
        dispatch(deleteVideosThunk({
            id: +id
        }))

        notification.open({
            message: 'Отлично!',
            description: 'Вы успешно удалили видеокарточу'
        })
    }

    function findCountry(title, index, id) {
        const currentWorldRegion = destinations?.find((region) => region.countries?.find((el) => el.title === title))
        const currentCountry = currentWorldRegion?.countries?.find((el) => el.title === title) 

        return videos.videosInfo[index].title === currentCountry?.title && (
            <ButtonLink onClick={() => toTravelling(id)} text='В путешествие' />
        )   
    }

    function toTravelling(id) {
        const currentWorldRegionID = destinations?.find((item) => item.countries?.find((el) => el.id === +id))
        navigate(`/world-regions/countries/${currentWorldRegionID.id}/country-information/${id}`)
    }

    function chooseCardForPopup(id) {
        setCardId(id)
    }

    function stopEvent(event) {
        event.stopPropagation()
    }

    function handlerEdit(id) {
        const currentVideocard = videos.videosInfo?.find((el) => el.id === +id)
        
        dispatch(sendVideoForEditAC({
            id: currentVideocard.id,
            country: currentVideocard.title,
            image: currentVideocard.cover.src,
            description: currentVideocard.cover.alt,
            records: currentVideocard.records.map((el) => {
                return {
                        id: el.key,
                        city: el.city,
                        videoUrl: el.videoUrl,
                        }
            })
        }))
    }

    return (
        <section className={styles.wrapper}>
            <div className={styles.button}  >
                <ModalWindow 
                    text='Добавить' 
                    okText='Save' 
                    title='Добавить новое место' 
                    />
            </div>
            <h2 className={styles.heading}>{videos.heading}</h2>
            <p className={styles.description}>{videos.description}</p>

            <div className={styles.videos}>
                {videos?.videosInfo?.map((el, index) => (
            
                        <Popover
                            key={el.id}
                            trigger="click"
                            content={(
                                <div className={styles.popover} onClick={() => setCardId(null)}>

                                    <ModalWindow 
                                        handler={() => handlerEdit(el.id)} 
                                        text='Edit' 
                                        okText='Save' 
                                        title={`Редактировать страну ${el.title}`} 
                                        editOption={editOption.current}
                                        
                                        />
                                        
                                    <Popconfirm
                                        description={`Вы действительно хотите удалить ${el.title}?`} 
                                        onConfirm={() => confirm(el.id)}
                                        okText="Да"
                                        cancelText="Нет"
                                    >
                                        <Button size='large'>Delete</Button>
                                    </Popconfirm>
                                
                                </div>
                            )}
                            open={el?.id === cardId}
                            onOpenChange={() => setCardId(null)}
                        >

                            <Card
                                key={el.id}
                                hoverable
                                className={styles.video}
                                cover={<img alt={el?.cover?.alt} src={el?.cover?.src} className={styles.video__image} />}
                                onClick={() => chooseCardForPopup(el.id)}
                            >

                                <div className={styles.video__heading}>
                                    <Meta className={styles.video__title} title={el?.title} />
                                    {
                                        findCountry(el?.title, index, el.id)
                                    }

                                </div>

                                <div onClick={(event) => stopEvent(event)}>
                                    <Collapse
                                        accordion
                                        items={el.records?.map((el) => {
                                            return {
                                                key: el.key,
                                                label: el.city,
                                                children: <ReactPlayer
                                                                url={el.videoUrl} 
                                                                width='100%'
                                                                height='100%'
                                                                controls={true}
                                                            />,
                                            }
                                        })}
                                    />
                                </div>

                                
                                
                            </Card>
                        </Popover>
                )
                )}
            </div>

            <div className={styles.helper}>
                <Helper src={helpers.videos?.src} text={helpers.videos?.text} link={helpers.videos?.link} />
            </div>
        </section>
    );
}

export default Videos;


// return {
//     key: el.key,
//     label: el.key,
//     children: <ReactPlayer
//                 url={el.videoUrl} 
//                 width='100%'
//                 height='100%'
//                 config={{
//                     youtube: {
//                     playerVars: { showinfo: 1 },
//                     },
//                 }}
//                 />,
// }
// }