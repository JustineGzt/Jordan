import type { Produit } from '@/data/produits'

interface ProduitCardProps {
  produit: Produit
  onAdd?: (produit: Produit) => void
}

export default function ProductCard({ produit, onAdd }: ProduitCardProps) {
  return (
    <div className="group flex flex-col">
      <div className="overflow-hidden bg-gray-100">
        <img
          src={produit.image}
          alt={produit.name}
          className="w-full h-44 sm:h-56 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="flex items-center justify-between pt-3">
        <div>
          <p className="text-sm font-medium text-gray-900">{produit.name}</p>
          <p className="text-sm text-gray-600">${produit.price}</p>
        </div>
        <button
          onClick={() => onAdd?.(produit)}
          aria-label={`Ajouter ${produit.name} au panier`}
          className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-xl leading-none hover:bg-gray-800 transition-colors flex-shrink-0"
        >
          +
        </button>
      </div>
    </div>
  )
}
