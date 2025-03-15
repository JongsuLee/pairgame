const card_data: CardData[] = [
  {
    id: 0,
    name: 'html',
    imgUrl: 'images/html.png',
  },
  {
    id: 1,
    name: 'css',
    imgUrl: 'images/css.png',
  },
  {
    id: 2,
    name: 'js',
    imgUrl: 'images/js.png',
  },
  {
    id: 3,
    name: 'react',
    imgUrl: 'images/react.png',
  },
  {
    id: 4,
    name: 'vue',
    imgUrl: 'images/vue.png',
  },
  {
    id: 5,
    name: 'svelte',
    imgUrl: 'images/svelte.png',
  },
  {
    id: 6,
    name: 'sass',
    imgUrl: 'images/sass.png',
  },
  {
    id: 7,
    name: 'github',
    imgUrl: 'images/github.png',
  },
  {
    id: 8,
    name: 'quest',
    imgUrl: 'images/quest.png',
  },
]

export {card_data}

interface CardData {
  id: number,
  name: string,
  imgUrl: string
}
