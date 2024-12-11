export default function Section({ children, style = "" }) {
  return (
    <section className={`py-36 ${style}`}>
      <div className="container m-auto px-5">{children}</div>
    </section>
  );
}
