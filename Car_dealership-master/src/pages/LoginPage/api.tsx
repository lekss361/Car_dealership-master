import { LoginRequest, RegistrationRequest } from './types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginFailure, loginSuccess } from './currentUserSlice';
const baseUrl = process.env.REACT_APP_BASE_URL;

export const login = createAsyncThunk(`auth/loginAuth`, async (credentials: LoginRequest, { rejectWithValue, dispatch }) => {
  try {
    const response = await fetch(`${baseUrl}/auth/login`, {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    const data = await response;
    if (data.status === 200) {
      const { access_token } = await data.json();
      dispatch(loginSuccess(access_token));
    } else {
      const { error } = await data.json();
      dispatch(loginFailure(error));
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
});

export const register = createAsyncThunk(`/users/add`, async (payload: RegistrationRequest, { rejectWithValue, dispatch }) => {
  try {
    const response = await fetch(`${baseUrl}/users/add`, {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    const loginRequest: LoginRequest = { login: payload.login, password: payload.password };
    const data = await response;
    if (data.status === 201) {
      dispatch(login(loginRequest));
    } else {
      const { error } = await data.json();
      console.log(error);
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
});
