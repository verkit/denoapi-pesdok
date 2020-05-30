import { PasienAll } from "./../../services/pasienService.ts";

export default async ({ response }: { response: any }) => {
  response.body = await PasienAll();
};
