import db from '../db'

export default function addLike(userId, albumId) {
  return db.one(`INSERT INTO user_likes (user_id, album_id) VALUES ($1, $2)
    RETURNING *`, [userId, albumId])
}
