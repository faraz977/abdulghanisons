import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getProduct, relatedProducts } from '../data/products'
import { copy, company } from '../data/company'
import InquiryForm from '../components/InquiryForm'
import ProductCard from '../components/ProductCard'
import ProductPhoto from '../components/ProductPhoto'

export default function ProductDetail() {
  const { slug } = useParams()
  const product = getProduct(slug)
  const gallery = product?.images?.length ? product.images : product ? [product.image] : []
  const [active, setActive] = useState(gallery[0])

  useEffect(() => {
    setActive(gallery[0])
  }, [slug])

  if (!product) {
    return (
      <div className="mx-auto max-w-3xl px-5 py-20">
        <h1 className="font-display text-4xl">Product not found</h1>
        <Link to="/products" className="mt-4 inline-block text-blue-deep">
          Back to catalogue
        </Link>
      </div>
    )
  }

  const related = relatedProducts(product)
  const specs = [
    ['Item code', product.code],
    ['Material', product.material],
    ['Origin', product.origin],
    ['Absorbency', product.absorbency],
    ['Lint', product.lint],
    ['Hand / construction', product.hand],
    ['Standard cut', company.sizeStandard],
    ['Packing', '5–500 kg bags or compressed bales'],
  ]

  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <Link to="/products" className="text-sm text-mist hover:text-blue-deep">
        ← All wiping rags
      </Link>
      <div className="mt-6 grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <ProductPhoto src={active} alt={product.name} height="h-[26rem]" zoomable />
          {gallery.length > 1 && (
            <div className="mt-3 grid grid-cols-4 gap-2 sm:grid-cols-5">
              {gallery.map((src) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setActive(src)}
                  className={`overflow-hidden rounded-md ring-2 ${
                    active === src ? 'ring-blue' : 'ring-navy/10'
                  }`}
                  aria-label="Show this photo"
                >
                  <img src={src} alt="" className="h-16 w-full object-cover" />
                </button>
              ))}
            </div>
          )}
          <p className="mt-6 text-xs uppercase tracking-[0.22em] text-mist">{product.code}</p>
          <h1 className="mt-2 font-display text-5xl leading-tight">{product.name}</h1>
          <p className="mt-3 text-lg text-ink-soft">{product.material}</p>
          <p className="mt-5 max-w-xl leading-7">{product.summary}</p>
          <p className="mt-4 max-w-xl text-sm font-medium text-navy">Best for: {product.bestFor}</p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-ink-soft">{product.process}</p>
          <ul className="mt-6 grid gap-2 text-sm text-ink-soft">
            {product.points.map((point) => (
              <li key={point}>- {point}</li>
            ))}
          </ul>

          <h2 className="mt-10 text-xl font-semibold text-navy">Typical applications</h2>
          <ul className="mt-3 grid gap-2 text-sm text-ink-soft sm:grid-cols-2">
            {product.uses.map((use) => (
              <li key={use} className="border border-navy/10 px-3 py-2">
                {use}
              </li>
            ))}
          </ul>

          <h2 className="mt-10 text-xl font-semibold text-navy">Specifications</h2>
          <dl className="mt-3 divide-y divide-navy/10 border border-navy/10">
            {specs.map(([label, value]) => (
              <div key={label} className="grid grid-cols-2 gap-4 px-4 py-3 text-sm">
                <dt className="text-mist">{label}</dt>
                <dd className="text-navy">{value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 text-sm leading-7 text-mist">{copy.packaging}</p>
        </div>
        <div className="h-fit border border-ink/10 bg-paper p-6 md:sticky md:top-28">
          <h2 className="font-display text-3xl">Quote this grade</h2>
          <p className="mt-2 text-sm text-ink-soft">
            Include destination port, monthly kilos, cut size if not 15 cm, and bag or bale weight.
          </p>
          <div className="mt-6">
            <InquiryForm presetInterest={product.name} />
          </div>
        </div>
      </div>
      <section className="mt-16">
        <h2 className="font-display text-3xl">Related rag grades</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {related.map((item) => (
            <ProductCard key={item.slug} product={item} />
          ))}
        </div>
      </section>
    </div>
  )
}
