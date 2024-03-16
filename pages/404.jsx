// pages/404.js
import React from 'react';
import Link from 'next/link' 
const Custom404 = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='text-center  '>
      <h1 className=' text-4xl font-bold'>404 - Page Not Found</h1>
      <p>お探しのページは見つかりませんでした。</p>
      <Link className='font-bold' href="/">ホームに戻る</Link>

      </div>
    </div>
  );
}

export default Custom404;
