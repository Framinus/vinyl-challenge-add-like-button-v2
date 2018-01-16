import db from '../db'

export default function signIn(email, password) {
  return db.query('SELECT * FROM users WHERE email = $1', [email])
    .then((results) => {
      let decision
      if (results[0]) {
        if (results[0].password === password) {
          return results
        }
        return false
      }
      return false
    })
}
