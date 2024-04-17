import React, { useState,useEffect } from 'react'
import Image from "next/image";
import tvimage from "../public/tv2.png";
import tvimage2 from "../public/tv.png";
import axios from "axios";
import {database } from '../firebase/firebase'
import { ref, push,onValue } from "firebase/database";
import { getAuth, onAuthStateChanged, signInAnonymously, } from "firebase/auth";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane,faBars } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link' 
import channels from "../channels"


import { useRouter } from 'next/router';


const Tv = () => {
  const router = useRouter();

  const [showContent, setShowContent] = useState(false);
  const [location,setLocation] =  useState("大阪");
  const [program, setProgram] = useState({
    id: "",
    title: "",
    detail: "",
    start_time: "",
    end_time: "",
    tv_station: "",
    room: "d"
  });

  const [userId,setUserId] =  useState("none");

  const [messages, setMessages] = useState([]);

  const [message, setMessage] = useState('');

  const auth = getAuth();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        // ユーザーがログインしている
        // console.log("ユーザーがログインしています:", user);
        setUserId(user.uid)
        // ここでバンされているアカウントか確認する
        // console.log("バンされているか確認します")
        
      } else {
        // ユーザーがログアウトしている場合、ホーム画面に戻る
        router.push('/');
      }
    });
    return () => unsubscribe();
  }, []);


  
  useEffect(() => {
    const dbRef = ref(database, program.room);
    const unsubscribe = onValue(dbRef, (snapshot) => {
      const value = snapshot.val();

      const messages = value ? Object.entries(value).map(([key, msg]) => ({
        ...msg, 
        id: key 
      })) : [];
  
      console.log(messages);
      setMessages(messages);
    });
  
    return () => unsubscribe();
  }, [program]);



  
  useEffect(() => {
    setShowContent(false)
    
  }, [location]);
  

  const getRelativeTime = (timestamp) => {
    const now = new Date();
    const messageDate = new Date(timestamp);
    const diffInSeconds = Math.round((now - messageDate) / 1000);
  
    if (diffInSeconds < 60) {
      return `${diffInSeconds}秒前`;
    } else if (diffInSeconds < 3600) {
      return `${Math.floor(diffInSeconds / 60)}分前`;
    } else if (diffInSeconds < 86400) {
      return `${Math.floor(diffInSeconds / 3600)}時間前`;
    } else {
      return `${Math.floor(diffInSeconds / 86400)}日前`;
    }
  };

  const formatTime = (time) => {
    const date = new Date(time);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
  
    return `${hours}:${minutes}`;
  };
  
  const sendMessage = async () => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      try {
        const dbRef = ref(database,program.room)
        if (message === ""){
          return
        }
        

        await push(dbRef, {
          userId: user.uid, 
          message: message,
          timestamp: new Date().toISOString(),

        });
        // console.log('Message sent successfully.');
      } catch (e) {
        console.error('Error sending message:', e);
      }
    } else {
      console.log('error user ');
    }
    setMessage("");

  };


  const handleMessageChange = (event) => {
      setMessage(event.target.value);
  };

  const swith_channel = (number) => {
    setProgram({
      id: "",
      title: "",
      detail: "",
      start_time: "",
      end_time: "",
      tv_station: "",
      room: "d"
    })
    setMessages([])
    setShowContent(true);
    // console.log(location)
    // alert(location+"の"+number+"チャンネルの番組を取得する")
    // const url = "http://127.0.0.1:8000/api/programs/";
    const url = process.env.NEXT_PUBLIC_BACKEND_URL + "api/programs"
    const data = {
      "channel": number,
      "location":location
    }
    axios.get(url,{
      params: data
      })
      .then(response => {

        if (response.data["message"]) {
         
          setProgram(
            {
              id: "",
              title: "このチャンネルは現在未対応です",
              detail: "",
              start_time: "",
              end_time: "",
              tv_station: "",
              room: "d"
            }
            
          )
        }
        else {
          // console.log("データ",response.data);
          setProgram(response.data)
        }
        
        
      })
      .catch(error => {
        console.error('番組情報の取得中にエラーが発生しました', error);
      });
    
  };
  const handleChange = (e) => {
    setLocation(e.target.value)
  }
  
  
  
  return (
    <div className='bg-gray-100 min-h-screen'>
      
      <header className='md:flex md:justify-center md:items-center bg-blue-900'>
        
       <div className='flex justify-between md:block text-center p-4 md:my-10'>

        <div className='flex items-center '>
          <Image className=' w-10 h-10 ' src={tvimage} alt="icon" />
          <h1 className='md:text-3xl font-bold mx-2 text-white'>テレビ感想.com</h1>
        </div>
       
       
  
        <select className='bg-white border' onChange={(e) => handleChange(e)}>
          <option value="大阪">大阪</option>
          <option value="東京">東京</option>
              
        </select>
       </div>
     
     

      </header>
     

      {
        showContent ? (
        <div className='md:w-2/3 mx-auto bg-white p-4 md:p-10 rounded my-10' >
            <div className='bg-gray-800 border-2 border-black p-2  shadow '>
            <div className=' flex  items-center '>
              <button className='bg-white border-2 rounded-full w-8 h-8 md:w-12 md:h-12 flex items-center justify-center my-5 mr-2 flex-shrink-0' onClick={() => setShowContent(false)} >←</button>
              {program.id !== "" && (
                <p className='text-green-400  text-2xl font-bold'> {formatTime(program.start_time)} ~ {formatTime(program.end_time)}</p>
              )}
              </div>
              <div className='flex  items-center '>
                <h1 className='text-white md:mx-4 font-bold text-2xl md:text-3xl '>{program.title}</h1>
                
              </div>
            </div>
          <div>

          <div className='flex justify-center '>
            <div className="border-x-4 h-2 w-2 border-black "></div>
          </div>
          <div className='flex justify-center mb-2'>
            <div className="border-y-4 w-32 md:w-48 h-2 border-black rounded "></div>
          </div>
           
            <div>
             
              {messages.map((msg, index) => (
                <div id={msg.id} key={msg.id} className='my-2'>
                  <hr />
                  {
                    msg.userId === userId ?
                    <>

                      <h1> {msg.userId}</h1>
                      <div className='flex justify-end'>
                        <p className='bg-blue-500 inline-block px-3 py-2 text-white rounded-full my-2 text'>{msg.message}</p> 
                      </div>
                      
                      <p className='text-gray-500'>{getRelativeTime(msg.timestamp)}</p>
                    </> :
                    <>
                      <h1> {msg.userId}</h1>
                      {/* 表示するのはメッセージのidではなくuseridにする */}
                      {/* スクロール先はmessageのid */}
                      <h1 className='text-sm text-blue-400'> ＞＞{msg.id}</h1>
                      <p className='bg-green-300 inline-block px-2 py-1 rounded-full my-2'>{msg.message}</p> 
                      <div className='flex justify-between'>
                        <p className='text-gray-500'>{getRelativeTime(msg.timestamp)} </p>
                        
                      </div>
                     
                    </>
                  }
                 
              
                </div>
                
                
              ))}
            </div>
        
            
            
           
            <hr />
            <br />
            {program.id !== "" && (
            <div>
              <h1><strong>誹謗中傷</strong>、<strong>個人情報</strong>、<strong>暴言</strong>、 <strong>その他不適切な投稿</strong>は禁止です。</h1>
               <Link target="_blank" rel="noopener noreferrer"  className='text-blue-500 mx-2 font-bold' href="/terms">利用規約</Link>
              <div className='flex'>
                <textarea className='w-full border p-2' type="text" value={message} onChange={handleMessageChange}  placeholder="メッセージを入力" />
                <button className='pl-1' onClick={sendMessage}>
                  <FontAwesomeIcon style={{ fontSize: "24px", color: "blue" }} icon={faPaperPlane} />
                </button>
              </div>
            </div>
            )}
           
        </div>
            
        </div>
        ):(
          <div className='md:w-1/3 mx-auto'>
              
            <div className='grid grid-cols-3'>
            {[...Array(12).keys()].map((number) => {
              const isInOsaka = channels[location].includes(number + 1);
              
              return (
                <div key={number} className='flex justify-center my-2'>
                  {isInOsaka ? (
                    <button
                      className='border-2 border-black bg-white md:hover:bg-blue-400 md:hover:text-white rounded-full w-24 md:w-32 h-24 md:h-32 text-3xl'
                      onClick={() => swith_channel(number + 1)}
                    >
                      {number + 1}
                    </button>
                  ) : (
                    <div className='border-2 border-black bg-gray-800 rounded-full w-24 md:w-32 h-24 md:h-32 text-3xl flex justify-center items-center'>
                      {number + 1}
                    </div>
                  )}
                </div>
              );
            })}

            </div>
          </div>
       
    
        )
      }
      
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
            
          </div>
          </div>
         
         <p> ©2024 @テレビ感想.com</p>
        </footer>

    </div>
  )
}

export default Tv