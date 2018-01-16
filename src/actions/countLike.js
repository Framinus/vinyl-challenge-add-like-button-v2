import db from '../db'

export default function countLike(albumId) {
  return db.any(`SELECT * FROM user_likes
    WHERE album_id =$1`, albumId)
}
