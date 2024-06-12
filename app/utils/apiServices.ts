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
export async function validateProductAvailability(variations: [string], product_id: string, quantity: number) {
  const endpoint = "https://devapiv2.exanor.com/api/v1/validate-product-availability/";
  const payload = {
    user_id: "7688b96a-5857-488d-a402-c8f02d3f47b0",
    variations: ["e722eb51-a6c8-4373-8b6f-66a851b198c0", "4d30a4b0-5396-4003-a296-6ba8bdc2f2cd"],
    quantity: 1,
    store_id: "a5fc3b5c-07d5-4c89-bd12-b6dfd66b93b7",
    product_id: "c8c37635-e605-490e-a58c-b75243b28c57",
  };

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to validate product availability:", error);
    return null;
  }
}
