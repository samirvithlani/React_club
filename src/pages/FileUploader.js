import axios from 'axios'
import React, { useState } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


export const FileUploader = () => {

    const [singleFile, setsingleFile] = useState('')
    const [singleProcess, setsingleProcess] = useState('')

    const singleFileChange = (e) => {

        
        console.info(e.target.files)
        setsingleFile(e.target.files[0])


    }

    const singleFileOption = {

        onUploadProgress: (progressevent) => {
            const { loaded, total } = progressevent;
            const percentage = Math.floor(((loaded / 1000) * 100) / (total / 1000))
            setsingleProcess(percentage)

        }
    }

    const uploadFile = async () => {

        callApi(singleFile, singleFileOption)
    }

    async function callApi(singleFile, option) {

        const formData = new FormData()

        formData.append("file", singleFile)
        formData.append("name", "abc")



        const res = await axios.post("http://localhost:8080/upload", formData, option)
        console.info(res.data)


    }

    return (
        <div>

            <div class="form-group">
                <label for="exampleInputEmail1">FILE</label>
                <input type="file" class="form-control" placeholder="Enter FILE" onChange={(e) => { singleFileChange(e) }}  multiple/>
            </div>
            <button onClick={uploadFile} class="btn btn-primary">Submit</button>
            <div className="col-1">
                <CircularProgressbar
                    value={singleProcess}
                    text={`${singleProcess}%`}
                    styles={buildStyles({
                        // Rotation of path and trail, in number of turns (0-1)
                        rotation: 0.25,

                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                        strokeLinecap: 'butt',

                        // Text size
                        textSize: '16px',

                        // How long animation takes to go from one percentage to another, in seconds
                        pathTransitionDuration: 0.5,

                        // Can specify path transition in more detail, or remove it entirely
                        // pathTransition: 'none',

                        // Colors
                        pathColor: `rgba(62, 152, 199, ${singleProcess / 100})`,
                        textColor: '#f88',
                        trailColor: '#d6d6d6',
                        backgroundColor: '#3e98c7',
                    })}

                />

            </div>

        </div>
    )
}
