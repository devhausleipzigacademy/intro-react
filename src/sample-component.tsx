type Props = {
    // 1. Make Prop optional
    variant?: "primary" | "secondary"
    onClick: () => void
}

// 2. Always destructure your props
// 3. Use default values on optional props
export function SampleComponent({variant = "primary", onClick}: Props) {
    return (
        <button
            className={`btn btn-${variant}`}
            onClick={onClick}
        >
            Click me
        </button>
    )
}