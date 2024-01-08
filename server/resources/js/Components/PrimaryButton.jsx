export default function PrimaryButton({ className = '', disabled, children, ...props }) {
    return (
        <button
            {...props}
            className={
                `btn btn-success font-weight-bold  ${disabled ? 'disabled' : ''} ${className}`
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
