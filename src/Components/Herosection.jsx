import "./Hero.css";
import Button from "./Button";
function HeroSection() {
  return (
    <section className="hero">
      <h2 className="heading">Welcome to new Journey</h2>
      <p>note your daily life here</p>

      <div>
        <Button btnStyle="primary">login</Button>
        <Button btnStyle="outline">signUp</Button>
      </div>
    </section>
  );
}
export default HeroSection;
