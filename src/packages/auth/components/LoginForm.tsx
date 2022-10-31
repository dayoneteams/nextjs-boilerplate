import {Form} from '../../core/components/Form';
import {InputFormField} from '../../core/components/InputFormField';
import {SubmitFormButton} from '../../core/components/SubmitFormButton';

export const LoginForm = () => {
  const handleSubmit = () => {
    return new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
  };

  return (
    <Form handleSubmit={handleSubmit}>
      <div>Login</div>
      <div>
        <InputFormField name="email" />
      </div>
      <div>
        <InputFormField name="password" type="password" />
      </div>
      <SubmitFormButton>Login</SubmitFormButton>
    </Form>
  );
};
