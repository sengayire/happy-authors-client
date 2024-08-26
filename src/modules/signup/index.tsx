'use client';

import { AuthForm, InputField } from '@/components';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';


import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

export function SignupPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <div className='flex items-center justify-center h-screen'>
     <AuthForm onSubmit={form.handleSubmit(onSubmit)} formState={form} >
      <InputField label='Username' />
      <InputField label='email' />
      <InputField label='Password' />
      <InputField label='Confirm password' />
     <Button type="submit">Signup</Button>
     </AuthForm>
    </div>
  )
}