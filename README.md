
# DenoApiRest

Simple example Api Rest with Deno and Oak

  

## Install Deno on Linux and MacOS

  

```

$ curl -fsSL https://deno.land/x/install/install.sh | sh

```

  

## Run Deno

  

```

$ deno run --allow-net --allow-read --allow-write src/index.ts

```

  

## Dokumentasi API

|#|METHOD|URL|Params|
|--|--|--|--|
|**Pasien**|--|--|--|
| Mengambil seluruh data | GET | http://127.0.0.1:8000/api/pasien |--|
| Mengambil data |GET  |  http://127.0.0.1:8000/api/pasien/:id|id|
| Menambah data |POST  |  http://127.0.0.1:8000/api/pasien/:id|nama, alamat, umur|
| Mengubah data |PUT  |  http://127.0.0.1:8000/api/pasien/:id|nama, alamat, umur|
| Menghapus data |DELETE  |   http://127.0.0.1:8000/api/pasien/:id|id|
|**Pemeriksaan**|--|--|--|
| Mengambil seluruh data | GET | http://127.0.0.1:8000/api/pemeriksaan |--|
| Mengambil data |GET  |  http://127.0.0.1:8000/api/pemeriksaan/:id|id|
| Menambah data |POST  |  http://127.0.0.1:8000/api/pemeriksaan/:id|nomor_pemeriksaan, id_pasien, keluhan, resep, tanggal, status|
| Mengubah data |PUT  |  http://127.0.0.1:8000/api/pemeriksaan/:id|nomor_pemeriksaan, id_pasien, keluhan, resep, tanggal, status|
| Menghapus data |DELETE  |   http://127.0.0.1:8000/api/pemeriksaan/:id|id|