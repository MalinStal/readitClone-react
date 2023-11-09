//gör det möjligt att söka i serchbar på innehåll i bodyn(posten)

export function FilterItem(search, item) {
  return item.filter((post) => {
    return search.toLowerCase() === ""
      ? post
      : post.body.toLowerCase().includes(search);
  });
}
