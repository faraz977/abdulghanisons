import { Link } from 'react-router-dom'
import { copy, company, packingOptions, processSteps, industries } from '../data/company'
import { categories } from '../data/products'
import ProductPhoto from '../components/ProductPhoto'

const pillars = [
  { title: 'World wide delivery', copy: copy.delivery },
  { title: 'Grade matching', copy: copy.support },
  { title: 'Guaranteed quality', copy: copy.quality },
  { title: 'What we make', copy: copy.capabilities },
]

const millGallery = [
  { src: '/images/rags/workshop.jpg', alt: 'Wiping rag in use on industrial equipment', caption: 'Industrial wipe-off on the job' },
  { src: '/images/rags/shop.jpg', alt: 'Cotton rag used in a workshop', caption: 'Workshop wiping with cotton rags' },
  { src: '/images/rags/industrial.jpg', alt: 'Hands holding industrial wiping rags', caption: 'Rags ready for packing and use' },
  { src: '/images/hero/white-pile.jpg', alt: 'Pile of white cotton wiping rags', caption: 'White cotton rags, mill and reclaim' },
  { src: '/images/hero/color-rags.jpg', alt: 'Color reclaimed wiping rags', caption: 'Color reclaim for shop and yard work' },
  { src: '/images/rags/rags.jpg', alt: 'Cotton wiping rags close up', caption: 'Cotton wipe, cut to industrial size' },
]

const rangeImages = {
  'fresh-white': '/images/categories/fresh-white.png',
  'reclaimed-white': '/images/categories/reclaimed-white.png',
  'reclaimed-color': '/images/categories/reclaimed-color.png',
}

const processPhotos = [
  { src: '/images/hero/white-tshirt.jpg', step: 'Sort', copy: processSteps[0].copy },
  { src: '/images/rags/blog.jpg', step: 'Prepare', copy: processSteps[1].copy },
  { src: '/images/rags/blog2.jpg', step: 'Cut', copy: processSteps[2].copy },
  { src: '/images/hero/heather-rags.jpg', step: 'Pack', copy: processSteps[3].copy },
]

export default function About() {
  return (
    <div>
      <div className="mx-auto max-w-6xl px-5 py-16">
        <p className="text-xs uppercase tracking-[0.22em] text-mist">About AGS</p>
        <h1 className="mt-3 max-w-3xl font-display text-5xl leading-tight md:text-6xl">
          A Karachi mill for industrial wiping rags
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-ink-soft">{copy.aboutUs}</p>
      </div>

      <div className="mx-auto max-w-6xl px-5">
        <ProductPhoto src="/images/rags/workshop.jpg" alt="Industrial wiping rags at Abdul Ghani Sons" height="h-[28rem]" />
      </div>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl">Who we are</h2>
            <p className="mt-4 leading-7 text-ink-soft">{copy.whoWeAre}</p>
            <p className="mt-4 leading-7 text-ink-soft">{copy.history}</p>
            <p className="mt-4 leading-7 text-ink-soft">{copy.mission}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <ProductPhoto src="/images/rags/shop.jpg" alt="Mill shop floor" height="h-52" />
            <ProductPhoto src="/images/rags/industrial.jpg" alt="Packed industrial rags" height="h-52" />
            <ProductPhoto src="/images/hero/white-pile.jpg" alt="White rag pile" height="h-52" />
            <ProductPhoto src="/images/hero/color-rags.jpg" alt="Color rag pile" height="h-52" />
          </div>
        </div>
      </section>

      <section className="bg-paper-deep">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <p className="text-xs uppercase tracking-[0.22em] text-mist">The works</p>
          <h2 className="mt-2 font-display text-4xl">North Karachi Industrial Area</h2>
          <p className="mt-4 max-w-3xl leading-7 text-ink-soft">{copy.mill}</p>
          <p className="mt-4 max-w-3xl leading-7 text-ink-soft">{copy.whyKarachi}</p>
          <p className="mt-6 text-sm font-medium text-navy">{company.address}</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {millGallery.map((shot) => (
              <figure key={shot.src}>
                <ProductPhoto src={shot.src} alt={shot.alt} height="h-48" />
                <figcaption className="px-1 pt-3 text-sm text-mist">{shot.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="font-display text-4xl">How we work with importers</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="border border-navy/10 p-6">
              <h3 className="text-xl font-semibold text-navy">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-7 text-ink-soft">{pillar.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-navy text-paper">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="font-display text-4xl">Three rag series, 19 grades</h2>
          <p className="mt-4 max-w-3xl leading-7 text-paper/80">{copy.capabilities}</p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {categories.map((item) => (
              <Link key={item.id} to={`/products?range=${item.id}`} className="block no-underline">
                <ProductPhoto src={rangeImages[item.id]} alt={item.label} height="h-44" />
                <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-blue">{item.series}</p>
                <h3 className="mt-1 text-lg font-semibold text-paper">{item.label}</h3>
                <p className="mt-2 text-sm leading-6 text-paper/75">{item.blurb}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="font-display text-4xl">Safe Rag process</h2>
        <p className="mt-4 max-w-3xl leading-7 text-ink-soft">{copy.howWeDoIt}</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {processPhotos.map((item) => (
            <article key={item.step}>
              <ProductPhoto src={item.src} alt={item.step} height="h-56" />
              <h3 className="mt-4 text-xl font-semibold text-navy">{item.step}</h3>
              <p className="mt-2 text-sm leading-6 text-mist">{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-paper-deep">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="font-display text-4xl">Packing for export</h2>
          <p className="mt-4 max-w-3xl leading-7 text-ink-soft">{copy.packaging}</p>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-mist">{company.packing}</p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {packingOptions.map((option) => (
              <figure key={option.label}>
                <ProductPhoto src={option.src} alt={option.label} height="h-48" />
                <figcaption className="px-1 pt-3">
                  <p className="text-sm font-medium text-navy">{option.label}</p>
                  <p className="mt-1 text-sm text-mist">{option.copy}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="font-display text-4xl">Industries we pack for</h2>
        <p className="mt-4 max-w-3xl leading-7 text-ink-soft">
          The same mill ships polishing jersey for auto shops and heavy reclaim for yards,
          printers, and oil-field work. Grade matching is part of the quote.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {industries.map((industry) => (
            <div key={industry.name}>
              <ProductPhoto src={industry.image} alt={industry.name} height="h-24" />
              <p className="mt-2 text-sm font-medium text-navy">{industry.name}</p>
              <p className="mt-1 text-xs leading-5 text-mist">{industry.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-paper-deep">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="font-display text-4xl">Talk to the mill</h2>
          <p className="mt-4 max-w-3xl leading-7 text-ink-soft">{copy.people}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="rounded bg-blue px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-paper hover:bg-blue-deep"
            >
              Request a quote
            </Link>
            <Link
              to="/products"
              className="rounded border border-navy/20 px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-navy"
            >
              View rag grades
            </Link>
          </div>
          <div className="mt-12">
            <p className="text-xs uppercase tracking-[0.22em] text-mist">Export markets</p>
            <div className="mt-6 flex flex-wrap items-center gap-6">
              {company.markets.map((market) => (
                <div key={market.name} className="flex w-20 flex-col items-center gap-2 text-center">
                  <img src={market.flag} alt="" className="h-14 w-14 rounded-full object-cover shadow" />
                  <span className="text-xs text-mist">{market.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
