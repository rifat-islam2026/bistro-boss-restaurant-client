import ErrorPageImage from '../../../src/assets/404.gif'

const ErrorPage = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <img src={ErrorPageImage} alt="Error Page" />
    </div>
  )
}

export default ErrorPage
