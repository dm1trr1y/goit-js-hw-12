import axios from "axios";

export default async function getImagesByQuery(query, page) {
  const searchParams = new URLSearchParams({
    key: "53656110-41a2fc396959a6e939ebdf929",
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
    per_page: 15,
    page: page,
  });

  try {
    const answer = await axios.get(`https://pixabay.com/api/?${searchParams}`);
    return {
      images: answer.data.hits,
      total: answer.data.total,
    };
  } catch (error) {
    console.log(error);
  }
}
