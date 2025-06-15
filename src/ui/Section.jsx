export default function Section({ children, className = "" ,type="",style={}}) {
   
  return (
    <section className={`${type != 'fullscreen' ? '2xl:py-24 py-[50px]' : ""} ${className}`} style={style}>
      <div className={`${type != 'fullscreen' ? 'container sm:w-[80%] m-auto px-5' : ''}`}>{children}</div>
    </section>
  )
}
