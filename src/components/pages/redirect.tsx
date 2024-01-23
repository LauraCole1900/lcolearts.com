import { ReactElement, useEffect } from 'react';
import { NavigateFunction, useNavigate, useParams } from 'react-router-dom';

const Redirect = (): ReactElement => {

  const params = useParams();
  const navigate: NavigateFunction = useNavigate();

  useEffect(() => {
    if (params.redirect === 'music') {
      window.location.replace('https://lcolearts.herokuapp.com/music/page/1')
    } else if (params.redirect === 'blog') {
      window.location.replace('https://lcolearts.herokuapp.com/blog/page/1')
    } else {
      navigate('/404');
    }
  })

  return (
    <>
      <h1>One moment please....</h1>
    </>
  )
}

export default Redirect;