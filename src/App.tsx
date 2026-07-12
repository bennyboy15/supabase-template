import { useState, useEffect } from 'react'
import { supabase } from './utils/supabase'
import './index.css'

interface ItemType {
  id: number,
  created_at: string,
  name: string
}

export default function App() {
  const [items, setItems] = useState<ItemType[]>([])

  useEffect(() => {
    async function getTodos() {
      const { data: items } = await supabase.from('test').select()

      if (items) {
        setItems(items)
      }
    }

    getTodos()
  }, [])

  return (
    <ul className='bg-red-500'>
      {items.map((i) => (
        <li key={i.id}>{i.name}</li>
      ))}
    </ul>
  )
}