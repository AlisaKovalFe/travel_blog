import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Input, Form, Checkbox, DatePicker, Typography, AutoComplete } from 'antd';
import dayjs from 'dayjs'
import styles from './searchPanel.module.scss'
import Selection from '../Selection/Selection'
import ButtonLink from '../ButtonLink/ButtonLink'
import { addDataFromInputInSearchPanelAC, clearSearchPanelAC } from '../../store/actions/searchPanelActions'
import { addDataFromSearchPanelAC } from '../../store/actions/dataFromSearchPanelActions'

const { Title } = Typography;
const { RangePicker } = DatePicker;

function SearchPanel() {
    const dispatch = useDispatch();
    const { countries } = useSelector((store) => store.countriesForSelectStore);
    const searchPanel = useSelector((store) => store.searchPanelStore);
    const videos = useSelector((store) => store.videosStore);
    const [ form ] = Form.useForm();

    useEffect(() => {
        dispatch(addDataFromSearchPanelAC({
            flag: 'default' 
        }))
    }, [dispatch])
    
    let videoOptions = []

    videos?.videosInfo?.forEach((el) => {
        el.records.forEach((item) => {
            videoOptions.push({value: item.title})
        })
    })

    function handleInput(value, params) {
        dispatch(addDataFromInputInSearchPanelAC({
            value: params === 'timeStamp' ? value.map((el, i) => i === 0 ? el.startOf('date').unix() : el.endOf('date').unix()) : value,
            params
        }))

        if (params === 'videoTitle') {
            dispatch(addDataFromSearchPanelAC({
                videoTitle: value, 
                flag: value ? 'videoTitle' : 'default' 
            }))
        }
    }

    function handleSubmit() {

        let flag = ''

        if (searchPanel.timeStamp) {
            flag ='timeStamp'
        }
        if (searchPanel.country) {
            flag ='country'
        } 
        if (searchPanel.city) {
            flag = 'city'
        } 
        if (searchPanel.videoTitle) {
            flag = 'videoTitle'
        }     

        dispatch(addDataFromSearchPanelAC({
            title: searchPanel.country,
            city: searchPanel.city,
            videoTitle: searchPanel.videoTitle, 
            timeStamp: searchPanel.timeStamp,
            isRecentlyAdded: searchPanel.isRecentlyAdded,
            flag: flag
        }))

        dispatch(clearSearchPanelAC())
        form.resetFields(['country', 'isRecentlyAdded', "range-picker", 'autocomplete'])
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
                    autoComplete='on'
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
                                    value={searchPanel?.country}
                                    placeholder="Выберите страну"
                                />
                            </Form.Item>

                            <Form.Item>
                                <Input 
                                    placeholder="город" 
                                    onChange={(e) => handleInput(e.target.value, 'city')}
                                    value={searchPanel?.city}
                                />  
                            </Form.Item>
                            
                            <Form.Item
                                name='autocomplete' 
                            >
                                <AutoComplete       
                                    options={videoOptions}
                                    placeholder="введите название видео"
                                    filterOption={(inputValue, option) => option.value.toLowerCase().startsWith(inputValue)}
                                    onChange={(e) => handleInput(e, 'videoTitle')}
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
                                    value={[dayjs().unix(), dayjs().unix()]}
                                    onChange={(data) => handleInput(data, 'timeStamp')}
                                />
                            </Form.Item>

                            <Form.Item
                                name="isRecentlyAdded"
                                valuePropName="checked"
                            >
                                <Checkbox 
                                    onChange={(e) => handleInput(e.target.checked, 'isRecentlyAdded')}
                                    value={searchPanel?.isRecentlyAdded}
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