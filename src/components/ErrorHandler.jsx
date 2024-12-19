import '../styles/ErrorHandler.css';

function ErrorHandler({ error }) {
  console.log('error in handler:', error);
  return (
    <div className="error-handler">
      <p>Uh-oh! {error.message || 'Something broke!'}</p>
    </div>
  );
}

export default ErrorHandler;