"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useEffect, useState } from 'react'
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import Image from 'next/image'
import { fetchReadme } from '@varandas/fetch-readme'
import { AIfunction } from '@/components/AI.mjs'
import Footer from '@/components/Footer'
export interface userData {
  name: string;
  blog?: string;
  location?: string;
  company?: string;
  bio?: string;
  followers?: number;
  following?: number;
  public_repos?: number;
  profileReadme?: string;
  reposReadme: {
    name: string;
    description?: string;
    readme: string;
  }[];
}

const page = () => {
  console.log("github page: ", process.env.NEXT_PUBLIC_GEMINI_API_KEY)
  const [username1, setusername1] = useState('')
  const [username2, setusername2] = useState('')
  const [loading, setloading] = useState(false)
  const [status, setstatus] = useState('Battle 🔥')
  const [avatar1, setavatar1] = useState<string | null>(null);
  const [avatar2, setavatar2] = useState<string | null>(null)
  const [AiResponse, setAiResponse] = useState('')
  function GithubAnalyse(username1: string) {
    return {
      profile: `https://api.github.com/users/${username1}`,
      profileReadme: `https://raw.githubusercontent.com/${username1}/${username1}/main/README.md`,
      profileRepos: `https://api.github.com/users/${username1}/repos?per_page=1000`,
    }
  }
  const fetchGithubUserData = async(username: string, setAvatar: React.Dispatch<React.SetStateAction<string | null>>)=> {
    setloading(true)
    const userData: any = {
      profileReadme: "",
      reposReadme: [],
    };
    const urls = GithubAnalyse(username);
    try {
      let response = await fetch(urls.profile, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      let data = await response.json();
      const avatarResponse = await fetch(data.avatar_url);
      const avatarBlob = await avatarResponse.blob();
      const avatarObjectURL = URL.createObjectURL(avatarBlob);
      setAvatar(avatarObjectURL as unknown as string);
      userData.name = data.name;
      userData.blog = data.blog || null;
      userData.location = data.location || null;
      userData.company = data.company || null;
      userData.bio = data.bio || null;
      userData.followers = data.followers || 0;
      userData.following = data.following || 0;
      userData.public_repos = data.public_repos || 0;
      setstatus("readme...");
      try {
        const readme = await fetchReadme({
          username: username,
          repository: username,
        });
        userData.profileReadme = readme || "No readme found";
      } catch (error: any) {
        const errorMessage = String(error);
        if (errorMessage.includes("404")) {
          userData.profileReadme = "No readme found";
        } else {
          console.error("Unexpected error fetching README:", errorMessage);
          setloading(false)
        }
      }
  
      // Fetch user repositories
      setstatus("repos...");
      try {
        response = await fetch(urls.profileRepos, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const reposData = await response.json();
      
        // Filter and process repositories
        const reposWithStarOrFork = reposData.filter(
          (repo: any) => repo.stargazers_count > 0 || repo.forks > 0
        );
      
        // Fetch READMEs for repositories along with descriptions
        for (const repo of reposWithStarOrFork) {
          try {
            const readme = await fetchReadme({
              username: username,
              repository: repo.name,
            });
      
            userData.reposReadme.push({
              name: repo.name,
              description: repo.description || "No description available",
              readme: readme,
            });
          } catch (error) {
            userData.reposReadme.push({
              name: repo.name,
              description: repo.description || "No description available",
              readme: "No readme found",
            });
          }
        }
      } catch (error) {
        console.log("Error fetching repositories: ", error);
        setloading(false)
      }
    } catch (error) {
      setloading(false)
      setstatus("Battle 🔥");
      console.log("Error in fetchGithubUserData: ", error);
    }
    setstatus("Battling...");
    return userData;
  }
  
  
  const runFunc = async() =>{
    const user1Data = await fetchGithubUserData(username1, setavatar1);
    const user2Data = await fetchGithubUserData(username2, setavatar2);
    const final = await AIfunction({user1Data, user2Data})
    setAiResponse(final)  
    setstatus("Battle 🔥")
    setloading(false)
  }
  
  const resetFunction = async ()=>{
    setAiResponse("")
    setavatar1(null)
    setavatar2(null)
    setusername1('')
    setusername2("")
  }
  useEffect(() => { 
    if(username1.length <= 3 || username2.length <= 3){
      setloading(true)
    }else{
      setloading(false)
    }
  }, [username1, username2])
  
  return (
    <div className='min-h-60 w-full pt-6 flex flex-col gap-6 justify-center items-center'>
      <div className='flex gap-10'>
        {/* <Image src={dogImg} alt='alt'/> */}
        <Avatar>
          <AvatarImage
            sizes="900px"
            src={`${avatar1 ? avatar1 : '/dog.jpg'}`}
            height={500}
            className="rounded-full transform transition-transform duration-300 hover:scale-110"
          />
        </Avatar>
        <Avatar>
          <AvatarImage
            sizes="900px"
            src={`${avatar2 ? avatar2 : '/dog.jpg'}`}
            height={500}
            className="rounded-full transform transition-transform duration-300 hover:scale-110"
          />
        </Avatar>

      </div>
      <div className="flex w-full max-w-md items-center space-x-2 pt-10 ">
          <Input value={username1} onChange={(e) => setusername1(e.target.value)} type="text" placeholder="username1" title='username1' />
          <Input value={username2} onChange={(e) => setusername2(e.target.value)} type="text" placeholder="username2" title='username2' />
      </div>
      <div className='flex gap-5'>
        <Button variant={'outline'} className={`min-w-28 ${loading ? 'cursor-not-allowed': 'cursor-pointer'}`} onClick={resetFunction} disabled={loading && true}>Reset</Button>
        <Button onClick={runFunc} type="submit"disabled={loading && true} className={` ${loading ? 'cursor-not-allowed': 'cursor-pointer'}`} >{status}</Button>
      </div>
      <div className='mt-5 w-full py-3 flex justify-center items-center mb-14'>
        {
          AiResponse.length <= 2 ?  
          <Image src={'/rexx.gif'} alt='chilling' width={300} height={300} className='bg-transparent'/> : 
          <div className=' px-7 container flex border dark:border-white border-black w-3/5 pt-5 flex-col font-second'>
            <h2 className='text-lg font-bold font-second border-b border-gray-800 dark:border-gray-300 py-2 mb-4'>Response 🔥</h2>
            <div className='font-semibold text-base pb-5'>{AiResponse}</div>
          </div>
        }
       
      </div>
      <Footer/>
    </div>
  )
}

export default page
