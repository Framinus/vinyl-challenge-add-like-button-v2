import db from '../db'

export default function countLike(albumId) {
  return db.any(`SELECT COUNT(*) FROM userlikes
    WHERE album_id =$1`, albumId)
}
