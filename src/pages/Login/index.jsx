import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import LogoLogin from '../../assets/icons/facebook.svg';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import Input from '../../components/Input';
import Modal from '../../components/Modal';
import RegisterForm from '../RegisterForm';
import { schema } from './schema';
import './style.scss';
const Login = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm({
        mode: 'all',
        resolver: yupResolver(schema),
    });
    const [open, setOpen] = useState(false);
    const onSubmit = async (data) => {
        console.log(data);
    };
    const handleOpen = () => {
        setOpen(!open);
    };
    return (
        <>
            <div className="loginPage">
                <div className="loginPageWraper">
                    <div className="loginUser">
                        <div className="headerLogin">
                            <img src={LogoLogin} alt="LogoFacebook" />
                            <span className="sloganLogin">
                                Facebook giúp bạn kết nối và chia sẻ với mọi người trong cuộc
                                sống của bạn.
                            </span>
                        </div>
                        <div className="loginContainer">
                            <div className="loginLogin">
                                <form className="loginForm">
                                    <Input
                                        id="username"
                                        placeholder="Nhập tên tài khoản..."
                                        type="text"
                                        register={register}
                                        errors={errors.username}
                                        position="topLeft"
                                    />
                                    <Input
                                        id="password"
                                        placeholder="Nhập mật khẩu..."
                                        type="password"
                                        register={register}
                                        errors={errors.password}
                                        position="bottomRight"
                                    />
                                    <Button
                                        onClick={handleSubmit(onSubmit)}
                                        type="submit"
                                        name="Đăng nhập"
                                        color="blue"
                                    />
                                </form>
                                <Link className="linknavigate" to="/forgot">
                                    Quên mật khẩu ?
                                </Link>
                                <div className="spliter" />
                                <Button
                                    className="create-account"
                                    name="Tạo tài khoản mới"
                                    color="green"
                                    onClick={handleOpen}
                                />
                            </div>
                            <p className="createPage">
                                {' '}
                                <strong>Tạo Trang </strong>dành cho người nổi tiếng, thương
                                hiệu hoặc doanh nghiệp.{' '}
                            </p>
                        </div>
                    </div>
                </div>
                <Modal
                    open={open}
                    children={<RegisterForm />}
                    handleOpen={handleOpen}
                    title="Đăng Kí"
                    description="Nhanh chóng và dễ dàng"
                    className="ModalLogin"
                    onClick={() => {}}
                />
            </div>
            <Footer />
        </>
    );
};

export default Login;
