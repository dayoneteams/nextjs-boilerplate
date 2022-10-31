import Link from 'next/link';
import {Button} from '../packages/core/components/Button';

const IndexPage = () => (
  <div>
    <div>Hello. This is Landing page.</div>
    <div>
      <Button>Getting Started</Button>
    </div>
    <div>
      <Link href="/login">
        <a>Login</a>
      </Link>
    </div>
    <div>
      <Link href="/register">
        <a>Register</a>
      </Link>
    </div>
  </div>
);

export default IndexPage;
