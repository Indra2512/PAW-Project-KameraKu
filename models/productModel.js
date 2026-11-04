const products = [
    {
        id: 1,
        nama: 'Sony Alpha a7 IV',
        kategori: 'Full Frame Mirrorless',
        hargaSewa: 350000,
        status: 'Tersedia',
        gambar: 'https://placehold.co/600x400/indigo/white?text=Sony+Alpha+a7+IV'
    },
    {
        id: 2,
        nama: 'Canon EOS R6 Mark II',
        kategori: 'Full Frame Mirrorless',
        hargaSewa: 300000,
        status: 'Tersedia',
        gambar: 'https://placehold.co/600x400/indigo/white?text=Canon+EOS+R6+Mark+II'
    },
    {
        id: 3,
        nama: 'Sony FE 24-70mm f/2.8 GM II',
        kategori: 'Lensa',
        hargaSewa: 250000,
        status: 'Tersedia',
        gambar: 'https://placehold.co/600x400/indigo/white?text=Sony+FE+24-70mm+f/2.8+GM+II'
    },
    {
        id: 4,
        nama: 'Sigma 85mm f/1.4 DG DN Art',
        kategori: 'Lensa',
        hargaSewa: 200000,
        status: 'Disewa',
        gambar: 'https://placehold.co/600x400/indigo/white?text=Sigma+85mm+f/1.4+DG+DN+Art'
    }
];

const ProductModel = {
    getAllProducts: () => {
        return products;
    }
};

module.exports = ProductModel;