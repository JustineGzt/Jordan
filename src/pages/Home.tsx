import ProduitCard from '@/components/ui/ProduitCard'
import { Produits, type Produit } from '@/data/produits'

export default function Home() {
  const handleAdd = (produit: Produit) => {
    console.log('Ajout au panier :', produit.name)
  }

  return (
    <>
      <div className="px-4 py-8 text-center sm:px-6">
        <h1 className="mx-auto max-w-full whitespace-nowrap text-[clamp(0.7rem,3vw,1rem)] font-black uppercase leading-tight tracking-tight sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl">
          Jordan <span className="text-red-600">New Collection</span> Available
        </h1>
      </div>

      <div className="w-full h-[500px] md:h-[800px] from-gray-950 via-gray-900 to-black flex items-center justify-center">
        <img src="/Header.png" alt="Header" className="w-full h-full object-cover " />
      </div>

      <section className="max-w-screen-xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {Produits.slice(0, 3).map((produit) => (
            <ProduitCard key={produit.id} produit={produit} onAdd={handleAdd} />
          ))}
        </div>
      </section>
    </>
  )
}
