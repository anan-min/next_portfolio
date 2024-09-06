import React from 'react'
import { Button } from '@/components/ui/button'

const page = () => {
  return (
    <section>
      <div className='container'>
        <h1 className='text-5xl font-bold'>test this tailwind</h1>
        <Button variant="outline">Press this</Button>
      </div>
    </section>
  )
}

export default page