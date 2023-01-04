import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';


function Main() {
    return (
        <div className=' flex justify-center items-center'>
            <section className=' max-w-xl shadow-lg p-1 rounded-lg'>
                <img src="https://cdn.discordapp.com/attachments/1024061169566224496/1058459905750728734/WhatsApp_Image_2022-12-30_at_10.54.26_AM.jpeg" className="" />
                <h1 className=" text-3xl font-semibold p-3">Online Experiences</h1>
                <p className=' text-basefont-normal text-gray-600  mb-3 p-3'>Join unique interactive activities led by
                    <br></br>
                    one-of-a-kind hosts—all without leaving
                    <br></br>
                    home.</p>
            </section>
        </div>
    )
}

export default Main