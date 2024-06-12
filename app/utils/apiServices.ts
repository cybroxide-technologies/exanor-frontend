export const getProductVariance = async (id: string) => {
  const response = await fetch("https://devapiv2.exanor.com/api/v1/product-variation-value/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user_id: "7688b96a-5857-488d-a402-c8f02d3f47b0",
      order_by: "variation_name",
      query: { store_id: "a5fc3b5c-07d5-4c89-bd12-b6dfd66b93b7", product_id: id },
    }),
  });
  if (!response.ok) {
    throw new Error("Failed to fetch product data");
  }

  return response.json();
};
