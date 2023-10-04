import './not-found.css';

function NotFound(){
  return (
    <div className='not-found-container'>
      <h1 className='not-found-title'>404</h1>
      <h2 className='not-found-sub-title'>UH OH! You&apos;re lost.</h2>
      <p className='not-found-message'>
        The page you are looking for does not exist.<br/>
        How you got here is a mystery.<br/>
        But you can click the button below to go back to the homepage.
      </p>
      <a href='#' className='not-found-btn'>HOME</a>
    </div>
  );
}

export default NotFound;
