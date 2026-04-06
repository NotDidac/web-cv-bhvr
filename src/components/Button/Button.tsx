type ButtonProps = {
  title: string;
  onClick: () => void;
  className?: string;
};

function Button({ title, onClick, className }: ButtonProps) {
  return (
    <button
      className={`bg-dark text-light hover:bg-primary-alt border-primary cursor-pointer rounded-md border-2 border-solid px-4 py-2 transition-colors duration-500 ${className}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default Button;
