import './button.css'

function Button({ text }) {
  return (
    <a href={'#'+text} className='button'>{text}</a>
  );
}

export default Button;
