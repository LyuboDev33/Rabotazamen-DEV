export default function ApplicationLogo({
    className = "",
    width = "",
    height = "",
}) {
    return (
        <img
            src="/assets/images/logo-dark.png"
            alt="Logo"
            className={className}
            width={width}
            height={height}
        />
    );
}
