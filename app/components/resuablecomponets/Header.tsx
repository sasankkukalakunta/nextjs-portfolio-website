import React from 'react'

type HeaderProps = {
  title: string;
}
export const Header = ({ title }: HeaderProps) => {
  return (
<h1 className='text-3xl lg:text-4xl font-bold text-center py-5 bg-gradient-to-r from-neutral-500 to-neutral-300 text-transparent bg-clip-text'>
{title}
</h1> 
 )
}
