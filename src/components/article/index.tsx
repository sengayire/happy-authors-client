import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import ArticleImage from "../article-image"
import { Badge } from "../ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { LuMessageCircle } from "react-icons/lu";
import { PiBookmarkSimpleBold } from "react-icons/pi";
import { PiShareFatBold } from "react-icons/pi";



type Props = {}

export function Article({}: Props) {
  return (
    <article>
        <Card className="h-full flex flex-col rounded-8 bg-white border-2 shadow-2xl border-gray-300">
          <CardHeader>
            <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <CardTitle>Paying for software is stupid… 10 free and open-source SaaS replacements</CardTitle>
                </CardHeader>
            <CardContent>
           <CardDescription className="relative flex flex-1 flex-col">
            <div className="flex min-h-px w-full items-center gap-2">
            <Badge className="rounded-md bg-wite border border-gray-500 text-gray-500">#Music</Badge>
            </div>
            <p className="py-2">Jul 26 . 3m read time</p>
           </CardDescription>
                <ArticleImage />
              <div className="flex pt-2 justify-end gap-4">
                <div className="flex gap-1">
              <LuMessageCircle size={25}/>
              <span>12</span>
                </div>
              <PiBookmarkSimpleBold size={25}/>
              <PiShareFatBold size={25}/>
              </div>
            </CardContent>
        </Card>
    </article>
  )
}