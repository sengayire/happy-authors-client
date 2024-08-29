import { Article } from "@/components"
import Header from "@/components/header";
import React from "react"


export function Articles() {
  return (
    <div>
      <Header />
     <div className="px-52">
     <div className="grid mt-8 gap-6 grid-cols-3">
     <Article />
     <Article />
     <Article />
     <Article />
     <Article />
     <Article />
     <Article />
     <Article />
     <Article />
     </div>
    </div>
    </div>
  )
}