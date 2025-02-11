# 🏨 Hotel Reference API - Kota Padang

API untuk mengakses data referensi hotel di Kota Padang.

## 📋 Tentang Proyek

API ini menyediakan informasi lengkap tentang hotel-hotel yang ada di Kota Padang, termasuk:

- Data hotel bintang 1-4
- Hotel non-bintang
- Informasi kontak dan PIC
- Jumlah kamar
- Alamat lengkap

## 🛠️ Teknologi

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** JSON file
- **Documentation:** HTML & CSS

## 📁 Struktur Proyek

```
project/
├── public/
│   └── index.html      # API documentation
├── data/
│   └── hotels.json     # Hotel data
├── server.js           # Main server file
└── README.md          # This file
```

## ⚙️ Prerequisites

- Node.js (versi 21 atau lebih tinggi)
- NPM (Node Package Manager)

## 🚀 Instalasi

1. Clone repositori

```bash
git clone https://github.com/kp-dpmptsp-padang/padang-hotel-api.git
cd padang-hotel-api
```

2. Install dependencies

```bash
npm install
```

3. Jalankan server

```bash
npm run start
```

Server akan berjalan di `http://localhost:3000`

## 📌 Endpoint API

### Get All Hotels

```
GET /hotels
```

Query Parameters:

- `search` - Cari hotel berdasarkan nama
- `star_rating` - Filter berdasarkan rating (0-4)
- `limit` - Jumlah data per halaman (default: 10)
- `page` - Nomor halaman (default: 1)

### Get Hotel by ID

```
GET /hotels/:id
```

## 💡 Penggunaan

### Contoh Request

```bash
# Get semua hotel
curl http://localhost:3000/hotels

# Cari hotel berdasarkan nama
curl http://localhost:3000/hotels?search=mercure

# Filter hotel bintang 4
curl http://localhost:3000/hotels?star_rating=4

# Get hotel spesifik by ID
curl http://localhost:3000/hotels/1
```

### Contoh Response

```json
{
  "hotels": [
    {
      "id": 1,
      "name": "Amaris Hotel",
      "classification": "Hotel",
      "star_rating": 2,
      "total_rooms": 98,
      "address": "Jl. Sudirman No.19 Padang Barat, Kota Padang",
      "contact": {
        "pic_name": "Edwar",
        "phone": "+62 811 8091 307",
        "office_phone": "+62751 32777",
        "email": "Padang@amarishotel.com"
      }
    }
  ]
}
```

## 📄 API Documentation

Dokumentasi lengkap API dapat diakses di:

```
http://localhost:3000
```

## 🔑 Environment Variables

| Variable | Description       | Default |
| -------- | ----------------- | ------- |
| PORT     | Port untuk server | 3000    |

## 👥 Tim Pengembang

- **Mustafa Fathur Rahman**
- **Khalied Nauly Maturino**

## 📞 Support

Jika Anda menemukan masalah atau memiliki pertanyaan, silakan hubungi:

- Email: khalidmaturino@gmail.com

---

© 2025 DPMPTSP Kota Padang. All Rights Reserved.
