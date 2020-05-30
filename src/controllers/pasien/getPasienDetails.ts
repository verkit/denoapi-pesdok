import { PasienById, PemeriksaanPasien } from "./../../services/pasienService.ts";

export default async ({
  params,
  response,
}: {
  params: { id: string };
  response: any;
}) => {
  const pasienId = params.id;

  if (!pasienId) {
    response.status = 400;
    response.body = { message: "Invalid pasien ID" };
    return;
  }

  const foundPasien = await PasienById(pasienId);

  if (!foundPasien) {
    response.status = 404;
    response.body = { message: `Pasien with ID ${pasienId} not found` };
    return;
  }

  const foundPemeriksaan = await PemeriksaanPasien(pasienId);

  response.body = { foundPasien,  foundPemeriksaan};
};
