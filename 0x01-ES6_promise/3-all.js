import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then((values) => {
      const allValues = { ...values[0], ...values[1] };
      const message = `${allValues.body} ${allValues.firstName} ${allValues.lastName}`;
      console.log(message);
    })
    .catch(() => console.log('Signup system offline'));
}
