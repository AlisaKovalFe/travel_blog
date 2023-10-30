import React, { useEffect } from 'react';
import { Button, Input } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import Selection from '../Selection/Selection'
import ButtonLink from '../ButtonLink/ButtonLink'
import { addDataFromInputInFormAC, addEmptyVideoBlockInFormAC, addVideoRecordsFromInputsInFormAC, deleteVideoRecordInFormAC } from '../../store/actions/formVideoActions'
import { getCountriesForSelectThunk } from '../../store/actions/countriesForSelectActions'

function FormOfModal({ errorsOnSave, setErrorsOnSave, errorOnChange, setErrorOnChange, videoCardFromVideosView }) {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCountriesForSelectThunk())
    }, [])

    const { countries } = useSelector((store) => store.countriesForSelectStore);
    const videoCard = useSelector((store) => store.formVideoStore);
    console.log(videoCardFromVideosView)
    
    const handleInput = (value, params) => {  
        console.log(value)
        dispatch(addDataFromInputInFormAC({
            value, 
            params
        }))
        if (value.trim() === '') {
            setErrorOnChange({...errorOnChange, [params]: value}) 
        } else {
            setErrorOnChange({...errorOnChange, [params]: value}) 
            setErrorsOnSave({...errorsOnSave, [params]: value})
        }
    }

    const handleInputRecords = (value, id, params, index) => {
        dispatch(addVideoRecordsFromInputsInFormAC({
            value, 
            params,
            id
        }))
        if (value.trim() === '') {
            setErrorOnChange({...errorOnChange, records: errorOnChange.records.map((el, i) => {
                if (i === index) {
                    return {
                        ...el,
                    [params]: value
                    }
                } 
                return el
            })})
        } else {
            setErrorOnChange({...errorOnChange, records: errorOnChange.records.map((el, i) => {
                if (i === index) {
                    return {
                        ...el,
                    [params]: value
                    }
                } 
                return el
            })})
            setErrorsOnSave({...errorsOnSave, records: errorsOnSave.records.map((el, i) => {
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
        setErrorOnChange({...errorOnChange, records: [...errorOnChange.records, {id: Date.now(), city: 'no error', videoUrl: 'no error'}]})
        setErrorsOnSave({...errorsOnSave, records: [...errorsOnSave.records, {id: Date.now(), city: 'no error', videoUrl: 'no error'}]})
    }

    function deleteVideoBlock(id) {
        dispatch(deleteVideoRecordInFormAC({
            id
        }))
    }

    function statusChange(params) {
        return !errorOnChange[params] || !errorsOnSave[params] ? (
            <div style={{color: 'red'}}>Укажите {params}</div>
        ) : ''
    }

    function statusChangeForVideoRecords(params, index) {
        return !errorOnChange.records[index][params] || !errorsOnSave.records[index][params] ? (
            <div style={{color: 'red'}}>Укажите {params}</div>
        ) : ''
    }

    return (
        <form>
            <div>
                <Selection 
                    countries={countries} 
                    onChange={(e) => handleInput(e, 'country')} 
                    status={!errorOnChange.country || !errorsOnSave.country ? 'error' : ''} 
                    value={videoCardFromVideosView?.title}
                    disabled={videoCardFromVideosView?.title ? true : false}
                    />
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
                            // defaultValue={videoCardFromVideosView?.cover.src}
                            value={videoCard.image || videoCardFromVideosView?.cover?.src}
                            status={!errorOnChange.image || !errorsOnSave.image ? 'error' : ''}
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
                                width:  videoCard.records.length === 1 ? '49%' : '47%',
                                }}>

                            <Input 
                                addonAfter={index === 0 ? '*' : ' '}    
                                placeholder="город" 
                                onChange={(e) => handleInputRecords(e.target.value, el.id, 'city', index)}
                                value={el.city}
                                status={(!errorOnChange.records[index].city || !errorsOnSave.records[index].city ) ? 'error' : ''}
                            />

                            {
                                statusChangeForVideoRecords('city', index)
                            }
                        </div>

                        <div
                            style={{
                                display: 'inline-block',
                                width:  videoCard.records.length === 1 ? '49%' : '47%',
                                }}>

                            <Input 
                                addonAfter={index === 0 ? '*' : '  '}  
                                placeholder='видео'
                                onChange={(e) => handleInputRecords(e.target.value, el.id, 'videoUrl', index)}
                                value={el.videoUrl}
                                status={(!errorOnChange.records[index].videoUrl || !errorsOnSave.records[index].videoUrl)  ? 'error' : ''}
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

        </form>
    );
}

export default FormOfModal;



