import React from 'react';
import { IoNotificationsOutline } from "react-icons/io5";
import { Input } from "../ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";


type Props = {}

export default function Header({}: Props) {
  return (
    <nav className="flex  justify-between border-b border-gray-400 shadow-lg py-4 px-8 sticky top-0 bg-white z-10">
        <a>Happy.Authors</a>
        <div>
            <Input  className="border border-gray-700 w-96" placeholder="Search"/>
        </div>
        <div className="flex gap-4 items-center">
        <IoNotificationsOutline size={30} />
        <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </div>
    </nav>
  )
}