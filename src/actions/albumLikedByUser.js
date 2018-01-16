import db from '../db'

export default function albumLikedByUser(userId, albumId) {
  return db.any(`
    SELECT * FROM user_likes
    WHERE user_id=$1
    AND album_i=$2
    `)
}
