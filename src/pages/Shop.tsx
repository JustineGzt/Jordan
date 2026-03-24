import ProduitCard from '@/components/ui/ProduitCard'
import { Produits, type Produit } from '@/data/produits'

export default function Shop() {
  const handleAdd = (produit: Produit) => {
    console.log('Ajout au panier :', produit.name)
  }

  return (
    <div className="max-w-screen-xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-black uppercase mb-10">Shop</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Produits.map((produit) => (
          <ProduitCard key={produit.id} produit={produit} onAdd={handleAdd} />
        ))}
      </div>
    </div>
  )
}
