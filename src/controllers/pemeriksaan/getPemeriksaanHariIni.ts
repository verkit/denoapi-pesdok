import { PemeriksaanHariIni } from "./../../services/pemeriksaanService.ts";

export default async ({ response }: { response: any }) => {
  response.body = await PemeriksaanHariIni();
};
