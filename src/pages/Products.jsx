import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { categories, productsByCategory } from '../data/products'
import { copy, company } from '../data/company'
import ProductCard from '../components/ProductCard'

export default function Products() {
  const [params, setParams] = useSearchParams()
  const active = params.get('range') || 'all'
  const list = useMemo(() => productsByCategory(active), [active])
  const current = categories.find((category) => category.id === active)

  function setRange(id) {
    if (id === 'all') setParams({})
    else setParams({ range: id })
  }

  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <p className="text-xs uppercase tracking-[0.22em] text-mist">Wiping rag catalogue</p>
      <h1 className="mt-3 font-display text-5xl md:text-6xl">Cotton rags, grade by grade.</h1>
      <p className="mt-4 max-w-3xl leading-7 text-ink-soft">{copy.aboutUs}</p>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-mist">
        Standard cut {company.sizeStandard}. {copy.packaging}
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setRange('all')}
          className={`rounded-full px-4 py-2 text-xs uppercase tracking-[0.14em] ${
            active === 'all' ? 'bg-navy text-paper' : 'border border-navy/15 text-ink-soft'
          }`}
        >
          All rags
        </button>
        {categories.map((category) => (
          <button
            key={category.id}
            type="button"
            onClick={() => setRange(category.id)}
            className={`rounded-full px-4 py-2 text-xs uppercase tracking-[0.14em] ${
              active === category.id ? 'bg-navy text-paper' : 'border border-navy/15 text-ink-soft'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {current && <p className="mt-6 max-w-3xl text-sm leading-6 text-mist">{current.blurb}</p>}

      <p className="mt-6 text-sm text-mist">{list.length} grades in this view</p>
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  )
}
