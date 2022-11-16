import useSWR from "swr";
import { fetcher } from "../lib/utils";
import Layout from "../components/Layout";
import CardListProject from "../components/Projects/CardListProject";

export default function Work() {
  const { data, error } = useSWR("/api/projects", fetcher);

  if (error) {
      console.log( error )
      return <div>failed to load</div>
  }

  if (!data) {
      return <div>loading...</div>
  }

  return (
    <Layout>

      <CardListProject data = { data } />

    </Layout>
  );
}
