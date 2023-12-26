import { SignInErrorProps } from '../../../types/types';

function SignInError({ message }: SignInErrorProps) {
  return (
    <div className="sign-in__message">
      <p data-testid='error-message' >Please enter a valid {message}</p>
    </div>
  );
}

export default SignInError;
