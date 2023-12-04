import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { Popover, notification, Popconfirm, Button, Card, Typography } from 'antd';
import dayjs from 'dayjs'
import styles from './videos.module.scss'
import { getVideosThunk, deleteVideosThunk } from '../../store/actions/videosActions'
import { getHelpersThunk } from '../../store/actions/helpersActions'
import ButtonLink from '../../components/ButtonLink/ButtonLink'
import SearchPanel from '../../components/SearchPanel/SearchPanel'
import Helper from '../../components/Helper/Helper'
import ModalWindow from '../../components/ModalWindow/ModalWindow'
import VideoBlock from '../../components/VideoBlock/VideoBlock'
import CollapseVideos from '../../components/CollapseVideos/CollapseVideos'
import { sendVideoForEditAC } from '../../store/actions/formVideoActions'
import { getCountriesForSelectThunk } from '../../store/actions/countriesForSelectActions'

const { Meta } = Card;
const { Title } = Typography;

function Videos() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const videos = useSelector((store) => store.videosStore);
    const dataFromSearchPanel = useSelector((store) => store.dataFromSearchPanelStore)
    const helpers = useSelector((store) => store.helpersStore);
    const destinations = useSelector((store) => store.mainStore);
    const [ cardId, setCardId ] = useState(null);
    const editOption = useRef(true)
    const [ flag, setFlag ] = useState('default')

    useEffect(() => {
        dispatch(getCountriesForSelectThunk())
        dispatch(getVideosThunk())
        dispatch(getHelpersThunk())
        setFlag(dataFromSearchPanel.flag)
    }, [dispatch, dataFromSearchPanel.flag, dataFromSearchPanel.videoTitle])

    // Поиск по стране
    const videosFoundedByCountry = videos?.videosInfo?.find((el) => el.title === dataFromSearchPanel.title)

    // Поиск по городу и полному названию видео
    let filteredVideosByCityAndVideo = []

    videos?.videosInfo?.forEach((el) => {
        el.records.forEach((item) => {
            if (dataFromSearchPanel.flag === 'city' && (item?.city?.toLowerCase() === dataFromSearchPanel?.city?.toLowerCase())) {
                filteredVideosByCityAndVideo.push({...item, country: el.title, id: el.id})
            } 
            if (dataFromSearchPanel.flag === 'videoTitle' && (item?.title?.toLowerCase() === dataFromSearchPanel?.videoTitle?.toLowerCase())) {
                filteredVideosByCityAndVideo.push({...item, country: el.title, id: el.id})
            }
            return item
        })
    })

    // Динамический поиск по названию видео
    const query = dataFromSearchPanel?.videoTitle?.toLowerCase()
    let filteredVideos = []

    videos?.videosInfo?.forEach((el) => {
        el.records.forEach((item) => {
            item.title.split(' ').some((word) => {
            if (query && word.toLowerCase().startsWith(query)) {
                filteredVideos.push({...item, country: el.title, id: el.id})
            }
            return item
        })
    })})

    // Поиск по временному диапазону
    function findVideoByDates(item) {
        return item.dateStamp >= dataFromSearchPanel?.timeStamp?.[0] && item.dateStamp <= dataFromSearchPanel?.timeStamp?.[1]
    }

    let filterVideosByDate = []

    videos?.videosInfo?.forEach((el) => {
        el?.records?.forEach((item) => {
            if (findVideoByDates(item)) {
                filterVideosByDate.push(item)
            }
        })
    })


    function confirm(id) {
        dispatch(deleteVideosThunk({
            id: +id
        }))

        notification.open({
            message: 'Отлично!',
            description: 'Вы успешно удалили видеокарточу'
        })
    }

    function toTravelling(id) {
        const currentWorldRegionID = destinations?.find((item) => item.countries?.find((el) => el.id === +id))
        navigate(`/world-regions/countries/${currentWorldRegionID.id}/country-information/${id}`)
    }

    function findCountry(title, index, id) {
        const currentWorldRegion = destinations?.find((region) => region.countries?.find((el) => el.title === title))
        const currentCountry = currentWorldRegion?.countries?.find((el) => el.title === title)

        return videos.videosInfo[index].title === currentCountry?.title && (
            <ButtonLink onClick={() => toTravelling(id)} text='В путешествие' />
        )
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
                    title: el.title,
                    dateStamp: el.dateStamp
                }
            })
        }))
    }

    function sortArray(arr) {
        const copyArr = arr ? JSON.parse(JSON.stringify(arr)) : []
        return copyArr.sort((a, b) => b.dateStamp - a.dateStamp)
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

            <SearchPanel/>

            {/* Поиск по стране */}
            {
                flag === 'country' && videosFoundedByCountry && (
                    <div className={styles.collapseVideo}>
                        <div className={styles.videoHeading}>
                            <Title level={4}>Результаты поиска &quot;{videosFoundedByCountry.title}&quot;</Title>
                            <ButtonLink onClick={() => toTravelling(videosFoundedByCountry.id)} text='Перейти к профилю страны' />
                        </div>
                        
                        <CollapseVideos 
                            records={
                                    (dataFromSearchPanel?.timeStamp?.length > 0 && dataFromSearchPanel?.isRecentlyAdded) ? sortArray(videosFoundedByCountry?.records.filter((item) => findVideoByDates(item))) :
                                    dataFromSearchPanel?.isRecentlyAdded ? sortArray(videosFoundedByCountry.records) : 
                                    dataFromSearchPanel?.timeStamp?.length > 0 ? videosFoundedByCountry?.records.filter((item) => findVideoByDates(item)) :
                                    videosFoundedByCountry?.records} 
                        />
                    </div>
                ) 
            }

            {/* Поиск по городу и полному названию видео */}
            {
                (flag === 'city' || flag === 'videoTitle') && (
                    <VideoBlock 
                        videos={
                            (dataFromSearchPanel?.timeStamp?.length > 0 && dataFromSearchPanel?.isRecentlyAdded) ? sortArray(filteredVideosByCityAndVideo.filter((item) => findVideoByDates(item))) :
                            dataFromSearchPanel?.timeStamp?.length > 0 ? (filteredVideosByCityAndVideo.filter((item) => findVideoByDates(item))) :
                            dataFromSearchPanel?.isRecentlyAdded ? sortArray(filteredVideosByCityAndVideo) : 
                            filteredVideosByCityAndVideo} 
                        toTravelling={(id) => toTravelling(id)} 
                        text='Перейти к профилю страны' 
                        url={filteredVideosByCityAndVideo?.videoUrl}
                    />
                ) 
            }

            {/* Динамический поиск по названию видео */}
            {
                flag === 'videoTitle' && (
                    <VideoBlock 
                        videos={
                            (dataFromSearchPanel?.timeStamp?.length > 0 && dataFromSearchPanel?.isRecentlyAdded) ? sortArray(filteredVideos.filter((item) => findVideoByDates(item))) :
                            dataFromSearchPanel?.timeStamp?.length > 0 ? (filteredVideos.filter((item) => findVideoByDates(item))) :
                            dataFromSearchPanel?.isRecentlyAdded ? sortArray(filteredVideos) : 
                            filteredVideos} 
                        toTravelling={() => toTravelling(filteredVideos?.id)} 
                        title={filteredVideos?.find((el) => videos?.videosInfo?.map((item) => item?.title === el?.country))?.country} 
                        text='Перейти к профилю страны' 
                        url={filteredVideos?.videoUrl}
                    />
                ) 
            }

            {/* Поиск по временному диапазону */}
            {
                (flag === 'timeStamp' && filterVideosByDate.length > 0) && (
                        <div>
                            <div className={styles.videoHeading}>
                                <Title level={4}>Результаты поиска видео, добавленных в указанный период с {dayjs.unix(dataFromSearchPanel?.timeStamp[0]).format('YYYY-MM-DD')} по {dayjs.unix(dataFromSearchPanel?.timeStamp[1]).format('YYYY-MM-DD')}</Title>
                            </div>
                            
                            <CollapseVideos records={dataFromSearchPanel?.isRecentlyAdded ? sortArray(filterVideosByDate) : 
                            filterVideosByDate}/>
                    </div>
                    
                ) 
            }

            {/* Отрисовка при отсутствии данных по запросу */}
            {
                ((flag === 'country' && !videosFoundedByCountry) || (flag === 'city' && filteredVideosByCityAndVideo.length === 0) || (flag === 'videoTitle' && filteredVideos.length === 0) || (flag === 'timeStamp' &&  filterVideosByDate.length === 0 )) && (
                    <Title level={4}>Видео по запросу отсутствуют</Title>
                ) 
            }

            {/* Дефолтное отображение видеокарточек при входе на страницу и при динамическом очищение инпута с названием видео */}
            {
                flag === 'default' && (
                    <div className={styles.videos}>
                        {videos?.videosInfo?.map((el, index) => (

                            <Popover
                                key={el.id}
                                trigger="click"
                                content={(
                                    <div
                                        className={styles.popover}
                                    >

                                        <ModalWindow
                                            handler={() => {
                                                handlerEdit(el.id)
                                                setCardId(null)
                                            }}
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
                                            <Button size='large' onClick={() => setCardId(null)}>Delete</Button>
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
                                        <CollapseVideos records={el?.records}/>
                                    </div>
                                </Card>
                            </Popover>
                        )
                        )}
                    </div>
                )
            }

            <div className={styles.helper}>
                <Helper src={helpers.videos?.src} text={helpers.videos?.text} link={helpers.videos?.link} />
            </div>
        </section>
    );
}

export default Videos;

