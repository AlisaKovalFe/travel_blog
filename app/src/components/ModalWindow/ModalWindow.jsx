import React, { useState, useEffect } from 'react';
import { Modal, notification, Form } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import FormOfModal from '../FormOfModal/FormOfModal'
import ButtonLink from '../ButtonLink/ButtonLink'
import { addVideosThunk, editVideosThunk } from '../../store/actions/videosActions'
import { clearFormAC } from '../../store/actions/formVideoActions'

function ModalWindow({ text, okText, title, editOption, handler }) {
    const dispatch = useDispatch(); 
    const videoCard = useSelector((store) => store.formVideoStore);
    const [ form ] = Form.useForm();  
    const [ isModalOpen, setIsModalOpen ] = useState(false);
    const [ errors, setErrors ] = useState({
        country: 'no error',
        image: 'no error',
        records: new Array(videoCard.records.length).fill('').map((el) => {
            return {
                    city: 'no error',
                    videoUrl: 'no error',
                }
        })
    });

    useEffect(() => {
        setErrors({
            country: 'no error',
            image: 'no error',
            records: new Array(videoCard.records.length).fill('').map((el) => {
                return {
                        city: 'no error',
                        videoUrl: 'no error',
                    }
            })
        })
    }, [videoCard])

    const showModal = () => {
        setIsModalOpen(true);

        if (editOption) {
            handler()
        }
    };

    const errorsItems = ['страну', 'url фото', 'город', 'url видео']
    const inputs = [videoCard.country, videoCard.image.trim(), videoCard.records[0].city.trim(), videoCard.records[0].videoUrl.trim()]

    const filteredErrors = errorsItems.filter((el, i) => !inputs[i])

    const handleOk = () => { 

        if (editOption) {

            if (videoCard.image.trim() && videoCard.records.every((el) => el.city && el.videoUrl)) {
                dispatch(editVideosThunk(
                    {
                        id: videoCard.id,
                        image: videoCard.image,
                        description: videoCard.description,
                        records: videoCard.records.map((el) => {
                            return {
                                key: el.id,
                                city: el.city,
                                videoUrl:  el.videoUrl,
                                title: el.city
                            }
                        })
                }
                )) 
                notification.open({
                    message: 'Отлично',
                    description: `Вы отредактировали видеокарточку страны ${videoCard.country}`
                }) 
                setIsModalOpen(false);
                form.resetFields(["country"]);
                dispatch(clearFormAC())
    
            } else {     
                setErrors({
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
                    message: 'Отлично!',
                    description: `Укажите непустые ${filteredErrors.join(', ')}`
                }) 
            }

        } else {
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
                                key: el.id,
                                city: el.city,
                                videoUrl:  el.videoUrl,
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
                form.resetFields(["country"]);
                dispatch(clearFormAC())
    
            } else {     
                setErrors({
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
        }
    
    };

    const handleCancel = () => {
        setErrors({
            country: 'no error',
            image: 'no error',
            records: new Array(videoCard.records.length).fill('').map((el) => {
                return {
                        city: 'no error',
                        videoUrl: 'no error',
                    }
            })
        }) 
        form.resetFields(['country'])
        dispatch(clearFormAC())
        setIsModalOpen(false);
        
    };

    return (
        <div>
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
                
                <FormOfModal form={form} errors={errors} setErrors={setErrors} editOption={editOption}/>                    

            </Modal>
        </div>
    );
}

export default ModalWindow;