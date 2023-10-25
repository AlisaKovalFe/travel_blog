import React, { useState } from 'react';
import { Button } from 'antd';

function FormTry() {
    const [ video, setVideo ] = useState([
        {
          id: Date.now(),
          city: '',
          videoUrl: '',
        }
])
    
    const handleInputRecords = (value, id, params) => {

        setVideo(video.map((el) => {
            if (el.id === id) {
                return {
                    ...el,
                    [params]: value
                }
            }
            return el
        }))

        // setVideo(video.map((el) => {
        //     video.findIndex((el) => {
        //         if (el.id === id) {
        //             return {
        //                 ...el,
        //                 [params]: value
        //             }
        //         }
        //     })
            
        //     return el
        // }))
    }

    console.log(video)

    function handleEmptyAddVideoBlock() {
        setVideo((prev) => [...prev, {
            id: Date.now(),
            city: '',
            videoUrl: '',
        }])
    }

    return (
        <form style={{width: '50rem', margin: '5rem'}}>

            {                        
                video?.map((el) => (
                    <div key={el.id} 
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: '1rem',
                            width: '100%'
                        }}>
                        <input 
                            style={{
                                width: '45%',
                                height: '1.7rem',
                                borderRadius: '0.3rem',
                                borderColor: '#d3d3d3',
                                borderWidth: '1px',
                                boxShadow: 'none',
                                marginRight: '1rem'
                            }}
                            type='text'
                            placeholder="город" 
                            onChange={(e) => handleInputRecords(e.target.value, el.id, 'city')}
                            value={el.city}
                        /> 

                        <input 
                            style={{
                                width: '45%',
                                height: '1.7rem',
                                borderRadius: '0.3rem',
                                borderColor: '#d3d3d3',
                                borderWidth: '1px',
                                boxShadow: 'none',
                                marginRight: '1rem'
                            }}
                            type='text'
                            placeholder='видео'
                            onChange={(e) => handleInputRecords(e.target.value, el.id, 'videoUrl')}
                            value={el.videoUrl}
                        /> 
                    
                        {
                            video.length > 1 && (
                                <button
                                    style={{
                                        width: '6%',
                                        height: '1.8rem',
                                        borderRadius: '0.3rem',
                                        borderColor: '#d3d3d3',
                                        borderWidth: '1px',
                                        boxShadow: 'none'
                                    }}
                                    // onClick={() => deleteVideoBlock(el.id)}
                                    >
                                    -
                                </button>
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

export default FormTry;