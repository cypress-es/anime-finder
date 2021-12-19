import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useQueryParam } from '../../hooks/useQueryParam';
import { setAccess } from '../../persistence/access';
import * as api from '../../repository/api';
import style from './Oauth.module.scss';

const Oauth = (): JSX.Element => {
  const code = useQueryParam('code');
  const history = useHistory();
  useEffect(() => {
    if (code) {
      api.getAuthorization(code)
        .then(auth => {
          setAccess(auth.jwt);
          history.push('/');
        });
    }
  }, [code, history]);
  return (
    <div className={style.container}>
      <div className={style.loader}>Loading...</div>
    </div>
  );
};

export default Oauth;
