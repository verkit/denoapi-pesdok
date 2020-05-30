import { Router } from "https://deno.land/x/oak/mod.ts";

import getAllPasiens from "../controllers/pasien/getAllPasiens.ts";
import getPasienDetails from "../controllers/pasien/getPasienDetails.ts";
import createPasien from "../controllers/pasien/createPasien.ts";
import updatePasien from "../controllers/pasien/updatePasien.ts";
import deletePasien from "../controllers/pasien/deletePasien.ts";

import getAllPemeriksaans from "../controllers/pemeriksaan/getAllPemeriksaan.ts";
import getPemeriksaansDetails from "../controllers/pemeriksaan/getPemeriksaanDetail.ts";
import createPemeriksaans from "../controllers/pemeriksaan/createPemeriksaan.ts";
import updatePemeriksaans from "../controllers/pemeriksaan/updatePemeriksaan.ts";
import deletePemeriksaans from "../controllers/pemeriksaan/deletePemeriksaan.ts";

const router = new Router();

router
  .get("/api/pasien", getAllPasiens)
  .get("/api/pasien/:id", getPasienDetails)
  .post("/api/pasien", createPasien)
  .put("/api/pasien/:id", updatePasien)
  .delete("/api/pasien/:id", deletePasien);

router
  .get("/api/pemeriksaan", getAllPemeriksaans)
  .get("/api/pemeriksaan/:id", getPemeriksaansDetails)
  .post("/api/pemeriksaan", createPemeriksaans)
  .put("/api/pemeriksaan/:id", updatePemeriksaans)
  .delete("/api/pemeriksaan/:id", deletePemeriksaans);

router.get("/", (context) => {
  context.response.body = "Hello Api Deno!";
});

export default router;
