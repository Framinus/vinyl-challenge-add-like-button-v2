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

router.get('/:albumID', (req, res) => {
  const albumAndLikes = {
    id: req.params.albumID,
    title: null,
    artist: null,
    like: false,
    count: null,
  }
  getAlbumById(req.params.albumID)
    .then((album) => {
      albumAndLikes.title = album.title
      albumAndLikes.artist = album.artist
    })
    .then(() => {
      return countLike(req.params.albumID)
        .then((count) => {
          albumAndLikes.count = count[0].count
        })
        .then(() => {
          return albumLikedByUser(req.session.user.id, req.params.albumID)
            .then((liked) => {
              if (liked.length > 0) {
                albumAndLikes.like = true
              }
              res.render('albums/album', {albumAndLikes})
            })
        })
    })
    .catch((err) => {
      console.error(err)
    })
})

router.post('/:albumID/likes', (req, res) => {
  const userID = req.session.user.id
  const albumID = req.body.albumID
  return addLike(userID, albumID)
    .then((liked) => {
      res.json({liked})
    })
})

export default router
