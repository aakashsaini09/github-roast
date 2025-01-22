"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useEffect, useState } from 'react'
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import Image from 'next/image'
import { fetchReadme } from '@varandas/fetch-readme'
import { AIfunction } from '@/components/AI.mjs'
import Footer from '@/components/Footer'
import Chart from '@/components/Chart'
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
  const [username1, setusername1] = useState('')
  const [username2, setusername2] = useState('')
  const [loading, setloading] = useState(false)
  const [status, setstatus] = useState('Battle 🔥')
  const [avatar1, setavatar1] = useState<string | null>(null);
  const [avatar2, setavatar2] = useState<string | null>(null)
  const [chartData, setchartData] = useState([{}])
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
    const temp = processResponse(final)
    setchartData(temp)
    setstatus("Battle 🔥")
    setloading(false)
  }
  const processResponse = (response: any) => {
    try {
      // Extract the JSON block within triple backticks
      const jsonMatch = response.match(/```json\s*([\s\S]*?)\s*```/);
  
      if (jsonMatch && jsonMatch[1]) {
        // Extract the string part (everything before the JSON block)
        const stringPart = response.split("```json")[0].trim();
  
        // Set the string part to AiResponse
        setAiResponse(stringPart);
  
        // Parse the JSON content
        const resultJson = JSON.parse(jsonMatch[1]);
  
        return resultJson; // Return the JSON array if needed
      } else {
        console.error("No JSON block found in the response.");
  
        // If no JSON block is found, set the full response as the string
        setAiResponse(response.trim());
        return null;
      }
    } catch (error) {
      console.error("Failed to parse the JSON block:", error);
  
      // Set the full response as the string if parsing fails
      setAiResponse(response.trim());
      return null;
    }
  };
  
  


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
  // let temp2 = [
  //   { Skill: "Visiblity", Aman: 186, Aakash: 80 },
  //   { Skill: "Repos", Aman: 305, Aakash: 200 },
  //   { Skill: "Profile README", Aman: 237, Aakash: 120 },
  //   { Skill: "Repos Readme", Aman: 73, Aakash: 190 },
  //   { Skill: "Popular", Aman: 209, Aakash: 130 },
  //   { Skill: "Overall", Aman: 214, Aakash: 140 },
  // ]
  return (
    <div className='min-h-60 w-full pt-6 flex flex-col gap-6 justify-center items-center font-second'>

      <div className='flex gap-10'>
        <Avatar className='border-2 border-black dark:border-white'>
          <AvatarImage sizes="900px" src={`${avatar1 ? avatar1 : '/profile.jpg'}`} className="rounded-full transform transition-transform duration-300 hover:scale-110 " />
        </Avatar>
        <div className="text-sm h-[30%] my-auto sm:text-base md:text-xl lg:text-4xl font-black bg-black text-white dark:bg-white dark:text-gray-800 font-second px-2 py-1 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-xl shadow-2xl transform hover:scale-110 transition-transform duration-300">VS</div>
        <Avatar className='border-2 border-black dark:border-white'>
          <AvatarImage sizes="900px" src={`${avatar2 ? avatar2 : '/profile.jpg'}`} className="rounded-full transform transition-transform duration-300 hover:scale-110" />
        </Avatar>
      </div>
      <div className="flex w-full max-w-md items-center space-x-2 pt-10">
          <Input value={username1} onChange={(e) => setusername1(e.target.value)} type="text" placeholder="username1" title='username1' />
          <Input value={username2} onChange={(e) => setusername2(e.target.value)} type="text" placeholder="username2" title='username2' />
      </div>
      <div className='flex gap-10'>
        <Button variant={'outline'} className={`min-w-24  flex justify-center items-center ${loading ? 'cursor-not-allowed': 'cursor-pointer'}`} onClick={resetFunction} disabled={loading && true}>Reset</Button>
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
      {/* <Button onClick={getChart}>Get Chart</Button> */}
      {AiResponse.length >= 5 ? <div className='w-full'>
        <div className='w-[60%] mx-auto'>
          <h2 className='font-semibold font-second text-4xl py-6'>Profiles Analytics</h2>
        </div>
        <Chart chartDataArray={chartData}/>
      </div> : ''}
      <Footer/>
    </div>
  )
}

export default page
