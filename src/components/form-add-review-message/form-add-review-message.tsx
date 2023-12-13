import { FormAddReviewMessageProps } from '../../types/types';
import './form-add-review-message.css';

function FormAddReviewMessage({ message }: FormAddReviewMessageProps) {
  return (
    <div className="sign-in__message message">
      <p>{message}</p>
    </div>
  );
}

export default FormAddReviewMessage;
