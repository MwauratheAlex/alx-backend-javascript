import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const uploadPhotoRes = await uploadPhoto();
  const createUserRes = await createUser();

  return {
    photo: uploadPhotoRes,
    user: createUserRes,
  };
}
