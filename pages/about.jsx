
import React from 'react'
import Link from 'next/link' 
import Image from "next/image";
import tvimage from "../public/tv2.png";

const About = () => {
  return (
    <div className='bg-gray-100 h-screen'>
         <div className='flex justify-between md:justify-around items-center bg-blue-500'>
       <div className='flex md:block items-center text-center my-4 md:my-10'>

        <div className='hidden md:flex items-center '>
          <Image className=' w-10 h-10 ' src={tvimage} alt="icon" />
          <Link className='  text-3xl font-bold text-white mx-2' href="/">テレビ感想.com</Link>
        </div>
       
        <Image className='block md:hidden w-20 h-20 mx-5 md:mx-10' src={tvimage} alt="icon" />
  
        <select className='bg-white border' onChange={(e) => handleChange(e)}>
          <option value="大阪">大阪</option>
          <option value="東京">東京</option>
              
        </select>
       </div>
       <div>
          <Link className='mx-2 font-bold hover:underline text-white mx-10' href="/about">About</Link>
        </div>

      </div>
        
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


    </div>

  )
}

export default About