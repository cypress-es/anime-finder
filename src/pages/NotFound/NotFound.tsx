import MainLayout from '../../layouts/MainLayout/MainLayout';
import style from './NotFound.module.scss';

const NotFound = (): JSX.Element => (
  <MainLayout>
    <div className={style.errorPage}>
      <h1>404</h1>
      <h4>Page not found</h4>
    </div>
  </MainLayout>
);

export default NotFound;
