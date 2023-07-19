import Link from "next/link"

const App =() => {
  return(
    <div>
      <h2>Link to kang page</h2>
      <Link href="/human/jimin">
        <a>Move to /human/jimin</a>
      </Link>
    </div>
  )
}

export default App;