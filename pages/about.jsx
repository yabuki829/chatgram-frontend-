
import React, { useState } from 'react'
import Link from 'next/link' 
import Image from "next/image";
import tvimage from "../public/tv2.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane,faBars } from '@fortawesome/free-solid-svg-icons';

const About = () => {


  return (
    <div className='bg-gray-100 h-screen'>
       <header className='flex justify-center items-center bg-blue-500'>
       <div className='block items-center text-center my-4 md:my-10'>

        <Link href="/" className='flex items-center '>
          <Image className=' w-10 h-10 ' src={tvimage} alt="icon" />
          <h1 className='text-3xl font-bold mx-2 text-white'>テレビ感想.com</h1>
        </Link>
       
        <h1 className='text-white font-bold'>このサイトについて</h1>
  
       
       </div>

      </header>
     


        <div className='md:w-2/3 mx-auto bg-white p-4 md:p-10 rounded my-10'>
           
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
        <div className='mx-4 md:mx-10'>
        <Link  target="_blank" rel="noopener noreferrer"  className='text-blue-500 mx-2 font-bold' href="/about">このサイトについて</Link>
        <Link target="_blank" rel="noopener noreferrer"  className='text-blue-500 mx-2 font-bold' href="/terms">利用規約</Link>
      </div>

    </div>

  )
}

export default About