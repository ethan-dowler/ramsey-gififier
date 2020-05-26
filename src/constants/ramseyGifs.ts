import Gif from '../models/gif'
/**
 * A static list of Ramsey gifs so we
 * don't need to deal with Giphy API
 * tokens in a public action etc.
 */
const ramseyGifs: Gif[] = [
  // Anthony
  new Gif({
    url: 'https://media.giphy.com/media/KYjVk4CRDPUNdtT6AJ/giphy.gif',
    alt: 'AO - Dancing in Pink Jacket'
  }),
  new Gif({
    url: 'https://media.giphy.com/media/jnnlK7bvDzVPkqPsWU/giphy.gif',
    alt: 'AO - Shuffling'
  }),
  new Gif({
    url: 'https://media.giphy.com/media/X96DqJfzXLH4y4kcN4/giphy.gif',
    alt: 'AO - Smart, Intelligent, High Quality'
  }),
  // Christy
  new Gif({
    url: 'https://media.giphy.com/media/vx3WWpFxSEXOzzHxJa/giphy.gif',
    alt: 'Christy - Dancing'
  }),
  // Dave
  new Gif({
    url: 'https://media.giphy.com/media/1kHygQGV6urCSyaQga/giphy.gif',
    alt: 'Dave - *clap clap* "Change!"'
  }),
  new Gif({
    url: 'https://media.giphy.com/media/w83p9pQNeOQytb0mg0/giphy.gif',
    alt: "Dave - Now we've got something"
  }),
  new Gif({
    url: 'https://media.giphy.com/media/3biqzc4JvAsSQWOdUv/giphy.gif',
    alt: 'Dave - Laughing'
  }),
  // Entre
  new Gif({
    url: 'https://media.giphy.com/media/9oIOz2w31kl7DEHOTY/giphy.gif',
    alt: 'Entre - Get the Job Done'
  }),
  new Gif({
    url: 'https://media.giphy.com/media/7XAQ8HRQfhD5SH1HRd/giphy.gif',
    alt: 'Entre - The Reward Is Worth the Risk'
  }),
  new Gif({
    url: 'https://media.giphy.com/media/pPmJWO6Uo2zxna5wcu/giphy.gif',
    alt: 'Entre - Small Changes Matter'
  }),
  // Hogan
  new Gif({
    url: 'https://media.giphy.com/media/mDHDWnsrWP6vE9rSQO/giphy.gif',
    alt: 'Hogan - You can do this'
  }),
  // Rachel
  new Gif({
    url: 'https://media.giphy.com/media/1yMfNYjPx5IiFj5d4P/giphy.gif',
    alt: 'Rachel - Cheers'
  }),
  new Gif({
    url: 'https://media.giphy.com/media/tod48ZoYHus1dMCXuk/giphy.gif',
    alt: "Rachel - It's Amazing"
  }),
  new Gif({
    url: 'https://media.giphy.com/media/xl3Biy7X0kRlzlQBx4/giphy.gif',
    alt: 'Rachel - You get to decide'
  })
]

export default ramseyGifs
