// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

const user = {
  id: 1,
  created_at: '2021-12-13T00:17:29+00:00',
  name: 'Tanman',
  avatar: 'https://thumbs.gfycat.com/NiceRequiredGrunion-size_restricted.gif',
  header: 'https://static.wikia.nocookie.net/naruto/images/5/50/Team_Kakashi.png',
  likes: ['React', 'Anime', 'Traveling', 'Living', 'Tower Defense Games', 'Card Games'],
  motto: 'Res Non Verba',
  color: 'crimson',
}

// 🚨 Create your server
// eslint-disable-next-line import/prefer-default-export
export const server = setupServer(
  rest.get(`${process.env.REACT_APP_SUPABASE_URL}/rest/v1/users`, (req, res, ctx) => {
    return res(ctx.json([user]))
  })
)

// 🚨 Listen for server start
beforeAll(() => server.listen())

// 🚨 Close server when complete
afterAll(() => server.close())
