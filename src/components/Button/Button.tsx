type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: "small" | "default" | "large";
};

function Button({
  className = "",
  size = "default",
  children,
  ...props
}: ButtonProps) {
  const baseClasses =
    "bg-dark text-light hover:bg-primary-alt border-primary rounded-2xl cursor-pointer border-2 transition-colors duration-500 leading-tight";
  const sizeClasses = {
    small: "px-4 py-1 text-sm",
    default: "px-6 py-2 text-base",
    large: "px-8 py-4 text-lg",
  };
  const classes = `${baseClasses} ${sizeClasses[size]} ${className}`;
  return (
    <button className={classes} {...props}>
      <span className="whitespace-nowrap">{children}</span>
    </button>
  );
}

export default Button;
