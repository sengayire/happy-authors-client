import React from 'react'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Control } from 'react-hook-form'

interface InputFieldProps { 
    label: string, 
    message?: string,
    name?: string,
    placeholder?: string
    control?: Control,
}

export function InputField({ name, label, control, message, placeholder}: InputFieldProps) {
  return (
   
    <FormField
          control={control}
          name={name ?? ''}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{label}</FormLabel>
              <FormControl>
                <Input className='border-2 border-red-600' placeholder={placeholder} {...field} />
              </FormControl>
              <FormDescription className='text-red-600'>
                {message}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
  )
}