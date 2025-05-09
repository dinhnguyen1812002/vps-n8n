"use server";

export default async function getPrice(id) {
  return await fetch(
    "https://support.interdata.vn/packages.php?gid=" + parseInt(id) + "&module",
    {
      next: {
        revalidate: 60,
      },
    },
  )
    .then((res) => res.json())
    .catch((error) => {
      console.log(error);
    });
}
