import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getVideosThunk, deleteVideosThunk } from '../../store/actions/videosActions'
import styles from './videos.module.scss'
import Helper from '../../components/Helper/Helper'
import ModalWindow from '../../components/ModalWindow/ModalWindow'
import { Card, Collapse } from 'antd';
import { getHelpersThunk } from '../../store/actions/helpersActions'
import ButtonLink from '../../components/ButtonLink/ButtonLink'
import { useNavigate } from 'react-router-dom'
import { Popover, notification } from 'antd';
const { Meta } = Card;

function Videos() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getVideosThunk())
        dispatch(getHelpersThunk())
    }, [])

    const { videos } = useSelector((store) => store.videosStore);
    const { helpers } = useSelector((store) => store.helpersStore);
    const { destinations } = useSelector((store) => store.mainStore);
    const [open, setOpen] = useState(false);
    const [cardId, setCardId] = useState(null);
    const navigate = useNavigate()

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
        console.log(cardId, id)
        setCardId(id)
    }

    function handlerEdit(id) {
        const currentVideocard = videos.videosInfo?.find((el) => el.id === +id)
        console.log(currentVideocard)
        setOpen(false);
    }

    function handlerDelete(id) {
        dispatch(deleteVideosThunk({
            id: +id
        }))

        //это надо делать при респонс 200, но не писать же мне это в actions, где находися респонс
        notification.open({
            message: 'Отлично!',
            description: 'Вы успешно удалили видеокарточу'
        })
    }


    return (
        <section className={styles.wrapper}>
            <div className={styles.button}  >
                <ModalWindow text='Добавить' okText='Save' title='Добавить новое место' />
            </div>
            <h2 className={styles.heading}>{videos.heading}</h2>
            <p className={styles.description}>{videos.description}</p>

            <div className={styles.videos}>
                {videos?.videosInfo?.map((el, index) => (

                    el?.id === cardId ? (
                        <Popover
                            key={el.id}
                            trigger="click"
                            //сделала модалку в div, чтобы в компоненет модалка не добавлять онклик (иначе пришлось был локал стейты по открытию модалки и стягианию стран для селекта переносить на эту страницу)
                            content={(
                                <div className={styles.popover} >
                                    <div onClick={() => handlerEdit(el.id)}>
                                        <ModalWindow text='Edit' okText='Save' title={`Редактировать страну ${el.title}`} videoCardFromVideosView={el}/>
                                    </div>

                                    <ButtonLink text='Delete' onClick={() => handlerDelete(el.id)} />
                                </div>
                            )}
                            open={open}
                            onOpenChange={(newOpen) => setOpen(newOpen)}
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

                                <Collapse
                                    items={el.records?.map((el) => {
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
                    ) : (
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

                            <Collapse
                                items={el.records?.map((el) => {
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
                    )

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