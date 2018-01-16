import express from 'express'

import {
  getAlbums,
  getAlbumById,
  addLike,
  countLike
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
      res.render('albums/album', {album})
    })
})

export default router
