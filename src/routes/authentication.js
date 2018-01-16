import express from 'express'
import session from 'express-session'

import {
  checkEmailIsUsed,
  signIn,
  signUp,
} from '../actions'

const router = express.Router()

router.get('/sign-up', (req, res) => {
  res.render('authentication/sign-up', {error:null})
})

router.post('/sign-up', (req, res) => {
  const {name, password} = req.body
  const email = req.body.email.toLowerCase()
  if (name === '' || email === '' || password === '') {
    res.render('authentication/sign-up', {error: ' Please fill in all the fields'})
  } else {
    checkEmailIsUsed(email)
      .then((used) => {
        if (used) {
          res.render('authentication/sign-up', {error: 'That email is in use.'})
        } else {
          signUp(name, email, password)
            .then(() => res.redirect('/'))
        }
      })
  }
})

router.get('/sign-in', (req, res) => {
  res.render('authentication/sign-in', {error: null})
})

router.post('/sign-in', (req, res) => {
  const {email, password} = req.body
  signIn(email, password)
    .then((user) => {
      if (user) {
        console.log("SIGNIN RESULT::", user)
        req.session.user = user[0]
        res.redirect('/info')
      } else {
        res.render('authentication/sign-in', {error: 'Incorrect username or password'})
      }
    })
})

// router.get('/:albumID', (req, res, next) => {
//   getAlbumById(req.params.albumID)
//     .then(album => res.render('albums/album', {album}))
//     .catch(next)
// })

export default router
