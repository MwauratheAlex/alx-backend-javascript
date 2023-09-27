import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const uploadPhotoRes = await uploadPhoto();
    const createUserRes = await createUser();

    return {
      photo: uploadPhotoRes,
      user: createUserRes,
    };
  } catch (e) {
    return {
      photo: null,
      user: null,
    };
  }
}
