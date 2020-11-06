export default function loadLocally(key) {
  const jsonString = localStorage.get
  try {
    return JSON.parse(jsonString)
  } catch (error) {
    console.log('localStorage data was bad.')
  }
}
