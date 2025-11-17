function Header({ title }) {
  return (
    <header className="header">
      <h1>{title}</h1>
      <p className="subtitle">Demo of component reuse, props, and passing events from child to parent</p>
    </header>
  );
}

export default Header;
