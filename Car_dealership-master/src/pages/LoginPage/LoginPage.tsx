import './LoginPage.scss';
import 'react-tabs/style/react-tabs.css';
import { LoginRequest, RegistrationRequest } from './types';
import { RootState } from '../../store/store';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { login, register } from './api';
import { logout } from './currentUserSlice';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
const baseUrl = process.env.REACT_APP_BASE_URL;
interface ModalLoginProps {
  onClose: () => void;
}

export const LoginPage: React.FC<ModalLoginProps> = ({ onClose }) => {
  const isAuthenticated = useSelector((state: RootState) => state.currentUser.isAuthenticated);
  const dispatch = useDispatch<ThunkDispatch<void, any, any>>();
  const {
    register: registerLogin,
    handleSubmit: handleSubmitLogin,
    formState: { errors: errorsLogin },
  } = useForm<LoginRequest>();

  const onSubmitLogin: SubmitHandler<LoginRequest> = async (credentials) => {
    dispatch(login(credentials));
  };

  const onSubmitLogOut = async () => {
    dispatch(logout());
  };

  const {
    register: registerRegistration,
    handleSubmit: handleSubmitRegistration,
    formState: { errors: errorsRegistration },
    watch,
  } = useForm<RegistrationRequest>();

  const onSubmitRegistration: SubmitHandler<RegistrationRequest> = (data) => {
    dispatch(register(data));
  };

  const password = watch('password');
  const confirmPassword = watch('confirmPassword');

  return (
    <div id="login" className="modal">
      <div id="modal-content">
        <button className="close" onClick={onClose}>
          &times;
        </button>
        {isAuthenticated ? (
          <>
            <p>You are logged in!</p>
            <button onClick={onSubmitLogOut}>Log out</button>
          </>
        ) : (
          <Tabs>
            <TabList>
              <Tab>Вход</Tab>
              <Tab>Регистрация</Tab>
            </TabList>

            <TabPanel>
              <form onSubmit={handleSubmitLogin(onSubmitLogin)} className="login">
                <p>Введите ваш логин и пароль для входа</p>
                <div>
                  <label htmlFor="login">Логин:</label>
                  <input type="text" {...registerLogin('login', { required: true })} />
                  {errorsLogin.login && <span>Обязательное поле</span>}
                </div>
                <div>
                  <label htmlFor="password">Пароль:</label>
                  <input type="password" {...registerLogin('password', { required: true })} />
                  {errorsLogin.password && <span>Обязательное поле</span>}
                </div>
                <button type="submit" className="btn">
                  Войти
                </button>
              </form>
            </TabPanel>
            <TabPanel>
              <form onSubmit={handleSubmitRegistration(onSubmitRegistration)}>
                <div>
                  <label htmlFor="login">Логин</label>
                  <input type="text" {...registerRegistration('login', { required: true })} />
                  {errorsRegistration.login && <span>Обязательное поле</span>}
                </div>

                <div>
                  <label htmlFor="email">Email</label>
                  <input type="email" {...registerRegistration('email', { required: true, pattern: /^\S+@\S+$/i })} />
                  {errorsRegistration.email && <span>Невалидный email</span>}
                </div>

                <div>
                  <label htmlFor="phone">Phone</label>
                  <input type="phone" {...registerRegistration('phone', { required: true })} />
                  {errorsRegistration.phone && <span>Невалидный телефон</span>}
                </div>

                <div>
                  <label htmlFor="password">Пароль</label>
                  <input type="password" {...registerRegistration('password', { required: true, minLength: 8 })} />
                  {errorsRegistration.password && <span>Пароль должен быть длинее 8 сиволов</span>}
                </div>

                <div>
                  <label htmlFor="confirmPassword">Подтвердите пароль</label>
                  <input
                    type="password"
                    {...registerRegistration('confirmPassword', {
                      required: true,
                      validate: (value) => value === password || 'Пароли не совпадают',
                    })}
                  />
                  {errorsRegistration.confirmPassword && <span>{errorsRegistration.confirmPassword.message}</span>}
                </div>
                <button type="submit" className="btn">
                  Зарегистрироваться
                </button>
              </form>
            </TabPanel>
          </Tabs>
        )}
      </div>
    </div>
  );
};
