import React from 'react';
import { Button, Form, Input } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import Selection from '../Selection/Selection'
import ButtonLink from '../ButtonLink/ButtonLink'
import { deleteVideoRecordAC } from '../../store/actions/formVideoActions'
import { addVideoInputAC, addEmptyVideoInputAC, addVideoRecordsInputAC } from '../../store/actions/formVideoActions'

function FormOfModal() {
    const [ form ] = Form.useForm();
    const { countries } = useSelector((store) => store.countriesForSelectStore);
    const { videoCard } = useSelector((store) => store.formVideoStore);
    const dispatch = useDispatch();

    const validateMessages = {
        required: "Укажите ${name}",
    }
    const regExp = /^[?!,.а-яА-ЯёЁ0-9\S\w]/
    const regExpForUrl = /^(http|https|ftp):\/\/(([A-Z0-9][A-Z0-9_-]*)(\.[A-Z0-9][A-Z0-9_-]*)+)/i

    const handleInput = (value, params) => {    
        // videoCard[params] = value   
        dispatch(addVideoInputAC({
            value, 
            params
        }))
    }

    const handleInputRecords = (value, index, params) => {
        dispatch(addVideoRecordsInputAC({
            value, 
            params,
            index
        }))
    }

    function handleEmptyAddVideoBlock() {
        dispatch(addEmptyVideoInputAC({
            value: '',
        }))
    }

    function deleteVideoBlock(id) {
        dispatch(deleteVideoRecordAC({
            id
        }))
    }

    console.log(videoCard.records)

    return (
        <Form 
            form={form}                   
            wrapperCol={{span: 23}}
            style={{display: 'flex', flexDirection: 'column'}}
            initialValues={{
                remember: true,
            }}
            autoComplete="on"        
        >

            <Form.Item
                name="select"
                hasFeedback
                rules={[
                    {
                    required: true,
                    message: 'Необходимо выбрать страну!',
                    },
                ]}
                >
                <Selection countries={countries} onChange={(e) => handleInput(e, 'country')}/>
            </Form.Item>

            <div >
                <Form.Item
                    style={{
                        display: 'inline-block',
                        width: '49%',
                    }}
                    rules={[
                        {
                            required: true,
                            message: validateMessages.required,
                        },
                        {
                            type: 'url',
                            warningOnly: true,
                        },
                        {
                            type: 'string',
                            min: 6,
                        },
                    ]}
                    name="URL фото"
                    hasFeedback
                    
                >
                    <Input 
                        addonAfter='*'
                        placeholder="url фото" 
                        onChange={(e) => handleInput(e.target.value, 'image')}
                        value={videoCard.image}
                        />
                </Form.Item>

                <Form.Item
                    name="описание"
                    style={{
                        display: 'inline-block',
                        width: '49%',
                    }}
                    hasFeedback                   
                    rules={[
                        { 
                            required: true, 
                            message: validateMessages.required,
                            pattern: videoCard.description.trim() ? null : regExp
                        }]}
                    >
                    <Input 
                        placeholder='описание'
                        addonAfter=' '
                        onChange={(e) => handleInput(e.target.value, 'description')}
                        value={videoCard.description}
                    />
                    
                </Form.Item>
            </div>
           
            {                        
                videoCard.records.map((el, index) => (
                    <div key={el.id}>
                        <Form.Item
                            name='город'  
                            style={{
                                display: 'inline-block',
                                width: '48%',
                            }} 
                            hasFeedback              
                            
                        >
                            <Input 
                                placeholder="город" 
                                onChange={(e) => handleInputRecords(e.target.value, index, 'city')}
                                value={el.city}
                            />
                        </Form.Item>

                        <Form.Item
                            name="Видео"
                            style={{
                                display: 'inline-block',
                                width: '48%',
                            }}
                            hasFeedback
                            
                        >
                            <Input 
                                placeholder='видео'
                                onChange={(e) => handleInputRecords(e.target.value, index, 'videoUrl')}
                                value={el.videoUrl}
                            />
                        </Form.Item>

                        {
                            videoCard.records.length > 1 && (
                                <Form.Item
                                    style={{
                                        display: 'inline-block',
                                        width: '4%',
                                    }}
                                >
                                    <ButtonLink text='-' onClick={() => deleteVideoBlock(el.id)}/>
                                </Form.Item>
                            )
                        }
                    </div>
                ))
            }
            
            <Form.Item
                wrapperCol={{
                    offset: 11,
                    span: 16,
                }}
            >
                <Button onClick={() => {
                    // setRecords((prev) => [...prev, {city: city, id: Date.now(), videoUrl: videoUrl}])
                    // records.map((el) => addVideoBlock(el.id))     
                    handleEmptyAddVideoBlock()
                }}>
                    +
                </Button>
            </Form.Item>
        </Form>
    );
}

export default FormOfModal;