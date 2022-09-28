import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'
import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://randomuser.me/api/portraits/women/19.jpg',
      name: 'Julio Henrique',
      role: 'React Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu github, foi o meu primeiro projeto relacionado a àrea da saúde, e se chama DoctorCare 🚀' },
      { type: 'link', content: 'julio.dev/streaming' },
    ],
    publishedAt: new Date('2022-08-20 12:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://randomuser.me/api/portraits/women/25.jpg',
      name: 'Henrique Julio',
      role: 'Java Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu github, foi o meu primeiro projeto relacionado a àrea da saúde, e se chama DoctorCare 🚀' },
      { type: 'link', content: 'julio.dev/streaming' },
    ],
    publishedAt: new Date('2022-08-29 12:00:00'),
  },
]

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App
