import { updatePemeriksaan, PemeriksaanById } from "./../../services/pemeriksaanService.ts";

export default async ({
  params,
  request,
  response,
}: {
  params: { id: string };
  request: any;
  response: any;
}) => {
  const pemeriksaanId = params.id;

  if (!pemeriksaanId) {
    response.status = 400;
    response.body = { message: "Invalid pemeriksaan ID" };
    return;
  }

  const foundPemeriksaan = await PemeriksaanById(pemeriksaanId);
  if (!foundPemeriksaan) {
    response.status = 404;
    response.body = { message: `Pemeriksaan with ID ${pemeriksaanId} not found` };
    return;
  }

  if (!request.hasBody) {
    response.status = 400;
    response.body = { message: "Invalid pemeriksaan data" };
    return;
  }

  const {
    value: { nomor_pemeriksaan, id_pasien, keluhan, resep, tanggal }
  } = await request.body();

  if (!nomor_pemeriksaan || !id_pasien || !keluhan || !resep || !tanggal) {
    response.status = 422;
    response.body = {
      message: "Incorrect pemeriksaan data. Nomor pemeriksaan, pasien, keluhan, resep and tanggal are required",
    };
    return;
  }

  const valueEdit = { nomor_pemeriksaan, id_pasien, keluhan, resep, tanggal };

  await updatePemeriksaan(pemeriksaanId, valueEdit);

  response.body = { message: "Pemeriksaan updated" };
};
