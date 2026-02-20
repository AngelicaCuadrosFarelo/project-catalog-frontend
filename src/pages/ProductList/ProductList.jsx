import { ProductCard } from "../../components/ProductCard/ProductCard";
import { useProducts } from "../../hooks/useProducts";
import { useQueryParams } from "../../hooks/useQueryParams";
import "./ProductList.css";
import { Pagination } from "../../components/Pagination/Pagination";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";

export function ProductList() {
  const { limit, page, search, category, setPage } = useQueryParams({});
  const { data, loading } = useProducts({ limit, page, search, category });

  if (loading) return <p>Cargando...</p>;

  return (
    <section className="ProducList page">
      <SectionTitle
        title="Listado de productos"
        description="Aqui podras encontrar la variedad de productos de tu preferencia."
      />
      <div className="ProductList_cards">
        {data?.data.length === 0 && <p>No hay datos para mostar</p>}
        {data?.data.map((product) => {
          const { _id } = product;
          return <ProductCard key={_id} id={product._id} {...product} />;
        })}
      </div>
      <Pagination
        currentPage={data?.currentPage}
        totalPages={data?.totalPages}
        onPageChage={(newPage) => setPage(newPage)}
      />
    </section>
  );
}
