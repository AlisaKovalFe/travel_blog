import React, { useEffect, useState } from 'react';
import styles from './formOfModal.scss'
import { Button, Input, notification } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import Selection from '../Selection/Selection'
import ButtonLink from '../ButtonLink/ButtonLink'
import { addDataFromInputInFormAC, addEmptyVideoBlockInFormAC, addVideoRecordsFromInputsInFormAC, deleteVideoRecordInFormAC } from '../../store/actions/formVideoActions'
import { getCountriesForSelectThunk } from '../../store/actions/countriesForSelectActions'


function FormOfModal({status}) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCountriesForSelectThunk())
    }, [])

    const { countries } = useSelector((store) => store.countriesForSelectStore);
    const videoCard = useSelector((store) => store.formVideoStore);
    const [ statusOfError, setStatusOfError ] = useState(false)
    
    const regExp = /^[?!,.а-яА-ЯёЁ0-9\S\w]/
    
    const handleInput = (value, params) => {   
        
        if (!regExp.test(value)) {
            setStatusOfError(!statusOfError)
        } else {
            console.log(value)
            dispatch(addDataFromInputInFormAC({
                value, 
                params
            }))
            setStatusOfError(false)
            
        }
    }

    const handleInputRecords = (value, id, params) => {
        dispatch(addVideoRecordsFromInputsInFormAC({
            value, 
            params,
            id
        }))
    }

    function handleEmptyAddVideoBlock() {
        dispatch(addEmptyVideoBlockInFormAC())
    }

    function deleteVideoBlock(id) {
        dispatch(deleteVideoRecordInFormAC({
            id
        }))
    }

    function statusChange(params) {
        return statusOfError ? (
            <div style={{color: 'red'}}>Укажите {params}</div>
        ) : ''
    }

    return (
        <form>
            <div>
                <Selection countries={countries} onChange={(e) => handleInput(e, 'country')} status={statusOfError ? 'error' : ''}/>
                {
                    statusChange('страну') 
                }
            </div>

            <div 
                style={{
                    display:'flex',
                    justifyContent: 'space-between',
                    marginTop: '1rem',
                    marginBottom: '2rem',
                    width: '100%'
                }}>

                    <div
                        style={{
                            display: 'inline-block',
                            width: '48%',
                    }}>

                        <Input 
                            defaultValue='url'
                            addonAfter='*'                     
                            placeholder="url фото" 
                            onChange={(e) => handleInput(e.target.value, 'image')}
                            value={videoCard.image}
                            status={statusOfError ? 'error' : ''}
                        />
                        {
                            statusChange('url')
                        }
                    </div>
                    

                    <div
                        style={{
                            display: 'inline-block',
                            width: '48%',
                        }}
                    >
                        <Input 
                            placeholder='описание'
                            onChange={(e) => handleInput(e.target.value, 'description')}
                            value={videoCard.description}
                        />
                    </div>
                
                    
                    
            </div>

            {                        
                videoCard.records?.map((el) => (
                    <div key={el.id} 
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '1rem',
                            marginBottom: '1rem',
                            width: '100%'
                        }}>

                        <Input 
                            style={{
                                display: 'inline-block',
                                width: '48%',
                            }}
                            addonAfter='*'  
                            placeholder="город" 
                            onChange={(e) => handleInputRecords(e.target.value, el.id, 'city')}
                            value={el.city}
                        />
                        <Input 
                            style={{
                                display: 'inline-block',
                                width: '48%',
                            }}
                            addonAfter='*'  
                            placeholder='видео'
                            onChange={(e) => handleInputRecords(e.target.value, el.id, 'videoUrl')}
                            value={el.videoUrl}
                        />
                        
                        {
                            videoCard.records.length > 1 && (
                                <ButtonLink 
                                    style={{
                                        display: 'inline-block',
                                        width: '4%',
                                    }}
                                    text='-' 
                                    onClick={() => deleteVideoBlock(el.id)}/>
                            )
                        }
                    </div>
                ))
            }

            <Button onClick={() => handleEmptyAddVideoBlock()}>
                +
            </Button>

        </form>
    );
}

export default FormOfModal;



