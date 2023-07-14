import classNames from 'classnames';

const ToolbarButton = ({ children, className, disabled, title, onClick }) => (
  <button
    className={classNames(
      'text-white flex items-center justify-center cursor-pointer w-10 h-6 text-sm p-2 rounded-sm',
      {
        '!bg-gray-500 opacity-50 pointer-events-none': disabled,
      },
      className
    )}
    onClick={onClick}
    disabled={disabled}
    title={title}
  >
    {children}
  </button>
);

export default ToolbarButton;
