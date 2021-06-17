import { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const VaniaGifApp = () => {
  const [categories, setCategories] = useState([''])

  return (
    <div className="c-vaniagif">
      <header>
        <h1 className="c-gif-card animate__animated animate__bounce">
          Vaniagifs!
        </h1>
        <AddCategory setCategories={setCategories} />
      </header>
      <ol>
        {categories.map((category) => (
          <GifGrid category={category} key={category} />
        ))}
      </ol>
    </div>
  )
}

export default VaniaGifApp
