'use client'

import { useState } from 'react'

const TONES = [
  { bg: '#cdb89a', fg: '#5a4a36' },
  { bg: '#b9c4be', fg: '#374b48' },
  { bg: '#c8b39a', fg: '#5a4032' },
]

function PlaceholderPortrait({ tone, label }) {
  return (
    <svg
      viewBox="0 0 200 240"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: '100%', display: 'block', background: tone.bg }}
      aria-label={label}
      role="img"
    >
      <path d="M -20 240 C 20 170, 60 160, 100 158 C 140 160, 180 170, 220 240 Z" fill={tone.fg} opacity="0.85" />
      <ellipse cx="100" cy="105" rx="42" ry="50" fill={tone.fg} opacity="0.92" />
      <path d="M 60 90 Q 100 50, 140 90 Q 130 70, 100 65 Q 70 70, 60 90 Z" fill="#000" opacity="0.16" />
    </svg>
  )
}

const people = [
  {
    name: 'Alejandro Alemany',
    role: 'Senior Counsel',
    cat: 'Legal',
    photo: '/cleveland/images/alejandro.png',
    expertise: 'Financial Services Regulation, Funds, Alternative Investments, Joint Ventures, Secondaries, Derivatives, Securities Lending, Structuring & Restructuring, Distribution, Corporate, Commercial',
    experience: '15+ years',
    qualified: 'England & Wales and Spain',
    strengths: 'Commercial acumen and problem-solving',
    values: 'Honesty and loyalty',
    passions: 'Family, travel, music',
    location: 'London, U.K. and Barcelona',
    tags: ['Financial Services', 'Funds', 'Derivatives', 'Secondaries', 'Corporate'],
  },
  {
    name: 'Jack Ashford',
    role: 'Paralegal',
    cat: 'Legal',
    photo: '/cleveland/images/jack.png',
    expertise: 'Investment Management, Financial Services Regulation, Funds, Alternative Funds, Securities, Trading and Investments, Derivatives, Securities Lending, Structuring and Restructuring, Distribution, Corporate, Commercial',
    experience: '3.5 years',
    qualified: 'Paralegal',
    strengths: 'Adaptability and problem-solving',
    values: 'Compassion, honesty, resilience, loyalty and integrity',
    passions: 'Sports',
    location: 'London, U.K.',
    tags: ['Investment Mgmt.', 'Funds', 'Securities', 'Governance'],
  },
  {
    name: 'James Breffitt',
    role: 'Partner',
    cat: 'Legal',
    photo: '/cleveland/images/james.jpg',
    expertise: 'Funds, Investment Management, Financial Services Regulation, Joint Ventures, M&A, Asset Management, Corporate Governance, General Corporate, Regulatory, Renewable Energy Projects, Clean Energy Projects',
    experience: '13 years',
    qualified: 'England & Wales',
    strengths: 'Adaptability, critical thinking, problem-solving',
    values: 'Honesty, integrity',
    passions: 'Reading, family, community activities',
    location: 'London, U.K.',
    tags: ['M&A', 'Joint Ventures', 'Asset Mgmt.', 'Energy', 'Regulatory'],
  },
]

function FilterNavA({ active, onFilter, showing, total }) {
  const labels = [
    { key: 'all', num: '01', label: 'All' },
    { key: 'Executive', num: '02', label: 'Executive' },
    { key: 'Legal', num: '03', label: 'Legal' },
    { key: 'Corporate', num: '04', label: 'Corporate' },
    { key: 'Compliance', num: '05', label: 'Compliance' },
  ]
  const counts = { all: total, Executive: 0, Legal: total, Corporate: 0, Compliance: 0 }

  return (
    <div className="subnavWrap paper">
      <div className="inner">
        <nav className="subA" aria-label="Filter team by practice (Option A)">
          <div className="lbl">Filter by practice</div>
          <div className="nitems">
            {labels.map(({ key, num, label }) => (
              <button
                key={key}
                className={`nitem${active === key ? ' active' : ''}`}
                onClick={() => onFilter(key)}
              >
                <span className="num">{num}</span>
                {label}{' '}
                <span style={{ opacity: 0.55, marginLeft: 4 }}>{counts[key]}</span>
              </button>
            ))}
          </div>
          <div className="nright">{String(showing).padStart(2, '0')} SHOWING</div>
        </nav>
      </div>
    </div>
  )
}

function FilterNavB({ active, onFilter, showing, total }) {
  const labels = [
    { key: 'all', label: 'All' },
    { key: 'Executive', label: 'Executive' },
    { key: 'Legal', label: 'Legal' },
    { key: 'Corporate', label: 'Corporate' },
    { key: 'Compliance', label: 'Compliance' },
  ]
  const counts = { all: total, Executive: 0, Legal: total, Corporate: 0, Compliance: 0 }

  return (
    <div className="subnavWrap lite">
      <div className="inner">
        <nav className="subB" aria-label="Filter team by practice (Option B)">
          <div className="lbl">Practice ↓</div>
          <div className="bitems">
            {labels.map(({ key, label }) => (
              <button
                key={key}
                className={`bitem${active === key ? ' active' : ''}`}
                onClick={() => onFilter(key)}
              >
                <span className="blbl">{label}</span>
                <span className="bnum">{String(counts[key]).padStart(2, '0')}</span>
              </button>
            ))}
          </div>
          <div className="lbl" style={{ borderLeft: '1px solid var(--hairline-soft)', paddingLeft: 18 }}>
            {String(showing).padStart(2, '0')} / {String(total).padStart(2, '0')} SHOWING
          </div>
        </nav>
      </div>
    </div>
  )
}

function CardAMeta({ person }) {
  const fields = [
    ['Expertise', person.expertise],
    ['Experience', person.experience],
    ['Qualified', person.qualified],
    ['Strengths', person.strengths],
    ['Values', person.values],
    ['Passions', person.passions],
    ['Location', person.location],
  ]
  return (
    <dl className="metaA">
      {fields.map(([dt, dd]) => (
        <div className="row2" key={dt}>
          <dt>{dt}</dt>
          <dd>{dd}</dd>
        </div>
      ))}
    </dl>
  )
}

function CardBMeta({ person }) {
  const fields = [
    ['Expertise', person.expertise],
    ['Experience', person.experience],
    ['Qualified', person.qualified],
    ['Strengths', person.strengths],
    ['Values', person.values],
    ['Passions', person.passions],
    ['Location', person.location],
  ]
  return (
    <dl className="gridB">
      {fields.map(([dt, dd]) => (
        <div className="gRow" key={dt}>
          <dt>{dt}</dt>
          <dd>{dd}</dd>
        </div>
      ))}
    </dl>
  )
}

export default function ClevelandOurPeople() {
  const [filterA, setFilterA] = useState('all')
  const [filterB, setFilterB] = useState('all')

  const visibleA = filterA === 'all' ? people : people.filter(p => p.cat === filterA)
  const visibleB = filterB === 'all' ? people : people.filter(p => p.cat === filterB)

  return (
    <div className="deploy">

      {/* ====== SECTION A — paper background, Editorial ====== */}
      <div className="sectionA">
        <div className="inner">
          <header className="optionDelim">
            <div className="optionTag">Option A · Editorial · keeps existing portraits</div>
            <h2 className="optionTitle">Our People — Option A</h2>
          </header>

          <div className="pageH">
            <div className="crumbs">Life at Cleveland &amp; Co. / Our People</div>
            <h1>Our People</h1>
            <p>Pacesetting professionals across funds, investment management, financial services regulation and corporate governance.</p>
          </div>
        </div>

        <FilterNavA active={filterA} onFilter={setFilterA} showing={visibleA.length} total={people.length} />

        <div className="inner">
          <section className="rowCards">
            <div className="grid" data-active={filterA}>
              {people.map((person, i) => (
                <article
                  key={person.name}
                  className="cardA"
                  data-cat={person.cat}
                  style={{ display: visibleA.includes(person) ? 'flex' : 'none' }}
                >
                  <div className="photoFrame" aria-label={`Portrait of ${person.name}`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={person.photo} alt={`Portrait of ${person.name}`} />
                  </div>
                  <div className="roleA">{person.role}</div>
                  <h3 className="nameA">{person.name}</h3>
                  <CardAMeta person={person} />
                </article>
              ))}
            </div>
            {visibleA.length === 0 && (
              <div className="empty">No team members in this practice. Try another category.</div>
            )}
          </section>
        </div>
      </div>

      {/* ====== SECTION B — white background, Dossier ====== */}
      <div className="sectionB">
        <div className="inner">
          <header className="optionDelim">
            <div className="optionTag">Option B · Dossier · proposes a single re-shoot</div>
            <h2 className="optionTitle sans">Our People — Option B</h2>
          </header>

          <div className="pageH sans">
            <div className="crumbs">Life at Cleveland &amp; Co. / Our People</div>
            <h1>Our People</h1>
            <p>Pacesetting professionals across funds, investment management, financial services regulation and corporate governance.</p>
          </div>
        </div>

        <FilterNavB active={filterB} onFilter={setFilterB} showing={visibleB.length} total={people.length} />

        <div className="inner">
          <section className="rowCards">
            <div className="grid" data-active={filterB}>
              {people.map((person, i) => (
                <article
                  key={person.name}
                  className="cardB"
                  data-cat={person.cat}
                  style={{ display: visibleB.includes(person) ? 'flex' : 'none' }}
                >
                  <div className="photoB" aria-label={`Portrait of ${person.name}`}>
                    <PlaceholderPortrait tone={TONES[i % TONES.length]} label={`Portrait of ${person.name}`} />
                  </div>
                  <div className="bodyB">
                    <div className="nameB">{person.name}</div>
                    <span className="roleB">{person.role.toUpperCase()}</span>
                    <CardBMeta person={person} />
                    <div className="tagsB">
                      {person.tags.map(tag => <span key={tag}>{tag}</span>)}
                    </div>
                  </div>
                </article>
              ))}
            </div>
            {visibleB.length === 0 && (
              <div className="empty">No team members in this practice. Try another category.</div>
            )}
          </section>
        </div>
      </div>

    </div>
  )
}
