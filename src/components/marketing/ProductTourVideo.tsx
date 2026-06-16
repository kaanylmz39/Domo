import { useEffect, useState } from 'react'
import { Check, MonitorPlay, Pause, Play } from 'lucide-react'

const tourScenes = [
  {
    title: 'Cockpit overview',
    subtitle: 'Start with the numbers that matter most.',
    type: 'cockpit',
    points: ['Monthly and yearly income', 'Expenses and result', 'Recent portfolio activity'],
  },
  {
    title: 'Portfolio view',
    subtitle: 'Move from portfolio level into each property and unit.',
    type: 'portfolio',
    points: ['Buildings and single units', 'Rent separated per unit', 'Tenant and contract visibility'],
  },
  {
    title: 'Property dossier',
    subtitle: 'Keep the full property archive in one structured place.',
    type: 'dossier',
    points: ['Overview and unit details', 'Contracts and documents', 'Valuations and developments'],
  },
  {
    title: 'Rent control',
    subtitle: 'Follow up monthly rent without rebuilding a spreadsheet.',
    type: 'rent',
    points: ['Expected rent from contracts', 'Paid, partial, and unpaid status', 'Payment dates and notes'],
  },
  {
    title: 'AI inbox',
    subtitle: 'Review suggested document names and categories before filing.',
    type: 'inbox',
    points: ['Mock upload workflow', 'Suggested property and type', 'Approval before organizing'],
  },
  {
    title: 'Reports',
    subtitle: 'Turn clean records into useful owner, bank, and tax views.',
    type: 'reports',
    points: ['Bank and tax previews', 'Unpaid rent overview', 'Valuation summaries'],
  },
]

export function MiniVisual({ type }: { type: string }) {
  if (type === 'cockpit') {
    return (
      <div className="rounded-xl border border-gray-200 bg-white p-3 shadow-sm">
        <div className="grid grid-cols-2 gap-2 mb-3">
          {['€ 12.850', '€ 154k', '€ 62k', '€ 91k'].map((value, index) => (
            <div key={value} className="rounded-lg border border-gray-100 bg-gray-50 p-2">
              <div className="h-1.5 w-12 rounded bg-gray-200 mb-2" />
              <div className={`text-sm font-bold ${index === 2 ? 'text-red-500' : 'text-brand-700'}`}>{value}</div>
            </div>
          ))}
        </div>
        <div className="space-y-2">
          <div className="h-2 rounded bg-brand-100 w-full" />
          <div className="h-2 rounded bg-gray-100 w-4/5" />
          <div className="h-2 rounded bg-gray-100 w-2/3" />
        </div>
      </div>
    )
  }

  if (type === 'portfolio') {
    return (
      <div className="rounded-xl border border-gray-200 bg-white p-3 shadow-sm">
        {[
          ['Keizersgracht 274', '€ 2.150'],
          ['Unit A', '€ 1.250'],
          ['Unit B', '€ 900'],
        ].map(([name, rent], index) => (
          <div key={name} className={`flex items-center justify-between py-2 ${index > 0 ? 'pl-4 border-t border-gray-100' : ''}`}>
            <div>
              <div className="text-xs font-semibold text-gray-800">{name}</div>
              <div className="text-[10px] text-gray-400">{index === 0 ? 'Amsterdam - building' : 'Rented - active contract'}</div>
            </div>
            <div className="text-xs font-bold text-brand-700">{rent}</div>
          </div>
        ))}
      </div>
    )
  }

  if (type === 'dossier') {
    return (
      <div className="rounded-xl border border-gray-200 bg-white p-3 shadow-sm">
        <div className="flex gap-1.5 mb-3 overflow-hidden">
          {['Overview', 'Units', 'Contracts'].map(tab => (
            <div key={tab} className={`rounded-md px-2 py-1 text-[10px] font-medium ${tab === 'Overview' ? 'bg-brand-100 text-brand-800' : 'bg-gray-100 text-gray-500'}`}>{tab}</div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-lg bg-gray-50 p-2">
            <div className="h-2 rounded bg-gray-200 mb-2" />
            <div className="h-2 rounded bg-gray-100 w-2/3" />
          </div>
          <div className="rounded-lg bg-gray-50 p-2">
            <div className="h-2 rounded bg-gray-200 mb-2" />
            <div className="h-2 rounded bg-brand-100 w-3/4" />
          </div>
        </div>
      </div>
    )
  }

  if (type === 'rent') {
    return (
      <div className="rounded-xl border border-gray-200 bg-white p-3 shadow-sm">
        {[
          ['Jan de Vries', 'Paid', 'text-brand-700 bg-brand-50'],
          ['Sophie Bakker', 'Partial', 'text-amber-700 bg-amber-50'],
          ['Cafe de Witte', 'Unpaid', 'text-red-600 bg-red-50'],
        ].map(([tenant, status, style]) => (
          <div key={tenant} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
            <span className="text-xs font-medium text-gray-700">{tenant}</span>
            <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${style}`}>{status}</span>
          </div>
        ))}
      </div>
    )
  }

  if (type === 'inbox') {
    return (
      <div className="rounded-xl border border-gray-200 bg-white p-3 shadow-sm">
        <div className="rounded-lg border border-dashed border-brand-200 bg-brand-50 p-3 mb-3">
          <div className="text-xs font-semibold text-brand-800">scan_3948_final.pdf</div>
          <div className="text-[10px] text-brand-700 mt-1">Suggested rename ready</div>
        </div>
        <div className="h-2 rounded bg-gray-100 mb-2" />
        <div className="h-2 rounded bg-gray-100 w-3/4 mb-3" />
        <div className="rounded-md bg-brand-600 text-white text-center text-[10px] font-semibold py-1.5">Approve</div>
      </div>
    )
  }

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-3 shadow-sm">
      <div className="grid grid-cols-3 gap-2 mb-3">
        {[55, 78, 42].map(height => (
          <div key={height} className="flex items-end h-16 rounded-lg bg-gray-50 px-2">
            <div className="w-full rounded-t bg-brand-400" style={{ height: `${height}%` }} />
          </div>
        ))}
      </div>
      <div className="h-2 rounded bg-gray-100 w-full mb-2" />
      <div className="h-2 rounded bg-gray-100 w-2/3" />
    </div>
  )
}

type ProductTourVideoProps = {
  showIntro?: boolean
  className?: string
}

export default function ProductTourVideo({ showIntro = true, className = '' }: ProductTourVideoProps) {
  const [activeScene, setActiveScene] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const scene = tourScenes[activeScene]

  useEffect(() => {
    if (!isPlaying) return

    const timer = window.setInterval(() => {
      setActiveScene(current => (current + 1) % tourScenes.length)
    }, 3600)

    return () => window.clearInterval(timer)
  }, [isPlaying])

  return (
    <section className={`max-w-6xl mx-auto ${className}`}>
      {showIntro && (
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-brand-600 uppercase tracking-wide mb-3">Product video</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Watch the Domo flow in one minute</h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            A short guided preview shows how a client moves from overview to properties, rent control, documents, and reports.
          </p>
        </div>
      )}

      <div className="rounded-2xl border border-gray-200 bg-gray-950 p-3 sm:p-4 shadow-2xl">
        <div className="rounded-xl overflow-hidden bg-white">
          <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-brand-500" />
              </div>
              <span className="hidden sm:inline text-xs font-medium text-gray-400">domo.nl/walkthrough</span>
            </div>
            <button
              type="button"
              onClick={() => setIsPlaying(value => !value)}
              className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-3 py-1.5 text-xs font-semibold text-white hover:bg-gray-800 transition"
            >
              {isPlaying ? <Pause size={13} /> : <Play size={13} />}
              {isPlaying ? 'Pause' : 'Play'}
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr]">
            <div className="min-h-[360px] bg-gradient-to-br from-brand-900 via-gray-900 to-gray-950 p-5 sm:p-8 text-white flex flex-col justify-between">
              <div className="flex items-center justify-between gap-4 mb-8">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-brand-100">
                  <MonitorPlay size={14} />
                  Scene {activeScene + 1} of {tourScenes.length}
                </div>
                <div className="hidden sm:flex items-center gap-1.5">
                  {tourScenes.map((item, index) => (
                    <button
                      key={item.title}
                      type="button"
                      onClick={() => {
                        setActiveScene(index)
                        setIsPlaying(false)
                      }}
                      className={`h-2 rounded-full transition-all ${index === activeScene ? 'w-8 bg-brand-300' : 'w-2 bg-white/30 hover:bg-white/50'}`}
                      aria-label={`Show ${item.title}`}
                    />
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[0.95fr_1.05fr] gap-8 items-center">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-brand-200 mb-3">Guided walkthrough</p>
                  <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">{scene.title}</h3>
                  <p className="text-brand-100 leading-relaxed mb-6">{scene.subtitle}</p>
                  <div className="space-y-3">
                    {scene.points.map(point => (
                      <div key={point} className="flex items-center gap-3 text-sm text-white/90">
                        <span className="h-6 w-6 rounded-lg bg-brand-400/20 text-brand-200 flex items-center justify-center">
                          <Check size={14} />
                        </span>
                        {point}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-white/95 p-4 shadow-xl">
                  <MiniVisual type={scene.type} />
                </div>
              </div>

              <div className="mt-8 grid grid-cols-6 gap-2">
                {tourScenes.map((item, index) => (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => {
                      setActiveScene(index)
                      setIsPlaying(false)
                    }}
                    className="h-1.5 rounded-full bg-white/20 overflow-hidden"
                    aria-label={`Jump to ${item.title}`}
                  >
                    <span className={`block h-full rounded-full bg-brand-300 transition-all ${index <= activeScene ? 'w-full' : 'w-0'}`} />
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white p-5 sm:p-6">
              <h3 className="font-semibold text-gray-900 mb-4">What the video covers</h3>
              <div className="space-y-2">
                {tourScenes.map((item, index) => (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => {
                      setActiveScene(index)
                      setIsPlaying(false)
                    }}
                    className={`w-full text-left rounded-xl border p-3 transition ${
                      index === activeScene
                        ? 'border-brand-300 bg-brand-50'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-sm font-semibold text-gray-900">{item.title}</span>
                      <span className="text-xs font-bold text-brand-700">{String(index + 1).padStart(2, '0')}</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{item.subtitle}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
