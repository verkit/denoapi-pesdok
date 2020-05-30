import client from "../db/database.ts";

class Pemeriksaan {
  findAll() {
    return client.execute("SELECT * FROM pemeriksaan ORDER BY id");
  }

  findById(id: string) {
    return client.execute(
      `SELECT * FROM pemeriksaan WHERE id = ? ORDER BY id`,
      [id],
    );
  }

  create(
    { nomor_pemeriksaan, id_pasien, keluhan, resep, tanggal, status }: {
      nomor_pemeriksaan: string;
      id_pasien: number;
      keluhan: string;
      resep: string;
      tanggal: string;
      status: string;
    },
  ) {
    return client.execute(
      "INSERT INTO pemeriksaan (nomor_pemeriksaan, id_pasien, keluhan, resep, tanggal, status) VALUES (?, ?, ?, ?, ?, ?)",
      [
        nomor_pemeriksaan,
        id_pasien,
        keluhan,
        resep,
        tanggal,
        status
      ],
    );
  }

  update(
    { id, nomor_pemeriksaan, id_pasien, keluhan, resep, tanggal, status }: {
      id: string;
      nomor_pemeriksaan: string;
      id_pasien: string;
      keluhan: string;
      resep: string;
      tanggal: string;
      status: string;
    },
  ) {
    return client.execute(
      `UPDATE pemeriksaan SET nomor_pemeriksaan= ?, id_pasien= ?, keluhan=?, resep=?, tanggal=?, status=? WHERE id = ?`,
      [
        nomor_pemeriksaan,
        id_pasien,
        keluhan,
        resep,
        tanggal,
        status,
        id,
      ],
    );
  }

  destroy(id: string) {
    return client.execute(`DELETE FROM pemeriksaan WHERE id = ?`, [id]);
  }
}

export default new Pemeriksaan();
