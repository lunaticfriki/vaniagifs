import PropTypes from 'prop-types'

const GifGridItem = ({ title, url }) => {
  return (
    <li className="c-gif-card">
      <a href={url} target="__blank">
        <img src={url} alt={title} />
        <h4>{title}</h4>
      </a>
    </li>
  )
}

export default GifGridItem

GifGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}
