import {UnauthenticatedOnlyLayout} from '../packages/main/components/UnauthenticatedOnlyLayout';
import {LoginForm} from '../packages/auth/components/LoginForm';

const LoginPage = () => (
  <UnauthenticatedOnlyLayout>
    <LoginForm />
  </UnauthenticatedOnlyLayout>
);

export default LoginPage;
