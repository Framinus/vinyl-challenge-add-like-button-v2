import db from '../db'

export default function countLike(albumId) {
  return db.one(`SELECT COUNT(user_id) FROM user_likes WHERE album_id=$1`, albumId)
}
