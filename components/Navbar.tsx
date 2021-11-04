import {ThemeChanger} from "./ThemeChanger";

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <div className="theme-changer-container">
        <ThemeChanger/>
      </div>
    </nav>
  )
}