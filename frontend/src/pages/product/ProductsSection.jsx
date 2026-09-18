import React, { useEffect, useState } from 'react'
import ProductCard from '../../components/Product/ProductCard'
import { getAllProducts } from '../../api/ProuductApi'
import ProductCardSkeleton from './ProductCardSkeleton'

const ProductsSection = () => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        setError(null)
        const data = await getAllProducts()
        setProducts(data || [])
      } catch (err) {
        console.error("Error fetching products:", err)
        setError(err.message || "Failed to load products")
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  return (
    <section className='max-w-full bg-PageBackground py-10 min-h-screen'>
      <div className="w-[90%] md:w-[96%] mx-auto">
        <div className="mb-10">
          <h1 className="text-4xl font-Playfair font-bold">
            Shop Products
          </h1>

          <p className="text-slate-500 mt-2 font-DMSans">
            Immerse yourself in our curated collection of premium products.
          </p>
        </div>

        {error ? (
          <div className="text-center py-16 bg-white rounded-2xl shadow p-8 max-w-lg mx-auto">
            <p className="text-red-500 font-semibold text-lg mb-2">Oops! Something went wrong.</p>
            <p className="text-gray-600 text-sm mb-6">{error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="bg-black text-white px-6 py-2 rounded-full hover:bg-orange-500 transition"
            >
              Try Again
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {loading
              ? [...Array(8)].map((_, index) => (
                <ProductCardSkeleton key={index} />
              ))
              : products.length > 0 ? (
                products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))
              ) : (
                <div className="col-span-full text-center py-16 text-gray-500">
                  No products found.
                </div>
              )}
          </div>
        )}
      </div>
    </section>
  )
}

export default ProductsSection