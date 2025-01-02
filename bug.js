```javascript
//Incorrect way to update data in firebase
db.ref('users/' + userId).set({
  name: 'John Doe',
  email: 'john.doe@example.com'
});

//Correct way to update data in firebase
db.ref('users/' + userId).update({
  name: 'John Doe',
  email: 'john.doe@example.com'
});
```