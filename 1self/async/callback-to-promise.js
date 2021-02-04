class userStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
          (id === 'kdg' && password ==='cnanum') ||
          (id === 'coder' && password === 'asdf')
      ) {
        onSuccess(id);
      } else {
        onError(new Error('not found'));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === 'kdg') {
        onSuccess({name: 'kdg', role: 'admin'});
      } else {
        onError(new Error('no access'));
      }
    }, 1000)
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id,
    password,
    user => {
      userStorage.getRoles(
          user,
          userWithRole => {
            alert(
              'Hello $(userWithRole.name), you have a ${userWithRole.role} role'
            );
          },
          error => {
            console.log(error);
          }
      );
    },
    error => {
      console.log(error)
    }
);