import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then((values) => {
      const message = `${values[0].body} ${values[1].firstName} ${values[1].lastName}`;
      console.log(message);
    })
    .catch(() => console.log('Signup system offline'));
}
