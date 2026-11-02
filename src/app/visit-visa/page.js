import SitePage from "../SitePage";

export default async function Page({ searchParams }) {
  const params = await searchParams;
  const initialService = typeof params?.service === "string" ? params.service : "";

  return <SitePage pageKey="visit-visa" initialService={initialService} />;
}
