export default function Section({ children, className = "" ,type="",style={}}) {
   
  return (
    <section className={`${type != 'fullscreen' ? 'xl:py-36 sm:py-20 py-16' : ""} ${className}`} style={style}>
      <div className={`${type != 'fullscreen' ? 'container sm:w-[80%] m-auto px-5' : ''}`}>{children}</div>
    </section>
  );
}
