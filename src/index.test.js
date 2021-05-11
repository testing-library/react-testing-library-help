/*
Hi! Need help with React Testing Library? The best way to get it is by forking
this repository, making a reproduction of your issue (or showing what you're
trying to do), and posting a link to your fork on our Discord chat:

https://testing-library.com/discord
*/

// here's an example
import React from 'react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import {render, screen} from '@testing-library/react'

function Counter() {
  const [count, setCount] = React.useState(0)
  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>click me</button>
    </>
  )
}

test('renders counter', async () => {
  render(<Counter />)
  const count = screen.getByText('0')
  const button = screen.getByText(/click me/i)
  userEvent.click(button)
  expect(count).toHaveTextContent('1')
})
