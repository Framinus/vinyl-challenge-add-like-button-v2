import db from '../db'

export default function checkEmailIsUsed(email) {
  return db.query('SELECT * FROM users WHERE email = $1', [email])
    .then((results) => {
      console.log(results);
      if (results.length === 0) {
        return false
      } else {
        return true
      }
    })
}
