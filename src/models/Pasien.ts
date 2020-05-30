import client from "../db/database.ts";

class Pasien {
  findAll() {
    return client.execute("SELECT * FROM pasien ORDER BY id");
  }

  findById(id: string) {
    return client.execute(
      `SELECT * FROM pasien WHERE id = ? ORDER BY id`,
      [id],
    );
  }

  findPemeriksaan(id: string) {
    return client.execute(
      `SELECT * FROM pemeriksaan WHERE id_pasien = ? AND status = "selesai" ORDER BY id`,
      [id],
    );
  }


  create(
    { nama_pasien, alamat, usia }: {
      nama_pasien: string;
      alamat: string;
      usia: string;
    },
  ) {
    return client.execute(
      "INSERT INTO pasien (nama_pasien, alamat, usia) VALUES (?, ?, ?)",
      [
        nama_pasien,
        alamat,
        usia,
      ],
    );
  }

  update(
    { id, nama_pasien, alamat, usia }: {
      id: string;
      nama_pasien: string;
      alamat: string;
      usia: string;
    },
  ) {
    return client.execute(
      `UPDATE pasien SET nama_pasien= ?, alamat= ?, usia=? WHERE id = ?`,
      [
        nama_pasien,
        alamat,
        usia,
        id,
      ],
    );
  }

  destroy(id: string) {
    return client.execute(`DELETE FROM pasien WHERE id = ?`, [id]);
  }
}

export default new Pasien();
