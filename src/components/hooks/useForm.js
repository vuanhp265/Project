import { useState } from 'react';

export const useForm = (initialForm, validateForm, onSubmit) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(form));

    if (Object.keys(errors).length === 0) {
      setLoading(true);
      onSubmit(form); // Gọi hàm onSubmit được truyền vào
      // Ở đây bạn sẽ thực hiện logic gửi dữ liệu thực tế (ví dụ: API call)
      // Sau khi gửi thành công/thất bại, bạn có thể cập nhật state loading và response
      setLoading(false);
      // Ví dụ: setResponse(true); hoặc setResponse(false);
      setForm(initialForm); // Reset form sau khi gửi
    }
  };

  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};