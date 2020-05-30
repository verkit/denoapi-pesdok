import { createPasien } from "./../../services/pasienService.ts";

export default async ({
  request,
  response,
}: {
  request: any;
  response: any;
}) => {
  if (!request.hasBody) {
    response.status = 400;
    response.body = { message: "Invalid pasien data" };
    return;
  }

  const {
    value: { nama_pasien, alamat, usia },
  } = await request.body();

  if (!nama_pasien || !alamat || !usia) {
    response.status = 422;
    response.body = {
      message: "Incorrect pasien data. Nama, alamat and usia are required",
    };
    return;
  }

  const pasien = await createPasien({ nama_pasien, alamat, usia });

  response.body = { 
    message: "Pasien created", 
    data: pasien 
  };
};
