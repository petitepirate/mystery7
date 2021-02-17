# Bankly Bugs

#### Bug #1
authUser function() in auth middleware:  
change jwt.decode(token) to jwt.verify(token) so that the function now verifies tokens correctly.

#### Bug #2
getAll() method in user.js model:  
change static async getAll(username, password) to static async getAll() as the User class had unncessary paramaters for username and password.

#### Bug #3
router.get('/') for users.js:  
Get all users returns email and phone when it should only return username, first, and last names. Added:
```js
     users = users.map((user) => ({
      username: user.username,
      first_name: user.first_name,
      last_name: user.last_name
    }))
```

#### Bug #4
router.patch('/:username') for users.js:  
User cannot update their own info. Caused by requireAdmin middleware. Fixed by removing requireAdmin since that's being checked in the conditional.

#### Bug #5
router.patch('/:username') for users.js:  
Non-admins were able to set themselves as admins. Test was passing because Bug #4 was preventing user from updating their info in the first place. Added:
```js
    if (!req.curr_admin && req.body.admin) {
      throw new ExpressError('Only an admin can change this setting.', 401);
    }
```

#### Bug #6
router.patch('/:username') for users.js:   
Previously allowed username and password to be changed when that functionality is forbidden. Added:
```js
    if (req.body.username || req.body.password) {
      throw new ExpressError('Updating username or password not allowed.', 401);
    }
```
