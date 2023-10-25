import React, { useState } from 'react';
import styles from './modalWindow.scss'
import { Modal, notification } from 'antd';
import ButtonLink from '../ButtonLink/ButtonLink'
import { useDispatch, useSelector } from 'react-redux';
import FormOfModal from '../FormOfModal/FormOfModal'
import { addVideosThunk } from '../../store/actions/videosActions'
import { clearFormAC } from '../../store/actions/formVideoActions'

function ModalWindow({ text, okText, title }) {
    const dispatch = useDispatch();   
    const [ isModalOpen, setIsModalOpen ] = useState(false);
    const  videoCard = useSelector((store) => store.formVideoStore);
    const [ status, setStatus ] = useState('')
    const regExp = /^[?!,.а-яА-ЯёЁ0-9\S\w]/

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => { 
        console.log(regExp.test(videoCard.country), regExp.test(videoCard.image), videoCard.image, regExp.test(videoCard.description))
        
        if (regExp.test(videoCard.country) && regExp.test(videoCard.image) && regExp.test(videoCard.description)) {
            dispatch(addVideosThunk(
                {
                    id: videoCard.id,
                    title: videoCard.country.trim(),
                    cover: {
                        src: videoCard.image.trim(),
                        alt: videoCard.description.trim() || `${videoCard.country}`
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
            dispatch(clearFormAC())
            setIsModalOpen(false);
        }  else {
            setStatus('error')
            notification.open({
                message: 'Упс!',
                description: `Заполните`
            }) 
        }
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };


    return (
        <div className={styles.wrapper}>
            <ButtonLink onClick={showModal} text={text}/>
            <Modal 
                title={title}
                open={isModalOpen} 
                onOk={handleOk} 
                onCancel={handleCancel} 
                okText={okText}
                width='60rem'
                bodyStyle={{backgroundColor: '#f8f1ea', padding: '2rem'}}
            >
                
                <FormOfModal status={status}/>                    
            </Modal>
        </div>
    );
}

export default ModalWindow;