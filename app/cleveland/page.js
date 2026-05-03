import ClevelandOurPeople from '@/components/ClevelandOurPeople'
import './cleveland.css'

export const metadata = {
  title: 'Cleveland & Co — Our People',
  description: 'A proposed redesign of the Cleveland & Co team page, with two options (Editorial and Dossier).',
}

export default function ClevelandPage() {
  return (
    <main style={{ background: '#f3efe6', minHeight: '100vh', padding: '48px 0' }}>
      <ClevelandOurPeople />
    </main>
  )
}
