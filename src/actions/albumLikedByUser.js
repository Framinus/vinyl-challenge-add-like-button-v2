import db from '../db'

export default function albumLikedByUser(userId, albumId) {
  return db.oneOrNone(`SELECT * FROM user_likes
    WHERE user_id=$1 AND album_id=$2`, [userId, albumId])
}
