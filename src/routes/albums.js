import express from 'express'

import {
  getAlbums,
  getAlbumById,
  addLike,
  countLike,
  albumLikedByUser,
} from '../actions'

const router = express.Router()

router.get('/', (req, res, next) => {
  getAlbums()
    .then(albums => res.render('albums/index', {albums}))
    .catch(next)
})

router.get('/:albumID', (req, res, next) => {
  const userId = req.session.user.id
  console.log('userId', userId)
  getAlbumById(req.params.albumID)
    .then((album) => {
      return countLike(req.params.albumID)
        .then((likes) => {
          console.log('likes', likes)
          return albumLikedByUser(userId, req.params.albumID)
            .then((isLiked) => {
              console.log('isLiked', isLiked)
              res.render('albums/album', {album, likes, isLiked, userId})
            })
            .catch((err) => {
              throw new Error(err)
            })
        })
        .catch((err) => {
          throw new Error(err)
        })
    })
    .catch((err) => {
      console.error(err)
    })
})

router.post('/:albumID', (req, res) => {
  const userId = req.session.user.id
  addLike(userId, req.params.albumID)
    .then((liked) => {
      res.json({liked})
    })
    .catch((err) => {
      console.error(err)
    })
})

export default router
