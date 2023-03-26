function GradientSVG() {
    const idCSS = "hello";
    const gradientTransform = `rotate(90)`;
    return (
      <svg style={{ height: 0 }}>
        <defs>
          <linearGradient id={idCSS} gradientTransform={gradientTransform}>
            <stop offset="16.29%" stopColor="#572ac0" />
            <stop offset="85.56%" stopColor="#b152ff" />
          </linearGradient>
        </defs>
      </svg>
    );
  }
  
  export default GradientSVG;