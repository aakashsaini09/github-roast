"use client"
import Link from 'next/link';
import { ModeToggle } from './Mode-toggle';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

const Navbar = () => {

    return (
        <nav className="bg-background/50 dark:clearNav sticky backdrop-blur-sm top-0 py-2 md:py-3 px-2 md:px-10 z-50 dark:bg-black dark:bg-opacity-70 dark:backdrop-blur-[5px]">
            <div className="container mx-auto px-4 py-2 justify-between items-center md:flex hidden">
                <Link href="/">
                    <span className="text-xl font-bold">AakashBlog</span>
                </Link>
                <div className="space-x-4 flex items-center">
                    <Link href="/">
                        <span className="">Home</span>
                    </Link>
                    <Link href="/about">
                        <span className="">About</span>
                    </Link>
                    <Link href="/contact">
                        <span className="">Contact</span>
                    </Link>
                    <Link href="/blog">
                        <span className="">Blog</span>
                    </Link>
                    <ModeToggle />
                </div>
            </div>

            <div className='md:hidden flex container mx-auto px-4 py-2 justify-between items-center'>
                <div className='font-bold text-accent'>AakashBlog</div>

                <Sheet>
                    <div className='my-auto flex justify-center items-center gap-2'>
                        <ModeToggle />
                        <SheetTrigger>
                            <div className="md:hidden md:mt-2 outline-none focus:border-0">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </div>
                        </SheetTrigger>
                    </div>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle className='font-bold pt-5 mb-10'>AakashBlog</SheetTitle>
                            <SheetDescription>
                                <div className="space-x-2 flex flex-col justify-center gap-9 h-full items-center">
                                    <Link href="/">
                                        <span className="">Home</span>
                                    </Link>
                                    <Link href="/about">
                                        <span className="">About</span>
                                    </Link>
                                    <Link href="/contact">
                                        <span className="">Contact</span>
                                    </Link>
                                    <Link href="/blog">
                                        <span className="">Blog</span>
                                    </Link>
                                </div>
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    );
};

export default Navbar;