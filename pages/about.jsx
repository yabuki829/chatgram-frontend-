
import React, { useState } from 'react'
import Link from 'next/link' 
import Image from "next/image";
import tvimage from "../public/tv2.png";
import tvimage2 from "../public/tv.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane,faBars } from '@fortawesome/free-solid-svg-icons';

const About = () => {


  return (
    <div className='flex flex-col min-h-screen bg-gray-100'>
       <header className='bg-blue-900'>

       <div className='flex flex-col md:items-center md:justify-center p-4 md:p-1 md:my-10'>
          <Link href="/" className='flex items-center'>
            <Image className='w-10 h-10' src={tvimage} alt="icon" />
            <h1 className='md:text-3xl font-bold mx-2 text-white'>テレビ感想.com</h1>
          </Link>
          <h1 className='text-white font-bold md:text-center text-left text-sm md:text-base'>このサイトについて</h1>
        </div>



      </header>
     


        <div className='md:w-2/3 mx-auto bg-white p-4 md:p-10 rounded my-10 flex-grow'>
           
            <div className='my-2'>
                <h1 className='font-bold'>Q1. どんなサイトですか？</h1>
                <p>A. 匿名でテレビ番組の感想をリアルタイムで投稿できるサービスです。</p>
            </div>
            <hr className='py-2' />
            <div className='my-2'>
                <h1 className='font-bold'>Q2. 大阪と東京しかありませんが追加の予定はありますか？</h1>
                <p>A. 今後、利用者の反応を伺いつつ需要がありそうであれば追加する予定です。</p>
            </div>
            <hr className='py-2' />
            <div className='my-2'>
                <h1 className='font-bold'>Q3. 禁止事項はありますか?</h1>
                <p>A. 誹謗中傷、個人情報、暴言、その他不適切な投稿は禁止です。詳しくは<Link className=' mx-1 font-bold hover:underline' href="/terms">利用規約</Link>を確認ください。</p>
                 
                
            </div>
            
        </div>
        <footer className=' bg-green-200  p-4'>
          <div className='flex'>
            <div>
              <div className='flex items-center '>
                  <Image className=' w-10 h-10 ' src={tvimage2} alt="icon" />
                  <h1 className='text-3xl font-bold mx-2 '>テレビ感想.com</h1>
                </div>
              <h1 className='mx-4 md:mx-10 font-bold  '>- 匿名のテレビ感想SNS -</h1>
              <br />
              <div className='mx-4 md:mx-10 flex flex-col '>
                <Link  rel="noopener noreferrer"  className='text-blue-500 mx-2 font-bold' href="/about">このサイトについて</Link>
                <Link target="_blank" rel="noopener noreferrer"  className='text-blue-500 mx-2 font-bold' href="/terms">利用規約</Link>
              </div>
            
            </div>
            <div className='h-48'>
            広告
          </div>
          </div>
         
         <p> ©2024 @tv-kansou.com</p>
        </footer>

    </div>

  )
}

export default About