import useSWR from "swr";
import { fetcher } from "../lib/utils";
import Layout from "../components/Layout";
import CardListProject from "../components/Projects/CardListProject";

export default function Work() {
  const { data } = useSWR("/api/projects", fetcher);
  console.log('data:', data)

  return (
    <Layout>

      <CardListProject data = { data } />

    </Layout>
  );
}
