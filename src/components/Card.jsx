function Card({ title, children }) { // children - Built-in Prop, place holder
  return (
    <section className="card">
      <h2 className="card-title">{title}</h2>
      <div className="card-body">{children}</div>
    </section>
  );
}

export default Card;
