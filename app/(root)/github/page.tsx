"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image, { StaticImageData } from 'next/image'
import { fetchReadme } from '@varandas/fetch-readme'
interface userData {
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
    readme: string;
  }[];
}
const page = () => {
  const [username1, setusername1] = useState('')
  const [username2, setusername2] = useState('')
  const [status, setstatus] = useState('Get feedback')
  const [avatar1, setavatar1] = useState<StaticImageData | null>(null)
  const [avatar2, setavatar2] = useState<StaticImageData | null>(null)
  // init userData
  const user1Data: userData = {
    name: "",
    reposReadme: [],
  };
  function GithubAnalyse(username1: string) {
    return {
      profile: `https://api.github.com/users/${username1}`,
      profileReadme: `https://raw.githubusercontent.com/${username1}/${username1}/main/README.md`,
      profileRepos: `https://api.github.com/users/${username1}/repos?per_page=1000`,
    }
  }
  async function fetchGithubUserData(username: string, setAvatar: React.Dispatch<React.SetStateAction<StaticImageData | null>>) {
    const userData: any = {
      profileReadme: "",
      reposReadme: [],
    };
    const urls = GithubAnalyse(username);
    try {
      // Fetch user profile
      let response = await fetch(urls.profile, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      let data = await response.json();
      // Fetch avatar as a Blob and convert it to a compatible format
      const avatarResponse = await fetch(data.avatar_url);
      const avatarBlob = await avatarResponse.blob();
      const avatarObjectURL = URL.createObjectURL(avatarBlob); // Generate a local URL
      setAvatar(avatarObjectURL as unknown as StaticImageData); // Cast as StaticImageData
  
      // Other user profile data
      userData.name = data.name;
      userData.blog = data.blog || null;
      userData.location = data.location || null;
      userData.company = data.company || null;
      userData.bio = data.bio || null;
      userData.followers = data.followers || 0;
      userData.following = data.following || 0;
      userData.public_repos = data.public_repos || 0;
      // Fetch user's README
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
        const reposNames = reposWithStarOrFork.map((repo: any) => repo.name);
  
        // Fetch READMEs for repositories
        setstatus("repos readme...");
        for (const repo of reposNames) {
          try {
            const readme = await fetchReadme({
              username: username,
              repository: repo,
            });
            userData.reposReadme.push({
              name: repo,
              readme: readme,
            });
          } catch (error) {
            userData.reposReadme.push({
              name: repo,
              readme: "No readme found",
            });
          }
        }
      } catch (error) {
        console.log("Error fetching repositories: ", error);
      }
  
      setstatus("Get feedback");
    } catch (error) {
      setstatus("Get feedback");
      console.log("Error in fetchGithubUserData: ", error);
    }
  
    return userData;
  }
  
  
  async function runFunc() {
    setstatus("Loading...");
    
    const user1Data = await fetchGithubUserData(username1, setavatar1);
    const user2Data = await fetchGithubUserData(username2, setavatar2);
  
    console.log("User 1 Data: ", user1Data);
    console.log("User 2 Data: ", user2Data);
  }
  
  
  
  return (
    <div className='min-h-60 w-full flex flex-col gap-6 justify-center items-center'>
      <div className="flex w-full max-w-sm items-center space-x-2 pt-10 ">
        <div className='flex flex-col gap-3'>
          <Input value={username1} onChange={(e) => setusername1(e.target.value)} type="text" placeholder="username1" title='username1' />
          <Input value={username2} onChange={(e) => setusername2(e.target.value)} type="text" placeholder="username2" title='username2' />
        </div>
        <Button onClick={runFunc} type="submit" >{status}</Button>
      </div>
      <div className='flex gap-10'>
        {/* <Image src={dogImg} alt='alt'/> */}
        <Avatar>
          <AvatarImage sizes='900px' src={`${avatar1 ? avatar1 : '/dog.jpg'}`} height={500} className="rounded-full" />
        </Avatar>
        <Avatar>
          <AvatarImage sizes='900px' src={`${avatar2 ? avatar2 : '/dog.jpg'}`} height={500} className="rounded-full" />
        </Avatar>
      </div>
      
    </div>
  )
}

export default page
