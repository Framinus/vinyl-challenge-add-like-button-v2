import '../env'
import { expect } from 'chai';
import { signUp } from '../../src/actions';
import db from '../../src/db';

describe('function signUp ', () => {

  it('should create a new row in the users table', () => {
    db.query('SELECT * FROM users')
      .then((beforeUsers) => {
        const count = beforeUsers.length
        signUp('John', 'john@gmail.com', 'secret')
          .then(() => {
            db.query('SELECT * FROM users')
              .then((afterUsers) => {
                expect(afterUsers.length).to.equal(count + 1)
              })
          })
      })
  })
})
