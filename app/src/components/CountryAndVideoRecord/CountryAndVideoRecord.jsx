import React from 'react';
import { Form, Input } from 'antd';
import ButtonLink from '../ButtonLink/ButtonLink'

function CountryAndVideoRecord({city, setCity, videoUrl, setVideoUrl, records, id, setRecords}) {
    Form.useForm();

    function deleteVideoBlock(id) {
        setRecords(records.filter((el) => el.id !== id))
    }
    const validateMessages = {
        required: "Укажите ${name}",
    }
    const regExp = /^[?!,.а-яА-ЯёЁ0-9\S\w]/
    const regExpForUrl = /^(http|https|ftp):\/\/(([A-Z0-9][A-Z0-9_-]*)(\.[A-Z0-9][A-Z0-9_-]*)+)/i

    return (
        <div>
            <Form.Item
                    name='город'  
                    style={{
                        display: 'inline-block',
                        width: '49%',
                    }} 
                    hasFeedback              
                    rules={[
                        { 
                            required: true, 
                            message: validateMessages.required,
                            pattern: city.trim() ? null : regExp
                        }]}
                >
                    <Input 
                        addonAfter='*'
                        placeholder="город" 
                        onChange={(e) => setCity(e.target.value)}
                        value={city}
                    />
                </Form.Item>

                <Form.Item
                    name="URL видео"
                    style={{
                        display: 'inline-block',
                        width: '49%',
                    }}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: validateMessages.required,
                            pattern: videoUrl.trim() ? null : regExpForUrl
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
                >
                    <Input 
                        addonAfter='*'
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
                                width: '2%',
                            }}
                        >
                            <ButtonLink text='-' onClick={() => deleteVideoBlock(id)}/>
                        </Form.Item>
                    )
                }
        </div>
    );
}

export default CountryAndVideoRecord;