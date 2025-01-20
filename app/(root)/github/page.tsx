"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { StaticImageData } from 'next/image'

const page = () => {
    const [username, setusername] = useState('')
    const [status, setstatus] = useState('Get feedback')
    const [avatar, setavatar] = useState<StaticImageData | null>(null)

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
            console.log("Data: ", data)
            setavatar(data.avatar_url)
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
    <Avatar>
  <AvatarImage src={`${avatar ? avatar : 'https://github.com/shadcn.png'}`} />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
    </div>
    </div>
  )
}

export default page
