import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Input, Form } from 'antd';
import Selection from '../Selection/Selection'
import ButtonLink from '../ButtonLink/ButtonLink'
import { addDataFromInputInFormAC, addEmptyVideoBlockInFormAC, addVideoRecordsFromInputsInFormAC, deleteVideoRecordInFormAC } from '../../store/actions/formVideoActions'
import { getCountriesForSelectThunk } from '../../store/actions/countriesForSelectActions'

function FormOfModal({ errors, setErrors, form, editOption }) {
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCountriesForSelectThunk())
    }, [dispatch])

    const { countries } = useSelector((store) => store.countriesForSelectStore);
    const videoCard = useSelector((store) => store.formVideoStore);
    
    const handleInput = (value, params) => {  
        dispatch(addDataFromInputInFormAC({
            value, 
            params
        }))
        if (value.trim() === '') {
            setErrors({...errors, [params]: value}) 
        } else {
            setErrors({...errors, [params]: value})
        }
    }

    const handleInputRecords = (value, id, params, index) => {
        dispatch(addVideoRecordsFromInputsInFormAC({
            value, 
            params,
            id
        }))
        if (value.trim() === '') {
            setErrors({...errors, records: errors.records.map((el, i) => {
                if (i === index) {
                    return {
                        ...el,
                    [params]: value
                    }
                } 
                return el
            })}) 
        } else {
            setErrors({...errors, records: errors.records.map((el, i) => {
                if (i === index) {
                    return {
                        ...el,
                    [params]: value
                    }
                } 
                return el
            })}) 
        }
    }

    function handleEmptyAddVideoBlock() {
        dispatch(addEmptyVideoBlockInFormAC())
        setErrors({...errors, records: [...errors.records, {id: Date.now(), city: 'no error', videoUrl: 'no error', title: 'no error'}]})
    }

    function deleteVideoBlock(id) {
        dispatch(deleteVideoRecordInFormAC({
            id
        }))
    }

    function statusChange(params) {
        return  !errors[params] ? (
            <div style={{color: 'red'}}>Укажите {params}</div>
        ) : ''
    }

    function statusChangeForVideoRecords(params, index) {
        return !errors?.records[index]?.[params] ? (
            <div style={{color: 'red'}}>Укажите {params}</div>
        ) : ''
    }

    return (
        <Form 
            form={form}
            >
                <div>
                    <Form.Item
                        name='country'   
                        initialValue={editOption ? videoCard?.country : null}                  
                    >
                        <Selection 
                            countries={countries} 
                            onChange={(e) => handleInput(e, 'country')} 
                            status={!errors.country ? 'error' : ''} 
                            value={videoCard?.country}
                            disabled={editOption ? true : false}
                            placeholder="Выберите страну"
                        />
                    </Form.Item>
                {
                    statusChange('country')
                }
            </div>

            <div 
                style={{
                    display:'flex',
                    justifyContent: 'space-between',
                    marginTop: '1rem',
                    marginBottom: '2rem',
                    width: '95%'
                }}>

                    <div
                        style={{
                            display: 'inline-block',
                            width: '49%',
                    }}>

                        <Input 
                            addonAfter='*'                     
                            placeholder="url фото" 
                            onChange={(e) => handleInput(e.target.value, 'image')}
                            value={videoCard.image}
                            status={!errors.image ? 'error' : ''}
                        />
                        {
                            statusChange('image')
                        }
                    </div>
                    

                    <div
                        style={{
                            display: 'inline-block',
                            width: '49%',
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
                videoCard.records?.map((el, index) => (
                    <div key={el.id} 
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '1rem',
                            marginBottom: '1rem',
                            width: videoCard.records.length === 1 ? '95%' : '100%'
                        }}>

                        <div
                            style={{
                                display: 'inline-block',
                                width:  videoCard.records.length === 1 ? '33%' : '32%',
                                }}>

                            <Input 
                                addonAfter={index === 0 ? '*' : ' '}    
                                placeholder="город" 
                                onChange={(e) => handleInputRecords(e.target.value, el.id, 'city', index)}
                                value={el.city}
                                status={(!errors?.records[index]?.city ) ? 'error' : ''}
                            />

                            {
                                statusChangeForVideoRecords('city', index)
                            }
                        </div>

                        <div
                            style={{
                                display: 'inline-block',
                                width:  videoCard.records.length === 1 ? '33%' : '32%',
                                }}>

                            <Input 
                                addonAfter={index === 0 ? '*' : '  '}  
                                placeholder='название видео'
                                onChange={(e) => handleInputRecords(e.target.value, el.id, 'title', index)}
                                value={el.title}
                                status={(!errors?.records[index]?.title)  ? 'error' : ''}
                            />

                            {
                                statusChangeForVideoRecords('title', index) 
                            }
                        </div>

                        <div
                            style={{
                                display: 'inline-block',
                                width:  videoCard.records.length === 1 ? '33%' : '32%',
                                }}>

                            <Input 
                                addonAfter={index === 0 ? '*' : '  '}  
                                placeholder='ссылка на видео'
                                onChange={(e) => handleInputRecords(e.target.value, el.id, 'videoUrl', index)}
                                value={el.videoUrl}
                                status={(!errors?.records[index]?.videoUrl)  ? 'error' : ''}
                            />

                            {
                                statusChangeForVideoRecords('videoUrl', index) 
                            }
                        </div>

                        
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

        </Form>
    );
}

export default FormOfModal;



