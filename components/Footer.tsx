const year = new Date().getFullYear();

export const Footer = () => {
  return (
    <footer>
      <div id="content">
        <ul>
          <li><p>© {year} Duale Siad</p></li>
          <li><a href="/credits">Credits</a></li>
        </ul>
      </div>
    </footer>
  )
}