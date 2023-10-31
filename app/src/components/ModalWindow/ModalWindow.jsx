import React, { useState } from 'react';
import styles from './modalWindow.scss'
import { Modal, notification } from 'antd';
import ButtonLink from '../ButtonLink/ButtonLink'
import { useDispatch, useSelector } from 'react-redux';
import FormOfModal from '../FormOfModal/FormOfModal'
import { addVideosThunk } from '../../store/actions/videosActions'
import { clearFormAC } from '../../store/actions/formVideoActions'

function ModalWindow({ text, okText, title, videoCardFromVideosView }) {
    const videoCard = useSelector((store) => store.formVideoStore);
    const dispatch = useDispatch();   
    const [ isModalOpen, setIsModalOpen ] = useState(false);
    const [ errorsOnSave, setErrorsOnSave ] = useState({
        country: 'no error',
        image: 'no error',
        records: [
            {
                city: 'no error',
                videoUrl: 'no error',
            }
        ] 
    });
    const [ errorOnChange, setErrorOnChange ] = useState({
        country: 'no error',
        image: 'no error',
        records: [
            {
                city: 'no error',
                videoUrl: 'no error',
            }
        ] 
    })

    const showModal = () => {
        setIsModalOpen(true);
    };

    const errors = ['страну', 'url фото', 'город', 'url видео']
    const inputs = [videoCard.country, videoCard.image.trim(), videoCard.records[0].city.trim(), videoCard.records[0].videoUrl.trim()]

    const filteredErrors = errors.filter((el, i) => !inputs[i])

    const handleOk = () => { 
        if (videoCard.country && videoCard.image.trim() && videoCard.records.every((el) => el.city && el.videoUrl)) {
            dispatch(addVideosThunk(
                {
                    id: videoCard.id,
                    title: videoCard.country,
                    cover: {
                        src: videoCard.image,
                        alt: videoCard.description || `${videoCard.country}`
                    },
                    records: videoCard.records.map((el) => {
                        return {
                            key: el.city,
                            label: el.city,
                            src:  el.videoUrl,
                            title: el.city
                        }
                    })
            }
            )) 
            notification.open({
                message: 'Отлично',
                description: 'Вы добавили видеокарточку!'
            }) 
            setIsModalOpen(false);
            dispatch(clearFormAC())
        } else {     
            setErrorsOnSave({
                country: videoCard.country,
                image: videoCard.image.trim(),
                records: videoCard.records.map((el) => {
                    return {
                        city: el.city,
                        videoUrl: el.videoUrl,
                    }
                })
            })  

            notification.open({
                message: 'Упс!',
                description: `Укажите непустые ${filteredErrors.join(', ')}`
            }) 
        }
        
        
    };

    const handleCancel = () => {
        setErrorsOnSave({
            country: 'no error',
            image: 'no error',
            records: videoCard.records.map((el) => {
                return {
                    city: 'no error',
                    videoUrl: 'no error',
                }
            })
        }) 
        setErrorOnChange({
            country: 'no error',
            image: 'no error',
            records: videoCard.records.map((el) => {
                return {
                    city: 'no error',
                    videoUrl: 'no error',
                }
            })
        })
        dispatch(clearFormAC())
        setIsModalOpen(false);
    };


    return (
        <div className={styles.wrapper}>
            <ButtonLink onClick={showModal} text={text} />
            <Modal 
                title={title}
                open={isModalOpen} 
                onOk={handleOk} 
                onCancel={handleCancel} 
                okText={okText}
                width='60rem'
                bodyStyle={{backgroundColor: '#f8f1ea', padding: '2rem'}}
            >
                
                <FormOfModal errorsOnSave={errorsOnSave} setErrorsOnSave={setErrorsOnSave} errorOnChange={errorOnChange} setErrorOnChange={setErrorOnChange} videoCardFromVideosView={videoCardFromVideosView}/>                    
            </Modal>
        </div>
    );
}

export default ModalWindow;