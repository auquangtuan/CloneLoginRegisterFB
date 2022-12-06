import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../components/Button';
import Input from '../../components/Input';
import SelectBasic from '../../components/SelectBasics';
import { schema } from './schema';
import { bDay, bMonth, bYear } from './data';
import './style.scss';
import { Link } from 'react-router-dom';
import HoverLink from '../../components/HoverLink';
const gender = [
    {
        id: 1,
        value: 'Nam',
    },
    {
        id: 2,
        value: 'Nữ',
    },
    {
        id: 3,
        value: 'Khác',
    },
];
const RegisterForm = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm({
        mode: 'all',
        resolver: yupResolver(schema),
    });
    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <div className="registerForm">
            <div className="formContainer">
                <div style={{ display: 'flex', gap: '12px' }}>
                    <Input
                        id="firstName"
                        placeholder="Họ..."
                        register={register}
                        errors={errors.firstName}
                        position="topLeft"
                    />
                    <Input
                        id="lastName"
                        placeholder="Tên..."
                        register={register}
                        errors={errors.lastName}
                        position="topRight"
                    />
                </div>
                <Input
                    id="phone"
                    placeholder="Số di động của bạn..."
                    register={register}
                    errors={errors.phone}
                    position="topLeft"
                />
                <Input
                    id="email"
                    placeholder="Email của bạn..."
                    register={register}
                    errors={errors.email}
                    position="bottomLeft"
                />
                <Input
                    id="password"
                    placeholder="Nhập mật khẩu bạn muốn..."
                    register={register}
                    errors={errors.password}
                    position="bottomLeft"
                    type="password"
                />
                <div className="hoverRegister">
                    <HoverLink
                        descreption="Cung cấp sinh nhật của bạn giúp đảm bảo bạn có được trải nghiệm Facebook phù hợp với độ tuổi của mình. Nếu bạn muốn thay đổi người nhìn thấy thông tin này, hãy đi tới phần Giới thiệu trên trang cá nhân của bạn. Để biết thêm chi tiết, vui lòng truy cập vào Chính sách quyền riêng tư của chúng tôi."
                        title="Ngày sinh"
                        icon="info_icon"
                    />
                </div>
                <div className="dateOfBirthdayRegister">
                    <SelectBasic
                        register={register}
                        id="bDay"
                        arrValue={bDay}
                        errors={errors.bDay}
                    />
                    <SelectBasic
                        register={register}
                        id="bMonth"
                        arrValue={bMonth}
                        errors={errors.bMonth}
                    />
                    <SelectBasic
                        register={register}
                        id="bYear"
                        arrValue={bYear()}
                        errors={errors.bYear}
                    />
                </div>
                <div className="dateOfBirthdayRegister">
                    <div className="hoverRegister">
                        <HoverLink
                            descreption="Về sau, bạn có thể thay đổi những ai nhìn thấy giới tính của mình trên trang cá nhân. Chọn Tùy chỉnh nếu bạn thuộc giới tính khác hoặc không muốn tiết lộ."
                            title="Giới tính"
                            icon="info_icon"
                        />
                    </div>
                    <SelectBasic
                        register={register}
                        id="gender"
                        arrValue={gender}
                        errors={errors.gender}
                    />
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className="spliter"></div>
            <p className="protect">
                Người dùng dịch vụ của chúng tôi có thể đã tải thông tin liên hệ của bạn lên
                Facebook.{' '}
                <Link to="/" style={{ color: '#385898' }}>
                    {' '}
                    Tìm hiểu thêm.
                </Link>{' '}
                <br />
                Bằng cách nhấp vào Đăng ký, bạn đồng ý với{' '}
                <Link to="/" style={{ color: '#385898' }}>
                    Điều khoản, Chính sách quyền riêng tư
                </Link>{' '}
                và{' '}
                <Link to="/" style={{ color: '#385898' }}>
                    Chính sách cookie
                </Link>{' '}
                của chúng tôi. Bạn có thể nhận được thông báo của chúng tôi qua SMS và hủy
                nhận bất kỳ lúc nào.
            </p>
            <div className="containerBtn">
                <Button color="green" name="Đăng kí" onClick={handleSubmit(onSubmit)} />
            </div>
        </div>
    );
};

export default RegisterForm;
