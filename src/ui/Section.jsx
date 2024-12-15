export default function Section({ children, style = "" ,type=""}) {
   
  return (
    <section className={`${type != 'fullscreen' ? 'py-36' : ""} ${style}`}>
      <div className={`${type != 'fullscreen' ? 'container m-auto px-5' : ''}`}>{children}</div>
    </section>
  );
}
