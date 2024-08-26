"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, FormProvider, useFormContext, FormProps, FieldValues, FormProviderProps, UseFormReturn } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { ReactNode } from "react"



interface AuthFormProps{
    children: ReactNode
    formState: UseFormReturn<any>;
    onSubmit: () => void
}
export function AuthForm({children, onSubmit, formState}: AuthFormProps) {
    
   
  return (
    <Card className="w-[500px] border-2 border-red-100 ">
    <CardHeader>
      <CardTitle className='text-center'>Login</CardTitle>
      <CardDescription className='text-center'>Login to happy authors</CardDescription>
     </CardHeader>
     <CardContent>
     <Form {...formState}>
      <form onSubmit={onSubmit} className="space-y-8">
       {children}
      </form>
    </Form>
     </CardContent>
    </Card>
  
  )
}
