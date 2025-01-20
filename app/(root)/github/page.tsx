"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image, { StaticImageData } from 'next/image'
import { fetchReadme } from '@varandas/fetch-readme'
import dogImg from '@/public/dog.jpg'
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
    const [username, setusername] = useState('')
    const [status, setstatus] = useState('Get feedback')
    const [avatar, setavatar] = useState<StaticImageData | null>(null)
    // init userData
    const userData: userData = {
        name: "",
        reposReadme: [],
      };
    function GithubAnalyse (userName: string) {
        setstatus('Loading...')
        return{
            profile : `https://api.github.com/users/${userName}`,
            profileReadme: `https://raw.githubusercontent.com/${userName}/${userName}/main/README.md`,
            profileRepos: `https://api.github.com/users/${userName}/repos?per_page=1000`,
        }
    }
    async function runFunc(){
        const urls = GithubAnalyse(username);
        try {
            // Fetch the user profile
            setstatus("profile...");
            let response = await fetch(urls.profile, {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            });
            setstatus('Get feedback')
            let data = await response.json()
            setavatar(data.avatar_url)
            userData.name = data.name;
            userData.blog = data.blog || null;
            userData.location = data.location || null;
            userData.company = data.company || null;
            userData.bio = data.bio || null;
            userData.followers = data.followers || 0;
            userData.following = data.following || 0;
            userData.public_repos = data.public_repos || 0;
            // fetch user readme
            setstatus('fetch readme...')
            try{
              await fetchReadme({
                username: username,
                repository: username,
              }).then((readme: string) => {
                userData.profileReadme = readme;
              });
              setstatus('Get feedback')
               } catch (error) {
              setstatus('Get feedback')
              userData.profileReadme = "No readme found";
            }
            // fetch user repos
            setstatus('fetch repos...')
            response = await fetch(urls.profileRepos, {
              method: 'GET',
              headers: {
                "Content-Type": "application/json",
              },
            })
            data = await response.json()
            // Get the repos with star or fork
      const reposWithStarOrFork = data.filter(
        (repo: any) => repo.stargazers_count > 0 || repo.forks > 0
      );
      // Get the repos names
      const reposNames = await reposWithStarOrFork.map(
        (repo: any) => repo.name
      );

      // Fetch the repos data
      setstatus("repos data...");
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
          console.log("userData is: ", userData)
        } catch (error) {
          userData.reposReadme.push({
            name: repo,
            readme: "No readme found",
          });
        }
      }


        }catch(error){
        setstatus('Get feedback')
        console.log("error in catch block: ", error)
    }
}
  return (
    <div className='min-h-60 w-full flex flex-col justify-center items-center'>
        <div className="flex w-full max-w-sm items-center space-x-2">
      <Input value={username} onChange={(e) => setusername(e.target.value)} type="text" placeholder="Enter Username Only🙂" title='Username'/>
       <Button onClick={runFunc} type="submit" >{status}</Button>
    </div>
    <div>
      {/* <Image src={dogImg} alt='alt'/> */}
    <Avatar>
  <AvatarImage sizes='900px' src={`${avatar ? avatar : '/dog.jpg'}`} height={500} className="rounded-full" // Add Tailwind classes if required
 />
</Avatar>
    </div>
    </div>
  )
}

export default page
