import { Link } from 'react-router-dom'
import ProductPhoto from './ProductPhoto'

export default function ProductCard({ product }) {
  return (
    <Link
      to={`/products/${product.slug}`}
      className="group block no-underline transition hover:-translate-y-0.5"
    >
      <ProductPhoto src={product.image} alt={product.name} />
      <div className="px-1 pt-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-deep">
          {product.code}
        </p>
        <h3 className="mt-2 text-lg font-semibold leading-tight text-navy group-hover:text-blue-deep">
          {product.name}
        </h3>
        <p className="mt-2 text-sm text-mist">{product.material}</p>
      </div>
    </Link>
  )
}
