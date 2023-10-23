import React, { useState } from 'react';
import styles from './modalWindow.scss'
import { Modal } from 'antd';
import ButtonLink from '../ButtonLink/ButtonLink'
import { useDispatch, useSelector } from 'react-redux';
import { getCountriesForSelectThunk } from '../../store/actions/countriesForSelectActions'
import FormOfModal from '../FormOfModal/FormOfModal'
import { addVideosThunk } from '../../store/actions/videosActions'


function ModalWindow({ text, okText, title }) {
    const dispatch = useDispatch();   
    const [ isModalOpen, setIsModalOpen ] = useState(false);
    const  videoCard = useSelector((store) => store.formVideoStore);

    //для модалки, которая появляется на кнопку редактирование (она на странице Video) 
    // мне нужно для инпутов (image, city, description, videoUrl) взять значения из стора video, но для этого надо найти эл-т по id. 
    // я это делаю на странице Video, сюда пыталась пропсами прокинуть onClick, но в этом компоненте в подкомпоненте ButtonLink он падает, так ка рушит отрытие модалки по ButtonLink - "добавить". 
    // как его в этой модалке вытащить не понимаю
    // а именно этого эл-та (image, city, description, videoUrl) данные мне нужно вставить в initialState usеState (которые ниже)


    //здесь такой initialState позволяет при открытии формы сразу увидеть один отрисованный блок с городои и url
    // при этом неважно, есть ли нет initialState в виде {city: '', id: Date.now(), videoUrl: ''} при добавлении нескольких блоков 
    // видео в records уходит первым пустой объект
    // {city: '', id: 1696974119189, videoUrl: ''} 
    // {city: 'ddd', id: 1696974131645, videoUrl: 'https://youtu.be/Muz720S9uVw'}

    const showModal = () => {
        setIsModalOpen(true);
        dispatch(getCountriesForSelectThunk())
    };

    
    // в диспаче вроде данные летят нормальные, но при отрисовке на странице Video в видеокарточке отрисован только один блок, хотя
    // добавляю несколько
    // отдельная пролблема с урлами видео. Если испольльзую тег video, то возникают cors и ничего не отрисовывается. Если iframe и 
    // url с emded, то рисует, но потом консоль отправляет ошибки, а если со странным урл youtu.be, то консоль пишет 
    // Refused to display 'https://www.youtube.com/' in a frame because it set 'X-Frame-Options' to 'sameorigin'. Пробовала добалять 
    // заголовки, но, видимо, не имею на это прав

    // при добавление 2го и последующего блоков с видео и url в форме, затягивается то название города и url,
    // который указала в 1й раз. 
    // Пробовала писать по кнопке "+" на странице FormOfModal setCity(''), однако чистится имеено значение, которое пустым уходит 
    // в стейт через диспатч, вот так
    // {key: '', label: '', src: 'https://youtu.be/Muz720S9uVw', title: ''}
    // {key: '', label: '', src: 'https://youtu.be/Muz720S9uVw', title: ''}
    // А сам 2й и последующие блоки так и продолжают тянуть название города, который указала в 1м блоке. 

    const handleOk = () => {  
        dispatch(addVideosThunk(
            {
                id: Date.now(),
                title: videoCard.country.trim(),
                cover: {
                    src: videoCard.image.trim(),
                    alt: videoCard.description.trim() || `${videoCard.country}`
                },
                records: videoCard.records
        }
        ))  
        setIsModalOpen(false);
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
                // bodyStyle={styles.modal} не работает
            >
                
                <FormOfModal />
                    
            </Modal>
        </div>
    );
}

export default ModalWindow;