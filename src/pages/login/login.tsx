import { EyeOff, Eye } from 'react-feather';
import './login.scss';
import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isHuman, setIsHuman] = useState(false);
  const navigate = useNavigate()

  const handleHide = () => {
    setPasswordVisible((prev) => !prev);
  };

  const handleRecaptcha = () => {
    setIsHuman(true);
  };

  const handleSubmit = () => {
   console.log(isHuman)
    if (isHuman) {
      navigate('/home')
    }
  };

  return (
    <>
      <div className='container'>
        <div className='image-container'>
          <img src='../../../src/assets/login-image.png' alt='imagem' />
        </div>

        <div className='login-forms'>
          <div className='header'>
            <h1 className='titulo'>Bem vindo(a) a Lady Store! </h1>
            <p className='subtitulo'>Faça seu login</p>
          </div>

          <div className='forms'>
            <p className='label'>Email</p>
            <input type='email' />
            <div className='label-senha'>
              <p className='label'>Senha</p>
              <div onClick={handleHide} className='hide'>
                {passwordVisible ? (
                  <Eye size={18} color='#666666CC' />
                ) : (
                  <EyeOff size={18} color='#666666CC' />
                )}
                <p className='label'>Hide</p>
              </div>
            </div>
            <input type={passwordVisible ? 'text' : 'password'} />
          </div>

          <p className='termos'>
            Ao logar na conta, você concorda com nossos{' '}
            <a className='link' href=''>
              Termos de uso
            </a>{' '}
            e{' '}
            <a className='link' href=''>
              Política de Privacidade.
            </a>
          </p>

          <ReCAPTCHA
            sitekey='6LcEt5wqAAAAAPRwqXnvW6hs_7BS2r9k4Uw4CKRU'
            onChange={handleRecaptcha}
          />

          <button onClick={handleSubmit} className='botao-entrar'>
            Entrar
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
