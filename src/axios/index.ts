import axios from "axios";
// auth
export const login = async (username: string, password: string) => {
  const user = await axios.post(
    `${process.env.NEXT_PUBLIC_API_HOST}/auth/login`,
    {
      username: username,
      password: password,
    }
  );

  return user.data;
};

export const signup = async (
  username: string,
  email: string,
  password: string
) => {
  const user = await axios.post(
    `${process.env.NEXT_PUBLIC_API_HOST}/auth/signup`,
    {
      username: username,
      email: email,
      password: password,
    }
  );

  return user.data;
};
