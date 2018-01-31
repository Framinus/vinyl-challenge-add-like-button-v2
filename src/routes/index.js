import express from 'express'

import albums from './albums'
import users from './users'
import authentication from './authentication'
import {addLike} from '../actions'

const routes = express.Router()

const isLoggedIn = (req, res, next) => {
  const currentUrl = req.url
  if (!req.session.user) {
    res.redirect(`/sign-in?REDIRECT_URL=${currentUrl}`)
  } else {
    res.locals.isLoggedIn = true
    next()
  }
}
routes.use('/', authentication)
routes.use(isLoggedIn)

routes.use('/users', users)
routes.use('/albums', albums)

routes.get('/', (req, res) => {
  res.redirect('/albums')
})

routes.post('/api/likes/:albumId', (req, res, next) => {
  const { albumId } = req.params
  const userId  = req.session.user.id
  addLike(userId, albumId)
  .then(like => {
    countLike(albumId)
    .then(totalLikes => {
      res.json({totalLikes})
    })
  })
})

// TODO: write the route that handles getLikes
export default routes
