import db from '../db'

export default function albumLikedByUser(userId, albumId) {
  return db.any(`
    SELECT * FROM userlikes
    WHERE user_id=$1
    AND album_id=$2
    `, [userId, albumId])
}
