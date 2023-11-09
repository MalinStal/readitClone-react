import "./aside.css";

export function AsideRight() {
  return (
    <>
      <aside className="sidebar-right">
        <div>
          <h2 className="sidebar-right-h2">POPULAR COMMUNITIES</h2>
          <ul>
            <li>
              <a href="https://ecutbildning.se">Ec utbildning</a>
            </li>
            <li>
              <a href="https://react.dev/">React dev</a>
            </li>
            <li>
              <a href="https://www.acouplecooks.com/best-cocktail-recipes-to-make-at-home/">
                A couple of drinks
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@WebDevSimplified">
                Web Dev Simplified
              </a>
            </li>
            <li>
              <a href="https://www.reddit.com/r/Minecraft/">Minecraft</a>
            </li>
          </ul>
          <button className="aside-right-btn">See more</button>
        </div>
      </aside>
    </>
  );
}
