import { createPemeriksaan } from "./../../services/pemeriksaanService.ts";

export default async ({
  request,
  response,
}: {
  request: any;
  response: any;
}) => {
  
  if (!request.hasBody) {
    response.status = 400;
    response.body = { message: "Invalid pemeriksaan data" };
    return;
  }

  const {
    value: { nomor_pemeriksaan, id_pasien, keluhan, resep, tanggal, status },
  } = await request.body();

  if (!nomor_pemeriksaan || !id_pasien || !keluhan || !resep || !tanggal || !status) {
    response.status = 422;
    response.body = {
      message:
        "Incorrect pemeriksaan data. Nomor pemeriksaan, pasien, keluhan, resep, tanggal and status are required",
    };
    return;
  }
  const pemeriksaan = await createPemeriksaan(
    { nomor_pemeriksaan, id_pasien, keluhan, resep, tanggal, status },
  );

  response.body = {
    message: "Pemeriksaan created",
    data: pemeriksaan,
  };
};
