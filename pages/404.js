import ErrorLayout from '../components/layouts/errorLayout';

export default function Custom404() {
  return(
    <ErrorLayout errorCode={404}>
      Page no found!
    </ErrorLayout>
  );
}