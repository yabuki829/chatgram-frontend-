
import React from 'react'
import Link from 'next/link' 
const about = () => {
  return (
    <div className='bg-gray-100 h-screen'>
        <div className='flex justify-between md:justify-around items-center  bg-white  md:my-10'>
            <div className='text-center my-10'>
                <Link className='  text-3xl font-bold' href="/">Chatgram</Link>
            </div>
            <div>
                <a className='mx-2 font-bold' href="">About</a>
                {/* <Link className=' mx-2 font-bold' href="/terms">利用規約</Link> */}
                </div>
            </div>
        
        <div className='md:w-2/3 mx-auto bg-white p-4 md:p-10 rounded'>
           
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
                <p>A. 誹謗中傷、個人情報、暴言、その他不適切な投稿は禁止です。詳しくは利用規約を確認ください。</p>
                 <Link className=' mx-2 font-bold' href="/terms">利用規約</Link>
                
            </div>
            
        </div>


    </div>

  )
}

export default about