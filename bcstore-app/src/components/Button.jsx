
const Button = ({ onClick, children }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 rounded-md text-white bg-gray-600"
    >
      {children}
    </button>
  );
};

export default Button;
