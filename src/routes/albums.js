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
  getAlbumById(req.params.albumID)
    .then(album => {
      albumLikedByUser(req.session.user.id, req.params.albumID)
        .then(likedByUser => {
          countLike(req.params.albumID)
            .then(likes => {
              res.render('albums/album', {album, likedByUser, likes})
            })
        })
    })
})

router.post('/:albumID/like', (req, res) => {
  const userId = req.session.user.id
  const {albumID} = req.params
  addLike(userId, albumID)
    .then((like) => {
      res.json({like})
    })
})

export default router
