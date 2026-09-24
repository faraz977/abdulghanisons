import { Link } from 'react-router-dom'
import { copy, company, industries, testimonials, processSteps } from '../data/company'
import { categories, products } from '../data/products'
import ProductCard from '../components/ProductCard'
import ProductPhoto from '../components/ProductPhoto'

const highlights = products.filter((item) =>
  ['AGSF-01', 'AGSF-02', 'AGSU-01', 'AGSUC-01', 'AGSU-03', 'AGSU-08'].includes(item.code),
)

const rangeImages = {
  'fresh-white': '/images/categories/fresh-white.png',
  'reclaimed-white': '/images/categories/reclaimed-white.png',
  'reclaimed-color': '/images/categories/reclaimed-color.png',
}

export default function Home() {
  return (
    <div>
      <section
        className="relative min-h-[520px] bg-navy bg-cover bg-center text-paper"
        style={{ backgroundImage: "url('/images/hero/color-rags.jpg')" }}
      >
        <div className="hero-scrim absolute inset-0" />
        <div className="relative mx-auto flex max-w-6xl flex-col justify-center px-5 py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue">
            Cotton rags · Wiping rags · Karachi export mill
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
            Industrial wiping rags, graded and packed for import.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-paper/85">
            Abdul Ghani Sons manufactures fresh mill-white jersey and reclaimed cotton
            rags (T-shirt, sweatshirt, woven, flannel, and terry cuts) in a standard
            15 cm × 15 cm wipe, shipped worldwide from Karachi.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/products"
              className="rounded bg-blue px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-paper hover:bg-blue-deep"
            >
              View rag grades
            </Link>
            <Link
              to="/contact"
              className="rounded border border-paper/40 px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-paper"
            >
              Request a quote
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-navy/10 bg-paper">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 sm:grid-cols-3">
          {[
            ['19 grades', 'AGSF fresh whites, AGSU reclaimed white, AGSUC color reclaim.'],
            ['15 cm × 15 cm', 'Standard industrial cut. Other sizes quoted to order.'],
            ['5–500 kg', 'Polythene, jute, or cotton bags and compressed bales.'],
          ].map(([title, body]) => (
            <div key={title}>
              <p className="text-2xl font-semibold text-navy">{title}</p>
              <p className="mt-2 text-sm leading-6 text-mist">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-deep">The mill</p>
            <h2 className="mt-2 text-3xl font-semibold text-navy md:text-4xl">
              Cotton rags for industrial wipe programs
            </h2>
          </div>
          <p className="leading-7 text-ink-soft">{copy.aboutUs}</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {[
            ['World wide delivery', copy.delivery],
            ['Grade matching', copy.support],
            ['Guaranteed quality', copy.quality],
          ].map(([title, body]) => (
            <article key={title} className="border-t-4 border-blue bg-paper-deep p-6">
              <h3 className="text-lg font-semibold text-navy">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-mist">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-paper-deep">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-deep">Three series</p>
          <h2 className="mt-2 text-3xl font-semibold text-navy md:text-4xl">Every wiping rag we ship</h2>
          <p className="mt-4 max-w-3xl leading-7 text-ink-soft">
            Choose fresh mill stock when lint and brightness matter. Choose reclaim when
            volume, sustainability, and price lead. Color reclaim is the industrial
            workhorse for grease, ink, and paint.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {categories.map((item) => (
              <Link
                key={item.id}
                to={`/products?range=${item.id}`}
                className="block no-underline"
              >
                <ProductPhoto src={rangeImages[item.id]} alt={item.label} height="h-52" />
                <div className="px-1 pt-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-deep">
                    {item.series}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-navy">{item.label}</h3>
                  <p className="mt-2 text-sm leading-6 text-mist">{item.blurb}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-deep">Safe Rag process</p>
        <h2 className="mt-2 text-3xl font-semibold text-navy">How a bale is made</h2>
        <p className="mt-4 max-w-3xl leading-7 text-ink-soft">{copy.howWeDoIt}</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <article key={step.title} className="border border-navy/10 p-5">
              <p className="text-xs font-semibold text-blue-deep">0{index + 1}</p>
              <h3 className="mt-2 text-lg font-semibold text-navy">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-mist">{step.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-deep">Catalogue</p>
            <h2 className="mt-2 text-3xl font-semibold text-navy">Featured wiping rags</h2>
          </div>
          <Link to="/products" className="hidden text-sm font-semibold text-blue-deep md:block">
            Full catalogue →
          </Link>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <section className="bg-navy text-paper">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="text-3xl font-semibold">Who we are</h2>
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            <p className="leading-7 text-paper/80">{copy.whoWeAre}</p>
            <p className="leading-7 text-paper/80">{copy.capabilities}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-deep">
          Industries that buy our rags
        </p>
        <h2 className="mt-2 text-3xl font-semibold text-navy">From workshops to shipyards</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {industries.map((industry) => (
            <div key={industry.name} className="overflow-hidden">
              <ProductPhoto src={industry.image} alt={industry.name} height="h-28" />
              <div className="px-1 pt-3">
                <p className="font-medium text-navy">{industry.name}</p>
                <p className="mt-1 text-xs leading-5 text-mist">{industry.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-paper-deep">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-deep">
            What importers say
          </p>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {testimonials.map((item) => (
              <blockquote key={item.name} className="bg-paper p-6 shadow-sm">
                <p className="leading-7 text-ink-soft">“{item.quote}”</p>
                <footer className="mt-4 text-sm font-semibold text-navy">
                  {item.name} · {item.role}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-deep">
          Trusted buyers worldwide
        </p>
        <h2 className="mt-2 text-3xl font-semibold text-navy">Rag shipments from Karachi</h2>
        <div className="mt-8 flex flex-wrap items-center gap-6">
          {company.markets.map((market) => (
            <div key={market.name} className="flex w-20 flex-col items-center gap-2 text-center">
              <img src={market.flag} alt="" className="h-14 w-14 rounded-full object-cover shadow" />
              <span className="text-xs text-mist">{market.name}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
