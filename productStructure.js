const products = [
  "preto-PP",
  "preto-M",
  "preto-G",
  "preto-GG",
  "preto-GG",
  "branco-PP",
  "branco-G",
  "vermelho-M",
  "azul-XG",
  "azul-XG",
  "azul-XG",
  "azul-P"
]

module.exports = () => {
  const productStructure = {};

  products.forEach(product => {
    const [color, size] = product.split("-");
    if (!productStructure[color]) {
      productStructure[color] = {};
    }
    if (!productStructure[color][size]) {
      productStructure[color][size] = 0;
    }
    productStructure[color][size]++;
  });

  return productStructure;
};
