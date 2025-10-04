import './animation.css';

function HeroAnimation({ className = '', style = {} }) {
  return (
    <div
      className={`w-[160px] h-[160px] sm:w-[180px] sm:h-[180px] lg:w-[240px] lg:h-[240px] rounded-full opacity-60 hero-decoration ${className}`}
      style={style}
      aria-hidden="true"
    />
  );
}

export default HeroAnimation;
