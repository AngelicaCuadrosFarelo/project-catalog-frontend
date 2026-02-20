import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

export function useQueryParams({
  defaultPage = 1,
  defaultLimit = 20,
  defaultSearch = "",
  defaultCategory = "",
}) {
  const [searchParams, setSearchParams] = useSearchParams();

  const rawPage = Number(searchParams.get("page"));
  const page = rawPage > 0 ? rawPage : defaultPage;

  const rawLimit = Number(searchParams.get("limit"));
  const limit = rawLimit > 0 ? rawLimit : defaultLimit;

  const search = searchParams.get("search") || defaultSearch;
  const category = searchParams.get("category") || defaultCategory;

  useEffect(() => {
    const validate =
      !searchParams.get("page") ||
      !searchParams.get("limit") ||
      rawPage < 1 ||
      rawLimit < 1 ||
      !searchParams.get("search") ||
      !searchParams.get("category");
    if (validate) {
      setSearchParams(
        { page: String(page), limit: String(limit), search, category },
        { replace: true },
      );
    }
  }, [
    searchParams,
    setSearchParams,
    page,
    limit,
    rawPage,
    rawLimit,
    search,
    category,
  ]);

  const setPage = (newPage) => {
    const safePage = newPage < 1 ? 1 : newPage;
    searchParams.set("page", String(safePage));
    setSearchParams(searchParams);
  };

  const setLimit = (newLimit) => {
    const safeLimit = newLimit < 1 ? 1 : newLimit;
    searchParams.set("limit", String(safeLimit));
    setSearchParams(searchParams);
  };

  const setSearch = (newSearch) => {
    searchParams.set("search", newSearch);
    setSearchParams(searchParams);
  };

  const setCategory = (newCategory) => {
    searchParams.set("category", newCategory);
    setSearchParams(searchParams);
  };

  return {
    page,
    limit,
    search,
    category,
    setPage,
    setLimit,
    setCategory,
    setSearch,
  };
}
