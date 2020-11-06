export default function getQuotes() {
  return fetch('https://api.tronalddump.io/random/quote').then((res) =>
    res.json()
  )
}
