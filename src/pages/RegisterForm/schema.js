import * as yup from 'yup';

export const schema = yup.object({
    firstName: yup
        .string()
        .required('* Họ bạn là gì?')
        .min(6, 'Tối thiểu 6 kí tự.')
        .max(32, 'Tối đa 32 kí tự.'),
    lastName: yup
        .string()
        .required('* Tên bạn là gì?')
        .min(6, '* Mật khẩu cần phải có ít nhất 6 ký tự.')
        .max(32, '* Tối đa 32 kí tự.'),
    phone: yup.string().required('* Số điện thoại của bạn ?'),
    email: yup.string().required('* Email của bạn là gì?'),
    password: yup.string().required('* Bạn cần nhập mật khẩu.'),
    bDay: yup.string().required('* Bs n m'),
    bMonth: yup.string().required('* Bs n m'),
    bYear: yup.string().required('* Bs n m'),
    gender : yup.string().required("* Ban phai nhap gioi tinh")
});
