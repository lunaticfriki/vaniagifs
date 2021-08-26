import { render } from '@testing-library/react'
import VaniaGifApp from '../VaniaGifApp'

test('VaniaGifApp renders', async () => {
  const { findAllByRole } = render(<VaniaGifApp />)
  const titles = await findAllByRole('heading')
  expect(titles[0]).toHaveTextContent(/vaniagifs/i)
})
