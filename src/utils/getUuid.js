export const getUuid = async player => {
  try {
    const response = await fetch(`https://api.minetools.eu/uuid/${player}`)
    const data = await response.json()

    if (data.status === 'ERR') {
      return 'NF'
    }
    return data.id
  } catch (error) {
    console.error('Ups, something went wrong ', error)
    return ''
  }
}
