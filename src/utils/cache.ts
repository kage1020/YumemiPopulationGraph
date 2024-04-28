export async function cache<T>(key: string, fetcher: () => Promise<T>) {
  const data = localStorage.getItem(key)
  if (data) {
    const { value, expiration } = JSON.parse(data)
    if (expiration && Date.now() < expiration) {
      return Promise.resolve<T>(value)
    }
  }

  return fetcher().then((data) => {
    // 1週間キャッシュする
    const expiration = Date.now() + 7 * 24 * 60 * 60 * 1000 // 1 week
    const cacheData = JSON.stringify({ value: data, expiration })
    localStorage.setItem(key, cacheData)
    return data
  })
}
