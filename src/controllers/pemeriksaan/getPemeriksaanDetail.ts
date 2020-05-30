import { PemeriksaanById } from "./../../services/pemeriksaanService.ts";

export default async ({
  params,
  response,
}: {
  params: { id: string };
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

  response.body = foundPemeriksaan;
};
