import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((res) => {
      const message = `${res[0].body} ${res[1].firstName} ${res[1].lastName}`;
      console.log(message);
    })
    .catch(() => console.log('Signup system offline'));
}
