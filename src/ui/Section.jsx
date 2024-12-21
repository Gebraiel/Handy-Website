export default function Section({ children, className = "" ,type="",style={}}) {
   
  return (
    <section className={`${type != 'fullscreen' ? 'py-36' : ""} ${className}`} style={style}>
      <div className={`${type != 'fullscreen' ? 'container m-auto px-5' : ''}`}>{children}</div>
    </section>
  );
}
