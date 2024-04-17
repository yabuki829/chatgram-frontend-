import React, { useState,useEffect } from 'react'
import Image from "next/image";
import tvimage from "../public/tv2.png";
import tvimage2 from "../public/tv.png";
import watch_tv from "../public/watch_tv.svg";
import talk from "../public/talk.svg";
import smile from "../public/smile.svg";
import soon from "../public/soon.svg";

import { useRouter } from 'next/router';


import Script from 'next/script';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Link from 'next/link' 

import {database } from '../firebase/firebase'
import { ref, push,onValue } from "firebase/database";
import { getAuth, onAuthStateChanged, signInAnonymously, } from "firebase/auth";
import AdMain from '@/components/molecules/ad';



const Index = () => {
  const router = useRouter();
  const auth = getAuth();

  useEffect(() => {
    // const unsubscribe = onAuthStateChanged(auth, user => {
    //   if (user) {
    //     // ログインしていれば遷移する
    //     router.push('/tv');
    //     // alert("ログイン済み")
    //   }
    // });
    // return () => unsubscribe();
  }, []);

  const anonymousLogin = async () => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        // ログインしていれば遷移する
        router.push('/tv');
      }
      else {
        router.push('/tv');
        signInAnonymously(auth);
      }
    });
    return () => unsubscribe();
    // ログインしてTVに遷移する
    // alert("匿名でログインして遷移します")
    
  }
  
  return (
    <div className='bg-gray-100 min-h-screen'>
      
      <header className='md:flex md:justify-center md:items-center bg-blue-900'>
        
       <div className='flex justify-between md:block text-center p-4 md:my-10'>
        
        <div className='flex items-center '>
          <Image className=' w-10 h-10 ' src={tvimage} alt="icon" />
          <h1 className='md:text-3xl font-bold mx-2 text-white'>テレビ感想.com</h1>
        </div>
       </div>
      </header>


      <div>
        
        <div className="flex flex-col md:flex-row w-full">
            <div className="order-1 md:order-none w-full md:w-1/2 flex items-center justify-center my-10 flex flex-col justify-center items-center">
              <div className='p-4 w-4/5 md:bg-white rounded-full'>
               <h1 className="text-3xl font-bold pb-2 text-center ">すぐに参加できる!!</h1>
               <div className="md:flex justify-center items-center mx-auto rounded-full ">
                  <div className="flex flex-col items-center md:w-1/3 bg-white md:bg-transparent">
                    <h1 className="text-lg font-bold py-2">アプリ不要</h1>
                    <FontAwesomeIcon  className='text-blue-400 py-5'  style={{ fontSize: "48px" }}  icon={faCheckCircle} size="2x" />
                  </div>
                  
                  <div className="flex flex-col items-center md:w-1/3 bg-white md:bg-transparent">
                    <h1 className="text-lg font-bold">メールログイン不要</h1>
                    <FontAwesomeIcon  className='text-blue-400 py-5'  style={{ fontSize: "48px" }}  icon={faCheckCircle} size="2x" />
                  </div>
          
                  <div className="flex flex-col items-center md:w-1/3 bg-white md:bg-transparent">
                    <h1 className="text-lg font-bold">会員登録不要</h1>
                    <FontAwesomeIcon  className='text-blue-400 py-5'  style={{ fontSize: "48px" }}  icon={faCheckCircle} size="2x" />
                  </div>
            
                </div>
                <div className="flex justify-center">
                <button onClick={() => anonymousLogin()} className='bg-blue-400 px-4 py-2 rounded-md mt-2 text-white font-bold'>匿名でログインする</button>
                </div>
              </div>
              
              
            </div>
            <Image className='w-full md:w-1/2 ' src={soon} alt="icon" />
        </div>
         

        <div className="md:flex w-full">
            <Image className='w-full  md:w-1/2 ' src={watch_tv} alt="icon" />
            <div className="w-full md:w-1/2 flex items-center justify-center  ">
                <div className="md:-full text-center  md:bg-blue-200 p-2 md:px-10 py-10  rounded-full">
                    <h1 className='text-3xl font-bold'>テレビを見よう!!</h1>
                   
                    <p className='text-xl'>放送中の番組を確認して好きな番組を見よう</p>
                    <button onClick={() => anonymousLogin()} className='bg-blue-400 px-4 py-2 rounded-md mt-2 text-white font-bold'>匿名でログインする</button>
                </div>
            </div>
        </div>


        <div className="flex flex-col md:flex-row w-full">
            <div className="order-1 md:order-none w-full md:w-1/2 flex items-center justify-center">
                <div className="md:-full text-center  md:bg-red-200 p-2 md:px-10 py-10  rounded-full">
                    <h1 class="text-3xl font-bold">感想を言おう!!</h1>
                    <p class="text-xl">「今の面白かった」や「この俳優好き」など感想を言おう</p>
                    <button onClick={() => anonymousLogin()} className='bg-blue-400 px-4 py-2 rounded-md mt-2 text-white font-bold'>匿名でログインする</button>
                </div>
            </div>
            <Image className='w-full md:w-1/2 ' src={talk} alt="icon" />
        </div>

        <div className="md:flex w-full">
            <Image className='w-full  md:w-1/2 ' src={smile} alt="icon" />
            <div className="w-full md:w-1/2 flex items-center justify-center  ">
                <div className="md:-full text-center  md:bg-yellow-200 p-2 md:px-10 py-10  rounded-full">
                    <h1 className='text-3xl font-bold'>笑顔になろう!!</h1>
                   
                    <p className='text-xl'>このサイトはテレビを通じてみんなが笑顔になることを目指しています</p>
                    <button onClick={() => anonymousLogin()} className='bg-blue-400 px-4 py-2 rounded-md mt-2 text-white font-bold'>匿名でログインする</button>
                </div>
            </div>
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
            <div className=' justify-center my-2 md:flex hidden'>
        <AdMain admaxId="5dbd3319b921abe3753b3d433f896dad"/>
      </div>
              
            </div>
          </div>
         
         <p> ©2024 @テレビ感想.com</p>
        </footer>

    </div>
  )
}

export default Index