import client from "../db/database.ts";

class Pemeriksaan {
  findAll() {
    return client.execute(
      "SELECT *, pemeriksaan.id as id_periksa FROM pemeriksaan JOIN pasien ON pasien.id=pemeriksaan.id_pasien ORDER BY id_periksa",
    );
  }

  findHariIni() {
    return client.execute(
      `SELECT *, pemeriksaan.id as id_periksa FROM pemeriksaan  JOIN pasien ON pasien.id=pemeriksaan.id_pasien WHERE status = "antri" ORDER BY id_periksa `,
    );
  }

  antriHari() {
    let dateTime = new Date();
    let tahun = dateTime.getFullYear().toString();
    let bulan = (dateTime.getMonth() + 1).toString();
    let tanggal = dateTime.getDate().toString();
    if (bulan.length == 1) {
      bulan = "0" + bulan;
    }
    if (tanggal.length == 1) {
      tanggal = "0" + tanggal;
    }

    let sekarang = tahun + "-" + bulan + "-" + tanggal;
    return client.execute(
      `SELECT * FROM pemeriksaan WHERE tanggal = ? AND status = ?`,
      [
        sekarang.toString(),
        'antri'
      ],
    );
  }

  countPasienHari() {
    let dateTime = new Date();
    let tahun = dateTime.getFullYear().toString();
    let bulan = (dateTime.getMonth() + 1).toString();
    let tanggal = dateTime.getDate().toString();
    if (bulan.length == 1) {
      bulan = "0" + bulan;
    }
    if (tanggal.length == 1) {
      tanggal = "0" + tanggal;
    }

    let sekarang = tahun + "-" + bulan + "-" + tanggal;
    return client.execute(
      `SELECT * FROM pemeriksaan WHERE tanggal = ?`,
      [sekarang.toString()],
    );
  }

  findById(id: string) {
    return client.execute(
      `SELECT * FROM pemeriksaan JOIN pasien ON pasien.id=pemeriksaan.id_pasien WHERE nomor_pemeriksaan = ?`,
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
        status,
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
