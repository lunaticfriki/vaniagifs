import PropTypes from 'prop-types'
import { useFetchGifs } from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem'

const GifGrid = ({ category }) => {
  const { data: gifs, loading } = useFetchGifs(category)

  if (loading)
    return <h3 className="animate__animated animate__flash">Loading...</h3>

  return (
    <div className="c-category">
      <header>
        <h3 className="animate__animated animate__fadeIn">{category}</h3>
      </header>
      <section>
        {gifs.map((gif) => (
          <GifGridItem {...gif} key={gif.id} />
        ))}
      </section>
    </div>
  )
}

export default GifGrid

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
}
