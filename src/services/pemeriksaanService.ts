import pemeriksaanModel from "../models/Pemeriksaan.ts";

const PemeriksaanAll = async () => {
  return (await pemeriksaanModel.findAll()).rows;
};

const PemeriksaanHariIni = async () => {
  return {
    "periksa" : (await pemeriksaanModel.findHariIni()).rows,
    "antrian" : (await pemeriksaanModel.antriHari()).rows?.length,
    "jml_pasien_hari" : (await pemeriksaanModel.countPasienHari()).rows?.length,
  };
};

const PemeriksaanById = async (pemeriksaanId: string) => {
  return (await pemeriksaanModel.findById(pemeriksaanId)).rows;
};

const createPemeriksaan = async (pemeriksaanData: any) => {
  const newPemeriksaan = {
    nomor_pemeriksaan: pemeriksaanData.nomor_pemeriksaan,
    id_pasien: pemeriksaanData.id_pasien,
    keluhan: pemeriksaanData.keluhan,
    resep: pemeriksaanData.resep,
    tanggal: pemeriksaanData.tanggal,
    status: pemeriksaanData.status,
  };

  await pemeriksaanModel.create(newPemeriksaan);

  return newPemeriksaan;
};

const updatePemeriksaan = async (pemeriksaanId: any, pemeriksaanData: any) => {
  const pemeriksaan = await PemeriksaanById(pemeriksaanId);

  if (pemeriksaan?.length === 0 && pemeriksaan.constructor === Object) {
    throw new Error("Pemeriksaan not found");
  }

  const editPemeriksaan = {
    id: pemeriksaanId,
    nomor_pemeriksaan: pemeriksaanData.nomor_pemeriksaan,
    id_pasien: pemeriksaanData.id_pasien,
    keluhan: pemeriksaanData.keluhan,
    resep: pemeriksaanData.resep,
    tanggal: pemeriksaanData.tanggal,
    status: pemeriksaanData.status,
  };

  try {
    await pemeriksaanModel.update(editPemeriksaan);
  } catch (err) {
    return { message: "Error: Pemeriksaan not updated!", error: err.message };
  }
};

const deletePemeriksaan = async (pemeriksaanId: string) => {
  try {
    pemeriksaanModel.destroy(pemeriksaanId);
  } catch (err) {
    return { message: "Error: Pemeriksaan not deleted!", error: err.message };
  }
};

export {
  PemeriksaanAll,
  PemeriksaanHariIni,
  PemeriksaanById,
  createPemeriksaan,
  updatePemeriksaan,
  deletePemeriksaan,
};
