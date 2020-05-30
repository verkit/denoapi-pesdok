import pasienModel from "../models/Pasien.ts";

const PasienAll = async () => {
  return await pasienModel.findAll();
};

const PasienById = async (pasienId: string) => {
  return await pasienModel.findById(pasienId);
};

const PemeriksaanPasien = async (pasienId: string) => {
  return await pasienModel.findPemeriksaan(pasienId);
};

const createPasien = async (pasienData: any) => {
  const newPasien = {
    nama_pasien: pasienData.nama_pasien,
    alamat: pasienData.alamat,
    usia: pasienData.usia,
  };

  await pasienModel.create(newPasien);

  return newPasien;
};

const updatePasien = async (pasienId: any, pasienData: any) => {
  const pasien = await PasienById(pasienId);

  if (Object.keys(pasien).length === 0 && pasien.constructor === Object) {
    throw new Error("Pasien not found");
  }

  const editPasien = {
    id: pasienId,
    nama_pasien: pasienData.nama_pasien,
    alamat: pasienData.alamat,
    usia: pasienData.usia,
  };

  try {
    await pasienModel.update(editPasien);
  } catch(err) {
    return { message: 'Error: Pasien not updated!', error: err.message }
  }
};

const deletePasien = async (pasienId: string) => {
  try {
    pasienModel.destroy(pasienId);
  } catch(err) {
    return { message: 'Error: Pasien not deleted!', error: err.message }
  }
};

export { 
  PasienAll, 
  PasienById, 
  PemeriksaanPasien,
  createPasien, 
  updatePasien, 
  deletePasien 
};
