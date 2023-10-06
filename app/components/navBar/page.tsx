
export default function Nav() {
  return (
    <nav className="flex sm:justify-center space-x-4">
      {[
        ['Home', '/dashboard'],
        ['About', '/About'],
        ['Projects', '/projects'],
        ['Contact', '/Contact'],
      ].map(([title, url]) => (
        <a href={url} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">{title}</a>
      ))}
    </nav>
  )
}















