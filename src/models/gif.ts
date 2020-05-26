interface GifParams {
  url: string
  alt: string
}

class Gif {
  url: string
  alt: string

  constructor({ url, alt = 'Ramsey GIF' }: GifParams) {
    this.url = url
    this.alt = alt
  }
}

export default Gif
