import { updatePasien, PasienById } from "./../../services/pasienService.ts";

export default async ({
  params,
  request,
  response,
}: {
  params: { id: string };
  request: any;
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

  if (!request.hasBody) {
    response.status = 400;
    response.body = { message: "Invalid pasien data" };
    return;
  }

  const {
    value: { nama_pasien, alamat, usia }
  } = await request.body();

  if (!nama_pasien || !alamat || !usia) {
    response.status = 422;
    response.body = {
      message: "Incorrect pasien data. Nama, alamat and usia are required",
    };
    return;
  }

  const valueEdit = { nama_pasien, alamat, usia };

  await updatePasien(pasienId, valueEdit);

  response.body = { message: "Pasien updated" };
};
