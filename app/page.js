import ClevelandOurPeople from '@/components/ClevelandOurPeople'
import './cleveland/cleveland.css'

export const metadata = {
  title: 'Cleveland & Co — Our People',
  description: 'A proposed redesign of the Cleveland & Co team page, with two options (Editorial and Dossier).',
}

export default function Home() {
  return (
    <main style={{ background: '#fff', minHeight: '100vh', padding: 0 }}>
      <ClevelandOurPeople />
    </main>
  )
}
