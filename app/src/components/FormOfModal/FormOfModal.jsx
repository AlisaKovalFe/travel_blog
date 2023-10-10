import React from 'react';
import { Button, Form, Input } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import Selection from '../Selection/Selection'
import ButtonLink from '../ButtonLink/ButtonLink'
import { deleteVideoRecordAC } from '../../store/actions/formVideoRecordsActions'
import { addVideoRecordAC } from '../../store/actions/formVideoRecordsActions'

function FormOfModal({setCountry, image, setImage, description, setDescription, city, setCity, videoUrl, setVideoUrl, records, setRecords}) {
    const [ form ] = Form.useForm();
    console.log(records)
    const { countries } = useSelector((store) => store.countriesForSelectStore);
    const dispatch = useDispatch();

    const validateMessages = {
        required: "Укажите ${name}",
    }
    const regExp = /^[?!,.а-яА-ЯёЁ0-9\S\w]/
    const regExpForUrl = /^(http|https|ftp):\/\/(([A-Z0-9][A-Z0-9_-]*)(\.[A-Z0-9][A-Z0-9_-]*)+)/i

    function deleteVideoBlock(id) {
        setRecords(records.filter((el) => el.id !== id))
        // dispatch(deleteVideoRecordAC(id))
    }

    // думала отдельно сделать добавление блока и хранить в сторе их, но получаются каки-то излишние добавления видеоблоков
    // function addVideoBlock(id) {
    //     dispatch(addVideoRecordAC({
    //         city: city,
    //         videoUrl: videoUrl,
    //         id: id
    //     }))
    // }


    return (
        <Form 
            form={form}                   
            // wrapClassName={styles.form} //не видит??
            // style={styles.form}  //не видит??
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
                <Selection countries={countries} onChange={(e) => setCountry(e)}/>
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
                            pattern: image.trim() ? null : regExpForUrl
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
                        onChange={(e) => setImage(e.target.value)}
                        value={image}
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
                            pattern: description.trim() ? null : regExp
                        }]}
                    >
                    <Input 
                        placeholder='описание'
                        addonAfter=' '
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                    />
                    
                </Form.Item>
            </div>

            
            {                        
                records.map((el) => (
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
                                onChange={(e) => setCity(e.target.value)}
                                value={city}
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
                                onChange={(e) => setVideoUrl(e.target.value)}
                                value={videoUrl}
                            />
                        </Form.Item>

                        {
                            records.length > 1 && (
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
                    setRecords((prev) => [...prev, {city: city, id: Date.now(), videoUrl: videoUrl}])
                    // records.map((el) => addVideoBlock(el.id))                
                }}>
                    +
                </Button>
            </Form.Item>
        </Form>
    );
}

export default FormOfModal;