```javascript
//Correct way to update data in firebase
db.ref('users/' + userId).update({
  name: 'John Doe',
  email: 'john.doe@example.com'
}).then(() => {
  console.log('Data updated successfully!');
}).catch((error) => {
  console.error('Error updating data:', error);
});
```