import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Input, Form, Checkbox, DatePicker, Typography } from 'antd';
import styles from './searchPanel.module.scss'
import Selection from '../Selection/Selection'
import ButtonLink from '../ButtonLink/ButtonLink'
import { addDataFromInputInSearchPanelAC, clearSearchPanelAC } from '../../store/actions/searchPanelActions'
// import { filterVideosOfVieoCardsAC } from '../../store/actions/videosActions'
import { addDataFromSearchPanelAC } from '../../store/actions/dataFromSearchPanelActions'

const { Title } = Typography;
const { RangePicker } = DatePicker;

function SearchPanel() {
    const dispatch = useDispatch();
    const { countries } = useSelector((store) => store.countriesForSelectStore);
    const searchPanel = useSelector((store) => store.searchPanelStore);
    const [ form ] = Form.useForm();

    useEffect(() => {
        dispatch(addDataFromSearchPanelAC({
            flag: 'default' 
        }))
    }, [dispatch])
    

    function handleInput(value, params) {
        dispatch(addDataFromInputInSearchPanelAC({
            value,
            params
        }))

        if (params === 'videoTitle') {
            dispatch(addDataFromSearchPanelAC({
                videoTitle: value, 
                flag: 'videoTitle' 
            }))
        }

        if (!value) {
            dispatch(addDataFromSearchPanelAC({
                flag: 'default' 
            }))
        }

    }

    function handleSubmit() {
        if (searchPanel.country) {
            dispatch(addDataFromSearchPanelAC({
                title: searchPanel.country,
                flag: 'country'
            }))
        }

        if (searchPanel.city) {
            dispatch(addDataFromSearchPanelAC({
                city: searchPanel.city,
                flag: 'city'
            }))
        }

        dispatch(clearSearchPanelAC())
        form.resetFields(['country'])
    }

    return (
        <div className={styles.wrapper}>
                <Title level={5}>Найди видео</Title>
                <Form
                    form={form}
                    style={{
                        display:'flex',
                        flexDirection: 'column',
                        marginTop: '2rem'
                    }}
                >
                    <div
                        style={{
                            display:'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        <div
                            style={{
                                display:'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                width:  '49%',
                            }}
                        >

                            <Form.Item
                                name='country'                     
                            >
                                <Selection 
                                    countries={countries} 
                                    onChange={(e) => handleInput(e, 'country')} 
                                    // status={!errors.country ? 'error' : ''} 
                                    value={searchPanel?.country}
                                    placeholder="Выберите страну"
                                />
                            </Form.Item>

                            <Form.Item>
                                <Input 
                                    placeholder="город" 
                                    onChange={(e) => handleInput(e.target.value, 'city')}
                                    value={searchPanel?.city}
                                    // status={(!errors?.records[index]?.city ) ? 'error' : ''}
                                />  
                            </Form.Item>
                            
                            <Form.Item>
                                <Input 
                                    placeholder='видео'
                                    onChange={(e) => handleInput(e.target.value, 'videoTitle')}
                                    value={searchPanel?.videoTitle}
                                    // status={(!errors?.records[index]?.videoUrl)  ? 'error' : ''}
                                />
                            </Form.Item>
                            
                        </div>

                        <div
                            style={{
                                display:'flex',
                                flexDirection: 'column',
                            }}
                        >

                            <Form.Item
                                name="range-picker" 
                            >
                                <RangePicker 
                                value={['', '']}
                                onChange={(e) => console.log(e)}
                                />
                            </Form.Item>

                            <Form.Item>
                                <Checkbox 
                                    onChange={(e) => handleInput(e.target.checked, 'isRecentlyAdded')}
                                >
                                    Недавно добавленные
                                </Checkbox>
                            </Form.Item>
                            
                        </div>
                    </div>


                    <div
                        style={{
                            alignSelf: 'center',
                            marginBottom: '1.5rem'
                        }}
                    >
                        <ButtonLink 
                            text='Искать'
                            htmlType="submit"
                            onClick={() => handleSubmit()}
                        />
                    </div>

                    
                </Form>
            </div>
    );
}

export default SearchPanel;