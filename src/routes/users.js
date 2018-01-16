import express from 'express'

import {
  getUserById
} from '../actions'

const router = express.Router()

router.get('/:id', (req, res, next) => {
  getUserById()
    .then(albums => res.render('albums/index', {albums}))
    .catch(next)
})

router.get('/:id/edit', (req, res, next) => {
  getAlbumById(req.params.albumID)
    .then(album => res.render('albums/album', {album}))
    .catch(next)
})

export default router
