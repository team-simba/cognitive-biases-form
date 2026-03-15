const Patterns = () => (
    <defs>
        <pattern id="diamondPattern" patternUnits="userSpaceOnUse" width="20" height="20">
            <path d="M10 0 L20 10 L10 20 L0 10 Z" fill="white" opacity="0.15" />
        </pattern>

        <pattern id="trianglePattern" patternUnits="userSpaceOnUse" width="24" height="21">
            <path d="M12 0 L24 21 L0 21 Z" fill="white" opacity="0.15" />
        </pattern>

        <pattern id="circlePattern" patternUnits="userSpaceOnUse" width="20" height="34">
            <circle cx="10" cy="10" r="7" fill="white" opacity="0.15" />
            <circle cx="0" cy="27" r="7" fill="white" opacity="0.15" />
            <circle cx="20" cy="27" r="7" fill="white" opacity="0.15" />
        </pattern>

        <pattern
            id="rotateGridPattern"
            patternUnits="userSpaceOnUse"
            width="20"
            height="20"
            patternTransform="rotate(45)"
        >
            <rect x="8" y="8" width="20" height="20" fill="white" opacity="0.15" />
        </pattern>

        <pattern id="pattern-green" patternUnits="userSpaceOnUse" width="15" height="15">
            <rect width="15" height="15" fill="#5CA25E" opacity="0.9" />
            <circle cx="8" cy="8" r="6" fill="white" opacity="0.9" />
        </pattern>

        <pattern
            id="pattern-blue"
            patternUnits="userSpaceOnUse"
            width="15"
            height="15"
            patternTransform="rotate(45)"
        >
            <rect x="0" y="2" width="10" height="10" fill="#1F63AB" opacity="0.7" />
        </pattern>
    </defs>
);

export default Patterns;
