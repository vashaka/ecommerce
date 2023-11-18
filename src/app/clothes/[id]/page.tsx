/* eslint-disable @next/next/no-img-element */
import ClothesCard from "@/components/UI/ClothesCard";
import SingleItemPageCard from "@/components/UI/SingleItemPageCard";

async function getSinglelItem(id: any) {
  try {
    const res = await fetch(`http://localhost:3000/api/clothes/${id}`);
    const data = await res.json();
    return data.foundItem;
  } catch (error) {
    console.log(error);
  }
}

export default async function SignleItemPage({ params }: any) {
  const foundItem = await getSinglelItem(params.id);
  return (
    <>
      <SingleItemPageCard foundItem={foundItem} />
    </>
  );
}
