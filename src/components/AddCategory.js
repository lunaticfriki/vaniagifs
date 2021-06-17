import { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({ setCategories }) => {
  const [value, setValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (value.trim().length <= 2) return
    setCategories((cats) => [value, ...cats])
    setValue('')
  }

  const handleChange = (e) => setValue(e.target.value)

  return (
    <div className="c-add-category">
      <form onSubmit={handleSubmit}>
        <input
          placeholder={'Search..'}
          value={value}
          type="text"
          onChange={handleChange}
        />
        <input type="submit" value="Add" />
      </form>
    </div>
  )
}

export default AddCategory

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
}
